-- Migration 005: Consultations et constantes vitales

CREATE TABLE public.consultations (
  id               UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id       UUID NOT NULL REFERENCES public.patients (id) ON DELETE CASCADE,
  medecin_id       UUID NOT NULL REFERENCES public.medecins (id) ON DELETE RESTRICT,
  etablissement_id UUID NOT NULL REFERENCES public.etablissements (id) ON DELETE RESTRICT,
  type             VARCHAR(20) NOT NULL DEFAULT 'rdv' CHECK (type IN ('rdv', 'urgence', 'walk_in', 'telemedicine')),
  motif            TEXT        NOT NULL,
  service          VARCHAR(100),
  salle            VARCHAR(50),
  statut           VARCHAR(20) NOT NULL DEFAULT 'en_cours' CHECK (statut IN ('en_cours', 'terminee', 'annulee')),
  notes            TEXT,
  date_consultation TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE public.consultations IS 'Consultations médicales. Type : rdv, urgence, walk_in, telemedicine.';

CREATE INDEX idx_consultations_patient   ON public.consultations (patient_id);
CREATE INDEX idx_consultations_medecin   ON public.consultations (medecin_id);
CREATE INDEX idx_consultations_date      ON public.consultations (date_consultation DESC);
CREATE INDEX idx_consultations_statut    ON public.consultations (statut);

CREATE TRIGGER trg_consultations_updated_at
  BEFORE UPDATE ON public.consultations
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Constantes vitales relevées lors d'une consultation
CREATE TABLE public.constantes_vitales (
  id                   UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  consultation_id      UUID NOT NULL REFERENCES public.consultations (id) ON DELETE CASCADE,
  tension_systolique   INTEGER,  -- mmHg
  tension_diastolique  INTEGER,  -- mmHg
  temperature          NUMERIC(4,1),  -- °C
  frequence_cardiaque  INTEGER,  -- bpm
  spo2                 INTEGER,  -- %
  poids                NUMERIC(5,1),  -- kg
  taille               INTEGER,  -- cm
  observations         TEXT,
  created_at           TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE public.constantes_vitales IS 'Constantes vitales relevées lors d''une consultation.';

CREATE INDEX idx_constantes_consultation ON public.constantes_vitales (consultation_id);
