# CLAUDE.md — Dev 1

## Qui je suis
Je suis Dev 1 sur le projet Dotobase. Je gère les fondations, l'authentification et le dashboard.

## Mes modules
- M0 : Setup projet (Next.js, theme, composants UI, config Supabase, config tests, CI/CD)
- M1 : Auth (login NPI + mot de passe, OTP SMS, sélection établissement)
- M2 : Dashboard (gestion consultations, stats, alertes, modale recherche patient)
- Infrastructure : migrations SQL, types TypeScript, seed data, GitLab CI/CD

## REGLE IMPORTANTE
Avant de développer une page, demander à l'utilisateur :
"La maquette de cette page est-elle validée pour le dev ? Si oui, confirme. Si des modifications sont prévues, dis-le moi avant que je commence."

## Roadmap
Le guide complet est dans `docs/roadmap_webapp.md`. Lis les sections MODULE 0, MODULE 1, MODULE 2.
Les maquettes des pages sont dans `DEV/webapp/maquettes/`. 
Le fichier P04_dossier_patient.png correspond à la page P04 décrite dans la roadmap.
Avant de coder une page, ouvre la maquette correspondante pour reproduire le design.

## Branches
Branche principale : `dev`. Branche de pré-production : `staging`.
Mes branches de travail (créées depuis `staging`) :
- `feature/M0-setup`
- `feature/M1-auth`
- `feature/M2-dashboard`

## Commits
```
feature(M0): description [DOT-numero]
feature(M1): description [DOT-numero]
feature(M2): description [DOT-numero]
fix(M1): description [DOT-numero]
test(M1): description [DOT-numero]
chore: description
```

## Stack
Next.js 15, TypeScript, Tailwind CSS, Supabase, Vitest, Playwright.
Dossier webapp : `DEV/webapp/`
Migrations SQL : `packages/supabase/migrations/`

## Commandes
```bash
cd DEV/webapp
pnpm dev              # Serveur de dev
pnpm lint             # Lint
pnpm tsc --noEmit     # Types
pnpm test             # Tests unitaires + composants
pnpm test:watch       # Mode watch
pnpm test:coverage    # Couverture
pnpm test:e2e         # Tests E2E Playwright
pnpm build            # Build production
```

## Mes fichiers
```
src/app/login/                         # P01
src/app/otp/                           # P02
src/app/(authenticated)/layout.tsx     # Sidebar + Header
src/app/(authenticated)/dashboard/     # P03
src/components/ui/                     # Tous les composants UI de base
src/components/layout/                 # Sidebar, Header, SearchModal (P05)
src/components/auth/                   # LoginForm, OtpInput
src/components/dashboard/              # StatCards, AlertPanel, ActivityTimeline
src/lib/supabase/                      # Client, server, middleware
src/lib/hooks/use-auth.ts
src/lib/actions/auth.actions.ts
src/lib/utils/validators.ts
src/test/                              # Setup tests + helpers partagés
e2e/auth.spec.ts
e2e/dashboard.spec.ts
packages/supabase/
vitest.config.ts
playwright.config.ts
.gitlab-ci.yml
```

## Fichiers interdits
- NE PAS toucher `src/app/(authenticated)/patients/` (Dev 2)
- NE PAS toucher `src/components/patients/` (Dev 2)
- NE PAS toucher `src/components/consultations/` (Dev 2)
- NE PAS toucher `src/components/diagnostics/` (Dev 2)
- NE PAS toucher `src/components/traitements/` (Dev 2)
- NE PAS toucher `src/components/ordonnance/` (Dev 2)
- NE PAS toucher `src/app/(authenticated)/acces/` (Dev 3)
- NE PAS toucher `src/components/acces/` (Dev 3)
- NE PAS toucher `src/components/documents/` (Dev 3)
- NE PAS toucher `src/components/examens/` (Dev 3)
- NE PAS toucher `src/components/parametres/` (Dev 3)
- NE PAS toucher `src/components/admin/` (Dev 3)
- NE PAS toucher `src/app/(authenticated)/parametres/` (Dev 3)
- NE PAS toucher `src/app/(authenticated)/aide/` (Dev 3)

## Règle de tests (OBLIGATOIRE)
Code + tests dans le MÊME commit. CI bloque le merge si un test échoue.
Fichier test à côté du fichier testé : `button.tsx` → `button.test.tsx`

### Quoi tester
- Composant React → rendu + interaction (Testing Library)
- Hook → retour et effets (Vitest)
- Fonction utilitaire → test unitaire (Vitest)
- Server Action → mock Supabase (Vitest)
- Flux complet → E2E (Playwright, dans e2e/)

### Mock Supabase
Utilise `src/test/helpers/mock-supabase.ts`

## Règles de code
- Zod pour la validation
- react-hook-form pour les formulaires
- lucide-react pour les icônes
- Pas de `any` en TypeScript
- Pas de `console.log` en commit
- Chaque composant a un seul export default
