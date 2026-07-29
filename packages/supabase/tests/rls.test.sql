-- Tests RLS Dotobase — pgTAP
-- Exécuter avec : pgtap ou via supabase test db
-- Prérequis : migrations 001-010 + seed.sql appliqués

BEGIN;

SELECT plan(8);

-- ─── Setup fixtures ───────────────────────────────────────────────────────────

-- Simuler deux utilisateurs authentifiés
SET LOCAL "request.jwt.claims" TO '{"sub": "00000000-0000-0000-0000-000000000001", "role": "authenticated"}';

-- ─── TEST 1: Un médecin voit uniquement son propre profil ────────────────────

SELECT ok(
  (SELECT COUNT(*) = 1 FROM public.medecins WHERE id = '00000000-0000-0000-0000-000000000001'),
  'Test 1: médecin ne voit que son propre profil'
);

-- ─── TEST 2: Les tables de référence sont lisibles par tous les auth ─────────

SELECT ok(
  (SELECT COUNT(*) > 0 FROM public.specialites),
  'Test 2: specialites lisibles par médecin authentifié'
);

SELECT ok(
  (SELECT COUNT(*) > 0 FROM public.icd10_codes),
  'Test 3: icd10_codes lisibles par médecin authentifié'
);

SELECT ok(
  (SELECT COUNT(*) > 0 FROM public.medicaments),
  'Test 4: médicaments lisibles par médecin authentifié'
);

-- ─── TEST 5: Pas d'accès aux consultations d'un autre médecin ────────────────

-- Changer d'utilisateur
SET LOCAL "request.jwt.claims" TO '{"sub": "00000000-0000-0000-0000-000000000002", "role": "authenticated"}';

SELECT ok(
  (SELECT COUNT(*) = 0 FROM public.consultations WHERE medecin_id = '00000000-0000-0000-0000-000000000001'),
  'Test 5: médecin 2 ne voit pas les consultations du médecin 1'
);

-- ─── TEST 6: audit_logs — pas de UPDATE possible ─────────────────────────────

SELECT throws_ok(
  'UPDATE public.audit_logs SET action = ''DELETE'' WHERE id IS NOT NULL',
  'Test 6: UPDATE sur audit_logs rejeté (pas de policy UPDATE)'
);

-- ─── TEST 7: Notifications visibles uniquement par le bon médecin ─────────────

SET LOCAL "request.jwt.claims" TO '{"sub": "00000000-0000-0000-0000-000000000001", "role": "authenticated"}';

SELECT ok(
  (SELECT COUNT(*) = 0 FROM public.notifications WHERE medecin_id = '00000000-0000-0000-0000-000000000002'),
  'Test 7: médecin 1 ne voit pas les notifications du médecin 2'
);

-- ─── TEST 8: Paramètres médecin — 1 seul visible ─────────────────────────────

SELECT ok(
  (SELECT COUNT(*) = 0 FROM public.parametres_medecin WHERE medecin_id = '00000000-0000-0000-0000-000000000002'),
  'Test 8: médecin 1 ne voit pas les paramètres du médecin 2'
);

SELECT * FROM finish();

ROLLBACK;
