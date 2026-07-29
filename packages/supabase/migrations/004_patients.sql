-- Migration 004: Patients et dossiers médicaux

CREATE TABLE public.patients (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  npi            VARCHAR(20)  NOT NULL UNIQUE,  -- Numéro Personnel d'Identification patient
  nom            VARCHAR(100) NOT NULL,
  prenom         VARCHAR(100) NOT NULL,
  date_naissance DATE         NOT NULL,
  sexe           CHAR(1)      NOT NULL CHECK (sexe IN ('M', 'F')),
  telephone      VARCHAR(20),
  email          VARCHAR(150),
  adresse        TEXT,
  groupe_sanguin VARCHAR(5)   CHECK (groupe_sanguin IN ('A+','A-','B+','B-','AB+','AB-','O+','O-')),
  created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at     TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE public.patients IS 'Patients identifiés par leur NPI national.';
COMMENT ON COLUMN public.patients.npi IS 'Numéro Personnel d''Identification patient (identité sanitaire nationale).';

CREATE INDEX idx_patients_npi ON public.patients (npi);
CREATE INDEX idx_patients_nom ON public.patients (nom, prenom);

CREATE TRIGGER trg_patients_updated_at
  BEFORE UPDATE ON public.patients
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Dossier médical — 1 par patient, créé à la première consultation
CREATE TABLE public.dossiers_medicaux (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id UUID NOT NULL UNIQUE REFERENCES public.patients (id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE public.dossiers_medicaux IS 'Dossier médical unique par patient. Point d''entrée du record médical.';

CREATE TRIGGER trg_dossiers_updated_at
  BEFORE UPDATE ON public.dossiers_medicaux
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
