# Bugs & Problèmes rencontrés — Webapp Dotobase

Historique des problèmes rencontrés pendant le développement et leurs solutions.

---

## B001 — `pnpm` non trouvé au premier lancement
**Module :** M0.1
**Symptôme :** `pnpm : Le terme «pnpm» n'est pas reconnu`
**Cause :** pnpm non installé globalement sur la machine
**Solution :**
```bash
npm install -g pnpm
```

---

## B002 — `git add` échoue : "Filename too long"
**Module :** M0.1
**Symptôme :** `error: open(...): Filename too long / fatal: adding files failed`
**Cause :** Windows limite les chemins à 260 caractères par défaut. Les chemins dans `node_modules` dépassent cette limite.
**Solution :**
```bash
git config core.longpaths true
```
Et ne jamais commiter `node_modules` — s'assurer que `.gitignore` contient :
```
node_modules/
**/node_modules/
```

---

## B003 — `.git/config` corrompu (`core.longpaths = --show-origin`)
**Module :** M0.1
**Symptôme :** git config retourne une valeur invalide pour `core.longpaths`
**Cause :** Commande git enchaînée incorrectement qui a écrit `--show-origin` comme valeur
**Solution :** Éditer directement `.git/config` et corriger la ligne :
```
[core]
    longpaths = true
```

---

## B004 — TypeScript : `leftIcon && 'pl-10'` invalide dans `cn()`
**Module :** M0.5 — `input.tsx`
**Symptôme :** `error TS2345: Argument of type 'false | "" | 0 | 0n | "pl-10" | null | undefined' is not assignable`
**Cause :** `leftIcon` est de type `React.ReactNode` qui inclut `0` (number). `0 && 'pl-10'` retourne `0`, incompatible avec le type attendu par `cn()`.
**Solution :** Forcer en booléen :
```tsx
// Avant
leftIcon && 'pl-10'
// Après
!!leftIcon && 'pl-10'
```

---

## B005 — `middleware.ts` déprécié dans Next.js 16
**Module :** M0.7
**Symptôme :** `⚠ The "middleware" file convention is deprecated. Please use "proxy" instead.`
**Cause :** Next.js 16 a renommé la convention `middleware` → `proxy`. Le fichier doit s'appeler `src/proxy.ts` et exporter une fonction nommée `proxy`.
**Solution :**
1. Renommer `src/middleware.ts` → `src/proxy.ts`
2. Renommer l'export : `export async function middleware(...)` → `export async function proxy(...)`
3. Supprimer `.next/` et redémarrer : `pnpm dev`

---

