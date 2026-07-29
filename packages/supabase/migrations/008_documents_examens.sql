-- Migration 008: Documents médicaux et examens

-- Documents médicaux (liés au patient, optionnellement à une consultation)
CREATE TABLE public.documents (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id      UUID NOT NULL REFERENCES public.patients (id) ON DELETE CASCADE,
  medecin_id      UUID NOT NULL REFERENCES public.medecins (id) ON DELETE RESTRICT,
  consultation_id UUID REFERENCES public.consultations (id) ON DELETE SET NULL,
  categorie       VARCHAR(50) NOT NULL CHECK (categorie IN ('analyse', 'imagerie', 'ecg', 'compte_rendu', 'ordonnance', 'autre')),
  titre           VARCHAR(200) NOT NULL,
  url_storage     TEXT NOT NULL,   -- chemin Supabase Storage
  format          VARCHAR(20),     -- pdf, jpg, png, dicom, etc.
  taille_octets   BIGINT,
  est_urgent      BOOLEAN NOT NULL DEFAULT FALSE,
  priorite        VARCHAR(20) NOT NULL DEFAULT 'normal' CHECK (priorite IN ('normal', 'important', 'critique')),
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE public.documents IS 'Documents médicaux (analyses, imagerie, comptes rendus). Stockés dans Supabase Storage.';

CREATE INDEX idx_documents_patient    ON public.documents (patient_id);
CREATE INDEX idx_documents_categorie  ON public.documents (categorie);
CREATE INDEX idx_documents_priorite   ON public.documents (priorite);

CREATE TRIGGER trg_documents_updated_at
  BEFORE UPDATE ON public.documents
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

-- Examens médicaux demandés (prescriptions d'examens)
CREATE TABLE public.examens (
  id              UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  patient_id      UUID NOT NULL REFERENCES public.patients (id) ON DELETE CASCADE,
  medecin_id      UUID NOT NULL REFERENCES public.medecins (id) ON DELETE RESTRICT,
  consultation_id UUID REFERENCES public.consultations (id) ON DELETE SET NULL,
  type_examen     VARCHAR(50) NOT NULL CHECK (type_examen IN ('analyse_sanguine', 'imagerie', 'ecg', 'biopsie', 'endoscopie', 'autre')),
  nom             VARCHAR(200) NOT NULL,
  priorite        VARCHAR(20) NOT NULL DEFAULT 'normale' CHECK (priorite IN ('faible', 'normale', 'urgente')),
  statut          VARCHAR(20) NOT NULL DEFAULT 'en_attente' CHECK (statut IN ('en_attente', 'en_cours', 'termine', 'annule')),
  motif           TEXT,
  instructions    TEXT,
  date_demande    TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  date_resultat   TIMESTAMPTZ,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE public.examens IS 'Examens médicaux prescrits. Statuts : en_attente, en_cours, termine, annule.';

CREATE INDEX idx_examens_patient   ON public.examens (patient_id);
CREATE INDEX idx_examens_medecin   ON public.examens (medecin_id);
CREATE INDEX idx_examens_statut    ON public.examens (statut);
CREATE INDEX idx_examens_priorite  ON public.examens (priorite);

CREATE TRIGGER trg_examens_updated_at
  BEFORE UPDATE ON public.examens
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
