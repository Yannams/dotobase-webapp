-- Migration 001: Tables de référence (specialites, icd10_codes, medicaments)
-- Ces tables sont remplies par le seed.sql et ne changent pas fréquemment.

-- Utilitaire : mise à jour automatique de updated_at
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Spécialités médicales
CREATE TABLE public.specialites (
  id   UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code VARCHAR(20)  NOT NULL UNIQUE,
  nom  VARCHAR(100) NOT NULL UNIQUE
);

COMMENT ON TABLE public.specialites IS 'Référentiel des spécialités médicales.';

-- Codes CIM-10 (Classification Internationale des Maladies, 10e révision)
CREATE TABLE public.icd10_codes (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  code           VARCHAR(10)  NOT NULL UNIQUE,
  description_fr TEXT         NOT NULL,
  categorie      VARCHAR(100),
  sous_categorie VARCHAR(100)
);

COMMENT ON TABLE public.icd10_codes IS 'Référentiel CIM-10 utilisé pour les diagnostics.';

CREATE INDEX idx_icd10_codes_code ON public.icd10_codes (code);
CREATE INDEX idx_icd10_codes_description ON public.icd10_codes USING gin(to_tsvector('french', description_fr));

-- Médicaments (catalogue national, liste essentielle Bénin)
CREATE TABLE public.medicaments (
  id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nom                 VARCHAR(200) NOT NULL,
  classe              VARCHAR(100),
  forme               VARCHAR(50),   -- comprimé, sirop, injection, etc.
  dosages_disponibles JSONB DEFAULT '[]',
  actif               BOOLEAN NOT NULL DEFAULT TRUE
);

COMMENT ON TABLE public.medicaments IS 'Catalogue des médicaments (liste essentielle Bénin).';

CREATE INDEX idx_medicaments_nom ON public.medicaments USING gin(to_tsvector('french', nom));
