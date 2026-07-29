-- Migration 009: Accès dossiers, journal d'audit, notifications, paramètres médecin

-- Demandes d'accès au dossier patient (consentement)
CREATE TABLE public.acces_dossiers (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id     UUID NOT NULL REFERENCES public.patients (id) ON DELETE CASCADE,
  medecin_id     UUID NOT NULL REFERENCES public.medecins (id) ON DELETE CASCADE,
  motif          VARCHAR(50) NOT NULL CHECK (motif IN ('consultation', 'urgence', 'suivi', 'transfert', 'autre')),
  methode_auth   VARCHAR(20) NOT NULL CHECK (methode_auth IN ('npi', 'otp', 'empreinte')),
  duree_heures   INTEGER NOT NULL DEFAULT 24 CHECK (duree_heures IN (12, 24, 168, 720)),  -- 12h, 24h, 7j, 30j
  date_expiration TIMESTAMPTZ NOT NULL,
  statut         VARCHAR(20) NOT NULL DEFAULT 'en_attente' CHECK (statut IN ('en_attente', 'approuve', 'refuse', 'expire')),
  created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at     TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE public.acces_dossiers IS 'Consentements d''accès au dossier patient. Conforme RG12.';

CREATE INDEX idx_acces_patient  ON public.acces_dossiers (patient_id);
CREATE INDEX idx_acces_medecin  ON public.acces_dossiers (medecin_id);
CREATE INDEX idx_acces_statut   ON public.acces_dossiers (statut);

CREATE TRIGGER trg_acces_updated_at
  BEFORE UPDATE ON public.acces_dossiers
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Journal d'audit (immutable — pas de UPDATE ni DELETE)
CREATE TABLE public.audit_logs (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  table_name  VARCHAR(50)  NOT NULL,
  record_id   UUID         NOT NULL,
  action      VARCHAR(10)  NOT NULL CHECK (action IN ('INSERT', 'UPDATE', 'DELETE', 'SELECT')),
  medecin_id  UUID REFERENCES public.medecins (id) ON DELETE SET NULL,
  old_values  JSONB,
  new_values  JSONB,
  ip_address  INET,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE public.audit_logs IS 'Journal d''audit immuable. Pas de UPDATE/DELETE autorisés par RLS.';

CREATE INDEX idx_audit_table_record ON public.audit_logs (table_name, record_id);
CREATE INDEX idx_audit_medecin      ON public.audit_logs (medecin_id);
CREATE INDEX idx_audit_created_at   ON public.audit_logs (created_at DESC);

-- Notifications médecin
CREATE TABLE public.notifications (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  medecin_id UUID NOT NULL REFERENCES public.medecins (id) ON DELETE CASCADE,
  type       VARCHAR(50) NOT NULL CHECK (type IN ('nouveau_patient', 'resultat_analyse', 'demande_acces', 'alerte_critique', 'systeme')),
  titre      VARCHAR(200) NOT NULL,
  message    TEXT         NOT NULL,
  est_lue    BOOLEAN      NOT NULL DEFAULT FALSE,
  data       JSONB        DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE public.notifications IS 'Notifications envoyées aux médecins (in-app).';

CREATE INDEX idx_notifications_medecin  ON public.notifications (medecin_id);
CREATE INDEX idx_notifications_non_lues ON public.notifications (medecin_id) WHERE est_lue = FALSE;

-- Paramètres médecin (1 ligne par médecin)
CREATE TABLE public.parametres_medecin (
  id                     UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  medecin_id             UUID NOT NULL UNIQUE REFERENCES public.medecins (id) ON DELETE CASCADE,
  theme                  VARCHAR(10) NOT NULL DEFAULT 'clair' CHECK (theme IN ('clair', 'sombre')),
  taille_police          VARCHAR(10) NOT NULL DEFAULT 'normale' CHECK (taille_police IN ('petite', 'normale', 'grande')),
  duree_acces_defaut     INTEGER NOT NULL DEFAULT 24 CHECK (duree_acces_defaut IN (12, 24, 168, 720)),
  notif_nouveau_patient  BOOLEAN NOT NULL DEFAULT TRUE,
  notif_resultats        BOOLEAN NOT NULL DEFAULT TRUE,
  notif_demande_acces    BOOLEAN NOT NULL DEFAULT TRUE,
  created_at             TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at             TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE public.parametres_medecin IS 'Préférences et paramètres par médecin. 1 ligne par médecin.';

CREATE TRIGGER trg_parametres_updated_at
  BEFORE UPDATE ON public.parametres_medecin
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
