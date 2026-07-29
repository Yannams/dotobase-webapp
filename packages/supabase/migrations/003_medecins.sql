-- Migration 003: Médecins et lien médecin-établissement

-- Médecins — id = auth.users.id (UUID Supabase Auth)
CREATE TABLE public.medecins (
  id              UUID PRIMARY KEY REFERENCES auth.users (id) ON DELETE CASCADE,
  npi             VARCHAR(20)  NOT NULL UNIQUE,  -- Numéro Personnel d'Identification (Bénin)
  nom             VARCHAR(100) NOT NULL,
  prenom          VARCHAR(100) NOT NULL,
  specialite_id   UUID REFERENCES public.specialites (id) ON DELETE SET NULL,
  telephone       VARCHAR(20),
  email           VARCHAR(150),
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE public.medecins IS 'Profils des médecins. id = auth.users.id.';
COMMENT ON COLUMN public.medecins.npi IS 'Numéro Personnel d''Identification national (10 chiffres).';

CREATE INDEX idx_medecins_npi ON public.medecins (npi);
CREATE INDEX idx_medecins_specialite ON public.medecins (specialite_id);

CREATE TRIGGER trg_medecins_updated_at
  BEFORE UPDATE ON public.medecins
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Table de lien médecin ↔ établissement (M2M)
CREATE TABLE public.medecin_etablissements (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  medecin_id       UUID NOT NULL REFERENCES public.medecins (id) ON DELETE CASCADE,
  etablissement_id UUID NOT NULL REFERENCES public.etablissements (id) ON DELETE CASCADE,
  role             VARCHAR(50) DEFAULT 'medecin' CHECK (role IN ('medecin', 'infirmier', 'admin', 'directeur')),
  est_principal    BOOLEAN NOT NULL DEFAULT FALSE,
  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (medecin_id, etablissement_id)
);

COMMENT ON TABLE public.medecin_etablissements IS 'Association médecin-établissement. est_principal = établissement de rattachement principal.';

CREATE INDEX idx_medecin_etab_medecin ON public.medecin_etablissements (medecin_id);
CREATE INDEX idx_medecin_etab_etab    ON public.medecin_etablissements (etablissement_id);
