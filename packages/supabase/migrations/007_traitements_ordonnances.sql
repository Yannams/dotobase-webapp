-- Migration 007: Traitements (prescriptions) et ordonnances

-- Prescription individuelle par médicament
CREATE TABLE public.traitements (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id      UUID NOT NULL REFERENCES public.patients (id) ON DELETE CASCADE,
  medecin_id      UUID NOT NULL REFERENCES public.medecins (id) ON DELETE RESTRICT,
  consultation_id UUID REFERENCES public.consultations (id) ON DELETE SET NULL,
  medicament_id   UUID REFERENCES public.medicaments (id) ON DELETE RESTRICT,
  medicament_libre VARCHAR(200),  -- si médicament non dans le catalogue
  dosage          VARCHAR(50)  NOT NULL,
  voie            VARCHAR(20)  NOT NULL CHECK (voie IN ('orale', 'injectable', 'topique', 'inhalee', 'sublinguale', 'autre')),
  frequence       VARCHAR(100) NOT NULL,   -- ex: "2 fois par jour"
  date_debut      DATE         NOT NULL DEFAULT CURRENT_DATE,
  date_fin        DATE,
  posologie       TEXT,
  precautions     TEXT,
  statut          VARCHAR(20)  NOT NULL DEFAULT 'actif' CHECK (statut IN ('actif', 'termine', 'suspendu', 'annule')),
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE public.traitements IS 'Prescriptions médicamenteuses individuelles.';

CREATE INDEX idx_traitements_patient    ON public.traitements (patient_id);
CREATE INDEX idx_traitements_medecin    ON public.traitements (medecin_id);
CREATE INDEX idx_traitements_statut     ON public.traitements (statut);

CREATE TRIGGER trg_traitements_updated_at
  BEFORE UPDATE ON public.traitements
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Ordonnance (document regroupant plusieurs traitements)
CREATE TABLE public.ordonnances (
  id                    UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  consultation_id       UUID NOT NULL REFERENCES public.consultations (id) ON DELETE CASCADE,
  patient_id            UUID NOT NULL REFERENCES public.patients (id) ON DELETE CASCADE,
  medecin_id            UUID NOT NULL REFERENCES public.medecins (id) ON DELETE RESTRICT,
  numero                VARCHAR(50) NOT NULL UNIQUE,  -- numéro d'ordonnance séquentiel
  date_emission         DATE        NOT NULL DEFAULT CURRENT_DATE,
  date_validite         DATE        NOT NULL,
  instructions_generales TEXT,
  statut                VARCHAR(20) NOT NULL DEFAULT 'active' CHECK (statut IN ('active', 'expiree', 'annulee')),
  created_at            TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at            TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE public.ordonnances IS 'Document ordonnance regroupant les prescriptions d''une consultation.';

CREATE INDEX idx_ordonnances_consultation ON public.ordonnances (consultation_id);
CREATE INDEX idx_ordonnances_patient      ON public.ordonnances (patient_id);

CREATE TRIGGER trg_ordonnances_updated_at
  BEFORE UPDATE ON public.ordonnances
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
