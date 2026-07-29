-- Migration 002: Établissements de santé

CREATE TABLE public.etablissements (
  id        UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nom       VARCHAR(200) NOT NULL,
  type      VARCHAR(50)  NOT NULL CHECK (type IN ('hopital', 'clinique', 'dispensaire', 'cabinet', 'autre')),
  ville     VARCHAR(100) NOT NULL,
  adresse   TEXT,
  telephone VARCHAR(20),
  email     VARCHAR(150),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

COMMENT ON TABLE public.etablissements IS 'Établissements de santé (hôpitaux, cliniques, cabinets).';

CREATE INDEX idx_etablissements_ville ON public.etablissements (ville);
