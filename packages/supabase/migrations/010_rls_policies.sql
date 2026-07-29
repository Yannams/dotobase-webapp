-- Migration 010: Row Level Security (RLS) — Conformité RG12/RG15 Bénin
-- Principe : un médecin accède uniquement aux données pour lesquelles il a un accès autorisé.

-- Activer RLS sur toutes les tables métier
ALTER TABLE public.medecins              ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.medecin_etablissements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.patients              ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.dossiers_medicaux     ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.consultations         ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.constantes_vitales    ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.diagnostics           ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.traitements           ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ordonnances           ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.documents             ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.examens               ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.acces_dossiers        ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs            ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications         ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.parametres_medecin    ENABLE ROW LEVEL SECURITY;

-- Tables de référence : lecture publique (authentifiés), pas d'écriture via client
ALTER TABLE public.specialites  ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.icd10_codes  ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.medicaments  ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.etablissements ENABLE ROW LEVEL SECURITY;

-- ─── REFERENCE TABLES (read-only authenticated) ─────────────────────────────

CREATE POLICY "specialites_read" ON public.specialites
  FOR SELECT TO authenticated USING (TRUE);

CREATE POLICY "icd10_read" ON public.icd10_codes
  FOR SELECT TO authenticated USING (TRUE);

CREATE POLICY "medicaments_read" ON public.medicaments
  FOR SELECT TO authenticated USING (TRUE);

CREATE POLICY "etablissements_read" ON public.etablissements
  FOR SELECT TO authenticated USING (TRUE);

-- ─── MÉDECINS ────────────────────────────────────────────────────────────────

CREATE POLICY "medecins_select_own" ON public.medecins
  FOR SELECT TO authenticated USING (id = auth.uid());

CREATE POLICY "medecins_update_own" ON public.medecins
  FOR UPDATE TO authenticated USING (id = auth.uid()) WITH CHECK (id = auth.uid());

-- ─── MEDECIN_ETABLISSEMENTS ──────────────────────────────────────────────────

CREATE POLICY "medecin_etab_select_own" ON public.medecin_etablissements
  FOR SELECT TO authenticated USING (medecin_id = auth.uid());

-- ─── PATIENTS — accès si consentement approuvé non expiré ───────────────────

CREATE POLICY "patients_select_with_access" ON public.patients
  FOR SELECT TO authenticated USING (
    EXISTS (
      SELECT 1 FROM public.acces_dossiers a
      WHERE a.patient_id = patients.id
        AND a.medecin_id = auth.uid()
        AND a.statut = 'approuve'
        AND a.date_expiration > NOW()
    )
    OR
    -- Le médecin peut aussi voir les patients de ses propres consultations
    EXISTS (
      SELECT 1 FROM public.consultations c
      WHERE c.patient_id = patients.id
        AND c.medecin_id = auth.uid()
    )
  );

CREATE POLICY "patients_insert" ON public.patients
  FOR INSERT TO authenticated WITH CHECK (TRUE);

-- ─── DOSSIERS MÉDICAUX ────────────────────────────────────────────────────────

CREATE POLICY "dossiers_select_with_access" ON public.dossiers_medicaux
  FOR SELECT TO authenticated USING (
    EXISTS (
      SELECT 1 FROM public.patients p
      WHERE p.id = dossiers_medicaux.patient_id
        AND (
          EXISTS (
            SELECT 1 FROM public.acces_dossiers a
            WHERE a.patient_id = p.id AND a.medecin_id = auth.uid()
              AND a.statut = 'approuve' AND a.date_expiration > NOW()
          )
          OR
          EXISTS (
            SELECT 1 FROM public.consultations c
            WHERE c.patient_id = p.id AND c.medecin_id = auth.uid()
          )
        )
    )
  );

-- ─── CONSULTATIONS ────────────────────────────────────────────────────────────

CREATE POLICY "consultations_select" ON public.consultations
  FOR SELECT TO authenticated USING (medecin_id = auth.uid());

CREATE POLICY "consultations_insert" ON public.consultations
  FOR INSERT TO authenticated WITH CHECK (medecin_id = auth.uid());

CREATE POLICY "consultations_update" ON public.consultations
  FOR UPDATE TO authenticated USING (medecin_id = auth.uid()) WITH CHECK (medecin_id = auth.uid());

-- ─── CONSTANTES VITALES ──────────────────────────────────────────────────────

CREATE POLICY "constantes_select" ON public.constantes_vitales
  FOR SELECT TO authenticated USING (
    EXISTS (SELECT 1 FROM public.consultations c WHERE c.id = constantes_vitales.consultation_id AND c.medecin_id = auth.uid())
  );