## B006 — `.env.local` requis avant `pnpm dev`
**Module :** M0.6
**Symptôme :** Le serveur démarre mais le middleware crashe sans variables Supabase
**Cause :** `NEXT_PUBLIC_SUPABASE_URL` et `NEXT_PUBLIC_SUPABASE_ANON_KEY` sont vides
**Solution :**
1. Créer un projet sur [supabase.com](https://supabase.com) (gratuit)
2. Copier l'URL + anon key depuis Settings → API
3. Créer `.env.local` à partir de `.env.example` et renseigner les valeurs

> **.env.local ne doit jamais être commité** (il est dans `.gitignore`)

---

## B007 — DOT-3 : écarts entre roadmap et implémentation réelle
**Module :** M0.6–M0.7
**Contexte :** La roadmap décrit `middleware.ts` et `.env.local.example` mais Next.js 16 et les conventions ont forcé des ajustements.

| Roadmap (DOT-3) | Implémenté | Raison |
|----------------|-----------|--------|
| `src/lib/supabase/middleware.ts` | `src/proxy.ts` | Next.js 16 déprécie `middleware.ts` → renommé `proxy.ts` avec export `proxy` |
| `.env.local.example` | `.env.example` | Convention Next.js standard ; même usage |

Ces écarts sont intentionnels et documentés. La fonctionnalité est identique.

---

## B008 — DOT-4 : Sidebar — items absents des maquettes ajoutés par erreur
**Module :** M0.8
**Symptôme :** Examens et Traitements ajoutés dans la sidebar alors qu'ils sont absents de toutes les maquettes
**Cause :** Codage basé sur le DOT écrit sans analyser TOUTES les maquettes disponibles.
**Solution :** Examens et Traitements retirés après relecture de toutes les maquettes. Les maquettes priment toujours sur le DOT écrit.

**Règle établie :** Toujours lire TOUTES les maquettes avant de coder un composant de navigation.

---

## B009 — DOT-5 : `render-with-providers.tsx` manquant
**Module :** M0.4
**Symptôme :** Helper absent de `src/test/helpers/`
**Cause :** Omis lors du setup initial des helpers de test
**Solution :** Créé lors de la vérification DOT :
```tsx
// src/test/helpers/render-with-providers.tsx
// Wrapper autour de render() pour ajouter les providers globaux
```

---

## B010 — PowerShell interprète les parenthèses dans les chemins `git add`
**Module :** M0.8
**Symptôme :** `authenticated : Le terme «authenticated» n'est pas reconnu`
**Cause :** PowerShell parse `(authenticated)` comme un sous-groupe de commande
**Solution :** Toujours quoter les chemins contenant des parenthèses :
```powershell
git add "src/app/(authenticated)/layout.tsx"
```

---

## B011 — Pages `page.tsx` vides cassent `next build`
**Module :** M0 — CI/CD
**Symptôme :** `next build` échoue — pages sans `export default`
**Cause :** Les fichiers `page.tsx` créés comme placeholders étaient vides. Next.js exige un export default dans chaque page.
**Solution :** Ajouter un export default minimal dans toutes les pages placeholder :
```tsx
export default function Page() {
  return null;
}
```
Et créer `src/app/page.tsx` à la racine qui redirige vers `/login` :
```tsx
import { redirect } from 'next/navigation';
export default function RootPage() {
  redirect('/login');
}
```

---

## B012 — `middleware.ts` vide à la racine bloque le build
**Module :** M0 — CI/CD
**Symptôme :** `Error: Turbopack build failed: ./middleware.ts — Middleware is missing expected function export name`
**Cause :** Un fichier `middleware.ts` vide existait à la racine du projet. Next.js le trouvait en priorité sur `src/proxy.ts`.
**Solution :** Supprimer le fichier vide `middleware.ts` à la racine. Next.js utilise alors `src/proxy.ts` correctement.

---

## B013 — CI : `node:20` incompatible avec pnpm 11
**Module :** M0 — CI/CD
**Symptôme :** `Error [ERR_UNKNOWN_BUILTIN_MODULE]: No such built-in module: node:sqlite`
**Cause :** pnpm 11 requiert Node.js >= 22.13. L'image CI `node:20` est trop ancienne.
**Solution :** Changer l'image CI dans `.gitlab-ci.yml` :
```yaml
# Avant
image: node:20
# Après
image: node:22
```

---

## B014 — CI : pipeline ne se déclenche pas sur commit `.gitlab-ci.yml` seul
**Module :** M0 — CI/CD
**Symptôme :** Push du commit CI → aucun pipeline lancé
**Cause :** Les jobs utilisaient `only: changes: - DOTOBASE/DEV/webapp/**/*`. Un commit qui ne touche que `.gitlab-ci.yml` (à la racine du repo) ne matche pas ce filtre.
**Solution :** Ajouter `.gitlab-ci.yml` aux déclencheurs de chaque job :
```yaml
only:
  changes:
    - DOTOBASE/DEV/webapp/**/*
    - .gitlab-ci.yml
```

---

## B015 — CI : `ERR_PNPM_IGNORED_BUILDS` — pnpm 11 bloque les build scripts
**Module :** M0 — CI/CD
**Symptôme :** `[ERR_PNPM_IGNORED_BUILDS] Ignored build scripts: esbuild@0.27.7, sharp@0.34.5, unrs-resolver@1.12.2`
**Cause :** pnpm 11 bloque par défaut tous les `postinstall` scripts (sécurité supply-chain).

Les approches suivantes ont échoué avant de trouver la bonne :
- `pnpm.onlyBuiltDependencies` dans `package.json` → **supprimé** en pnpm 11 (ignoré silencieusement)
- `onlyBuiltDependencies[]` dans `.npmrc` → non reconnu
- `onlyBuiltDependencies` dans `pnpm-workspace.yaml` → **renommé** en pnpm 11

**Solution :** Utiliser `allowBuilds` dans `pnpm-workspace.yaml` (nouveau nom depuis pnpm 11) :
```yaml
# pnpm-workspace.yaml
allowBuilds:
  esbuild: true
  sharp: true
  unrs-resolver: true
```
`esbuild`, `sharp` et `unrs-resolver` sont des dépendances natives légitimes de Next.js.

**Référence :** [pnpm 11 Settings](https://pnpm.io/settings)
