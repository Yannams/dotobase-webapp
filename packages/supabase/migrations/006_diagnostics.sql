-- Migration 006: Diagnostics médicaux (codifiés CIM-10)

CREATE TABLE public.diagnostics (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  consultation_id UUID NOT NULL REFERENCES public.consultations (id) ON DELETE CASCADE,
  patient_id      UUID NOT NULL REFERENCES public.patients (id) ON DELETE CASCADE,
  icd10_code_id   UUID REFERENCES public.icd10_codes (id) ON DELETE RESTRICT,
  code_libre      VARCHAR(10),  -- si code non trouvé dans la base CIM-10
  type            VARCHAR(15) NOT NULL DEFAULT 'principal' CHECK (type IN ('principal', 'secondaire', 'differentiel')),
  commentaire     TEXT,
  severite        VARCHAR(20) CHECK (severite IN ('legere', 'moderee', 'severe', 'critique')),
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  -- Un seul diagnostic principal par consultation
  CONSTRAINT uq_diagnostic_principal UNIQUE NULLS NOT DISTINCT (consultation_id, type)
    DEFERRABLE INITIALLY DEFERRED
);

-- Remove the unique constraint on principal — multiple can exist but only 1 principal per consult
-- Re-create as partial unique index instead
ALTER TABLE public.diagnostics DROP CONSTRAINT IF EXISTS uq_diagnostic_principal;

CREATE UNIQUE INDEX idx_uq_diagnostic_principal
  ON public.diagnostics (consultation_id)
  WHERE type = 'principal';

COMMENT ON TABLE public.diagnostics IS 'Diagnostics posés lors d''une consultation. 1 seul diagnostic principal par consultation.';

CREATE INDEX idx_diagnostics_consultation ON public.diagnostics (consultation_id);
CREATE INDEX idx_diagnostics_patient      ON public.diagnostics (patient_id);
CREATE INDEX idx_diagnostics_icd10        ON public.diagnostics (icd10_code_id);

CREATE TRIGGER trg_diagnostics_updated_at
  BEFORE UPDATE ON public.diagnostics
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