CREATE POLICY "constantes_insert" ON public.constantes_vitales
  FOR INSERT TO authenticated WITH CHECK (
    EXISTS (SELECT 1 FROM public.consultations c WHERE c.id = consultation_id AND c.medecin_id = auth.uid())
  );

-- ─── DIAGNOSTICS ─────────────────────────────────────────────────────────────

CREATE POLICY "diagnostics_select" ON public.diagnostics
  FOR SELECT TO authenticated USING (
    EXISTS (SELECT 1 FROM public.consultations c WHERE c.id = diagnostics.consultation_id AND c.medecin_id = auth.uid())
  );

CREATE POLICY "diagnostics_insert" ON public.diagnostics
  FOR INSERT TO authenticated WITH CHECK (
    EXISTS (SELECT 1 FROM public.consultations c WHERE c.id = consultation_id AND c.medecin_id = auth.uid())
  );

CREATE POLICY "diagnostics_update" ON public.diagnostics
  FOR UPDATE TO authenticated USING (
    EXISTS (SELECT 1 FROM public.consultations c WHERE c.id = diagnostics.consultation_id AND c.medecin_id = auth.uid())
  );

-- ─── TRAITEMENTS ─────────────────────────────────────────────────────────────

CREATE POLICY "traitements_select" ON public.traitements
  FOR SELECT TO authenticated USING (medecin_id = auth.uid());

CREATE POLICY "traitements_insert" ON public.traitements
  FOR INSERT TO authenticated WITH CHECK (medecin_id = auth.uid());

CREATE POLICY "traitements_update" ON public.traitements
  FOR UPDATE TO authenticated USING (medecin_id = auth.uid());

-- ─── ORDONNANCES ─────────────────────────────────────────────────────────────

CREATE POLICY "ordonnances_select" ON public.ordonnances
  FOR SELECT TO authenticated USING (medecin_id = auth.uid());

CREATE POLICY "ordonnances_insert" ON public.ordonnances
  FOR INSERT TO authenticated WITH CHECK (medecin_id = auth.uid());

-- ─── DOCUMENTS ───────────────────────────────────────────────────────────────

CREATE POLICY "documents_select" ON public.documents
  FOR SELECT TO authenticated USING (medecin_id = auth.uid());

CREATE POLICY "documents_insert" ON public.documents
  FOR INSERT TO authenticated WITH CHECK (medecin_id = auth.uid());

-- ─── EXAMENS ─────────────────────────────────────────────────────────────────

CREATE POLICY "examens_select" ON public.examens
  FOR SELECT TO authenticated USING (medecin_id = auth.uid());

CREATE POLICY "examens_insert" ON public.examens
  FOR INSERT TO authenticated WITH CHECK (medecin_id = auth.uid());

CREATE POLICY "examens_update" ON public.examens
  FOR UPDATE TO authenticated USING (medecin_id = auth.uid());

-- ─── ACCÈS DOSSIERS ──────────────────────────────────────────────────────────

CREATE POLICY "acces_select" ON public.acces_dossiers
  FOR SELECT TO authenticated USING (medecin_id = auth.uid());

CREATE POLICY "acces_insert" ON public.acces_dossiers
  FOR INSERT TO authenticated WITH CHECK (medecin_id = auth.uid());

CREATE POLICY "acces_update_status" ON public.acces_dossiers
  FOR UPDATE TO authenticated USING (medecin_id = auth.uid());

-- ─── AUDIT LOGS (insert only — pas de modification possible) ─────────────────

CREATE POLICY "audit_select_own" ON public.audit_logs
  FOR SELECT TO authenticated USING (medecin_id = auth.uid());

CREATE POLICY "audit_insert" ON public.audit_logs
  FOR INSERT TO authenticated WITH CHECK (medecin_id = auth.uid());

-- Aucune policy UPDATE/DELETE sur audit_logs → immuable

-- ─── NOTIFICATIONS ───────────────────────────────────────────────────────────

CREATE POLICY "notifications_select" ON public.notifications
  FOR SELECT TO authenticated USING (medecin_id = auth.uid());

CREATE POLICY "notifications_update_lue" ON public.notifications
  FOR UPDATE TO authenticated USING (medecin_id = auth.uid()) WITH CHECK (medecin_id = auth.uid());

-- ─── PARAMÈTRES MÉDECIN ──────────────────────────────────────────────────────

CREATE POLICY "parametres_select" ON public.parametres_medecin
  FOR SELECT TO authenticated USING (medecin_id = auth.uid());

CREATE POLICY "parametres_insert" ON public.parametres_medecin
  FOR INSERT TO authenticated WITH CHECK (medecin_id = auth.uid());

CREATE POLICY "parametres_update" ON public.parametres_medecin
  FOR UPDATE TO authenticated USING (medecin_id = auth.uid()) WITH CHECK (medecin_id = auth.uid());
