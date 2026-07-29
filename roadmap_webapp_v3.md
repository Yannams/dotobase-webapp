# DOTOBASE — Roadmap Webapp v3

> Guide principal pour le développement de la webapp Dotobase (côté clinique/médecin).
> Conçu pour Claude Code et les 3 développeurs.
> Chaque tâche inclut ses tests. "Done" = code + tests + CI passe.
> REGLE CLAUDE CODE : avant de développer une page, demander à l'utilisateur :
> "La maquette de cette page est-elle validée pour le dev ? Si oui, confirme. Si des modifications sont prévues, dis-le moi avant que je commence."

---

## 1. CONTEXTE

Application nationale de gestion des dossiers médicaux au Bénin.
- App mobile (Flutter) : patient. En cours dans `DEV/mobile/dotobase/`.
- Webapp (Next.js) : médecin/infirmier/admin. A développer dans `DEV/webapp/`.
- Backend : Supabase (PostgreSQL + Auth + Storage + Realtime). Partagé mobile + web.
- Branche principale : `dev`
- Branche de pré-production : `staging`
- Branche de production : `main` (future)

### Principes
- Dossier médical UNIQUE par patient (identité sanitaire).
- Accès par consentement patient (OTP SMS/email ou validation NPI).
- Tri par pertinence selon la spécialité du médecin connecté.
- Transfert de dossier entre hôpitaux (3 niveaux d'urgence U1/U2/U3).
- Empreinte digitale (lecteur USB) pour la recherche patient (phase 2).

---

## 2. INVENTAIRE DES PAGES (depuis maquettes)

20 pages/écrans identifiés, regroupés en 9 modules fonctionnels.

### Module Auth (2 pages)
| # | Page | Fichier maquette | Statut |
|---|------|-----------------|--------|
| P01 | Connexion médecin (NPI + mot de passe) | `Page de connexion Medecin.png` | A confirmer |
| P02 | Vérification OTP SMS | `Verification SMS NPI du medecin.png` | A confirmer |

### Module Dashboard (1 page)
| # | Page | Fichier maquette | Statut |
|---|------|-----------------|--------|
| P03 | Gestion des consultations (stats, alertes, activité, actions rapides) | `Gestion des consultations.png` | A confirmer |

### Module Patients / Dossier (2 pages)
| # | Page | Fichier maquette | Statut |
|---|------|-----------------|--------|
| P04 | Dossier patient (vue principale, onglets Consultations/Diagnostics/Traitements/Documents) | `Dossier d'un patients vue par le medecin.png` | A confirmer |
| P05 | Modale recherche patient (par NPI ou empreinte digitale) | `Frame.png` | A confirmer |

### Module Consultations (2 pages)
| # | Page | Fichier maquette | Statut |
|---|------|-----------------|--------|
| P06 | Historique consultations d'un patient (tableau, filtres, audit log) | `Dossier consultation d'un patients vue par le medecin.png` | A confirmer |
| P07 | Ajouter consultation (formulaire complet : type, symptômes, constantes, diagnostic CIM-10, traitement, documents) | `Ajouter consultation d'un patients vue par le medecin.png` | A confirmer |

### Module Diagnostics (2 pages)
| # | Page | Fichier maquette | Statut |
|---|------|-----------------|--------|
| P08 | Dossier diagnostics d'un patient (recherche CIM-10, évaluation clinique, plan diagnostic) | `dossier Diagnostic d'un patient vue par le medecin.png` | A confirmer |
| P09 | Ajouter diagnostic (recherche CIM-10, sévérité, risque, plan médical) | `Ajout diagnostic d'un patient vue par le medecin.png` | A confirmer |

### Module Traitements (2 pages)
| # | Page | Fichier maquette | Statut |
|---|------|-----------------|--------|
| P10 | Dossier traitements d'un patient (prescriptions actives, observance, historique, suivi) | `Dossier traitements d'un patients vue par le medecin.png` | A confirmer |
| P11 | Ajouter traitement (médicament, posologie, durée, contrôles sécurité, lien consultation/diagnostic) | `Ajouter traitements d'un patients vue par le medecin.png` | A confirmer |

### Module Documents / Examens (4 pages)
| # | Page | Fichier maquette | Statut |
|---|------|-----------------|--------|
| P12 | Documents d'un patient (grille documents importants, liste paginée, upload) | `Document d'un patient vue par medecin.png` | A confirmer |
| P13 | Ajouter document (drag-and-drop, métadonnées, lien médical, priorité) | `Ajout d'un document d'un patient vue par medecin.png` | A confirmer |
| P14 | Examens médicaux (alertes, tableau, journal d'audit, prochain examen) | `Voir les examens.png` | A confirmer |
| P15 | Créer examen (type, priorité, contexte clinique, instructions, acheminement) | `Examen creation.png` | A confirmer |

### Module Accès / Consentement (2 pages)
| # | Page | Fichier maquette | Statut |
|---|------|-----------------|--------|
| P16 | Demande d'accès dossier (NPI patient, motif, durée, méthode auth : NPI/OTP/empreinte) | `Demande d'acces aun dossier de patients.png` | A confirmer |
| P17 | Accès validé (confirmation, résumé, boutons ouvrir dossier / retour) | `Acces valider par le patient au medecin.png` | A confirmer |

### Module Ordonnance (1 page)
| # | Page | Fichier maquette | Statut |
|---|------|-----------------|--------|
| P18 | Ordonnance (vue PDF : en-tête clinique, patient, médecin, prescription, consignes, signature, QR) | `Ordonance d'un patients vue par le medecin.png` | A confirmer |

### Module Paramètres / Aide (2 pages)
| # | Page | Fichier maquette | Statut |
|---|------|-----------------|--------|
| P19 | Paramètres (profil, sécurité, signature/sceau, confidentialité, notifications, réglages avancés) | `Parametre.png` | A confirmer |
| P20 | Aide (rubriques, FAQ, support technique, actions d'assistance) | `Aide page.png` | A confirmer |

### Sidebar unifiée (navigation)
Basé sur l'analyse de toutes les maquettes, la sidebar finale doit contenir :
- Dashboard
- Patients
- Examens
- Consultations
- Traitements
- Dossiers (alias pour Documents/Medical Records)
- (séparateur)
- Paramètre
- Aide
- Déconnexion
- Bouton flottant : "+ New Consultation"

---

## 3. STRUCTURE DU DEPOT

```
DOTOBASE/
├── DEV/
│   ├── mobile/
│   │   ├── dotobase/
│   │   └── stitch_design_system_implementation/
│   └── webapp/
│       ├── package.json
│       ├── next.config.ts
│       ├── tailwind.config.ts
│       ├── tsconfig.json
│       ├── vitest.config.ts
│       ├── playwright.config.ts
│       ├── .env.local.example
│       ├── maquettes/
│       │   ├── P01_login.png
│       │   ├── P02_otp.png
│       │   ├── P03_dashboard.png
│       │   ├── P04_dossier_patient.png
│       │   ├── P05_recherche_patient.png
│       │   ├── P06_historique_consultations.png
│       │   ├── P07_ajouter_consultation.png
│       │   ├── P08_dossier_diagnostics.png
│       │   ├── P09_ajouter_diagnostic.png
│       │   ├── P10_dossier_traitements.png
│       │   ├── P11_ajouter_traitement.png
│       │   ├── P12_documents.png
│       │   ├── P13_ajouter_document.png
│       │   ├── P14_examens.png
│       │   ├── P15_creer_examen.png
│       │   ├── P16_demande_acces.png
│       │   ├── P17_acces_valide.png
│       │   ├── P18_ordonnance.png
│       │   ├── P19_parametres.png
│       │   └── P20_aide.png
│       ├── src/
│       │   ├── app/
│       │   │   ├── layout.tsx
│       │   │   ├── page.tsx
│       │   │   ├── login/
│       │   │   │   └── page.tsx                           # P01
│       │   │   ├── otp/
│       │   │   │   └── page.tsx                           # P02
│       │   │   └── (authenticated)/
│       │   │       ├── layout.tsx                         # Sidebar + Header
│       │   │       ├── dashboard/
│       │   │       │   └── page.tsx                       # P03
│       │   │       ├── patients/
│       │   │       │   ├── page.tsx                       # Liste patients
│       │   │       │   └── [npi]/
│       │   │       │       ├── page.tsx                   # P04 Dossier patient
│       │   │       │       ├── consultations/
│       │   │       │       │   ├── page.tsx               # P06 Historique
│       │   │       │       │   └── new/
│       │   │       │       │       └── page.tsx           # P07 Ajouter
│       │   │       │       ├── diagnostics/
│       │   │       │       │   ├── page.tsx               # P08 Dossier diag
│       │   │       │       │   └── new/
│       │   │       │       │       └── page.tsx           # P09 Ajouter
│       │   │       │       ├── traitements/
│       │   │       │       │   ├── page.tsx               # P10 Dossier trait
│       │   │       │       │   └── new/
│       │   │       │       │       └── page.tsx           # P11 Ajouter
│       │   │       │       ├── documents/
│       │   │       │       │   ├── page.tsx               # P12 Documents
│       │   │       │       │   └── new/
│       │   │       │       │       └── page.tsx           # P13 Ajouter
│       │   │       │       ├── examens/
│       │   │       │       │   ├── page.tsx               # P14 Examens
│       │   │       │       │   └── new/
│       │   │       │       │       └── page.tsx           # P15 Créer
│       │   │       │       └── ordonnance/
│       │   │       │           └── [ordoId]/
│       │   │       │               └── page.tsx           # P18 Vue ordonnance
│       │   │       ├── acces/
│       │   │       │   ├── page.tsx                       # P16 Demande accès
│       │   │       │   └── valide/
│       │   │       │       └── page.tsx                   # P17 Accès validé
│       │   │       ├── parametres/
│       │   │       │   └── page.tsx                       # P19
│       │   │       └── aide/
│       │   │           └── page.tsx                       # P20
│       │   ├── components/
│       │   │   ├── ui/                                    # Composants génériques
│       │   │   ├── layout/                                # Sidebar, Header, SearchModal (P05)
│       │   │   ├── auth/                                  # LoginForm, OtpInput
│       │   │   ├── dashboard/                             # StatCards, AlertPanel, ActivityLog
│       │   │   ├── patients/                              # PatientHeader, AlertesMedicales, AccesRecent
│       │   │   ├── consultations/                         # ConsultationForm, ConsultationTable
│       │   │   ├── diagnostics/                           # DiagnosticForm, CIM10Search, RiskPanel
│       │   │   ├── traitements/                           # TraitementForm, PrescriptionTable, SecurityChecks
│       │   │   ├── documents/                             # DocumentGrid, UploadZone, DocumentTable
│       │   │   ├── examens/                               # ExamenForm, ExamenTable, AuditLog
│       │   │   ├── acces/                                 # AccesRequestForm, AccesConfirmation
│       │   │   ├── ordonnance/                            # OrdonnanceView, SignatureBlock
│       │   │   └── parametres/                            # ProfileForm, SecurityPanel, SignatureUpload, NotifMatrix
│       │   ├── lib/
│       │   │   ├── supabase/
│       │   │   │   ├── client.ts
│       │   │   │   ├── server.ts
│       │   │   │   └── middleware.ts
│       │   │   ├── types/
│       │   │   │   └── database.types.ts
│       │   │   ├── hooks/
│       │   │   ├── utils/
│       │   │   └── actions/
│       │   ├── styles/
│       │   │   └── globals.css
│       │   └── test/
│       │       └── helpers/
│       ├── e2e/
│       └── public/
├── packages/
│   └── supabase/
│       ├── migrations/
│       ├── tests/
│       └── seed.sql
├── docs/
├── .gitignore
├── .gitlab-ci.yml
└── README.md
```

---

## 4. BRANCHES

```
dev                              # Branche principale de développement
├── staging                      # Pré-production, tests d'intégration
│   ├── feature/M0-setup            # Dev 1
│   ├── feature/M1-auth             # Dev 1
│   ├── feature/M2-dashboard        # Dev 1
│   ├── feature/M3-dossier          # Dev 2
│   ├── feature/M4-consultation     # Dev 2
│   ├── feature/M5-diagnostic       # Dev 2
│   ├── feature/M6-traitement       # Dev 2
│   ├── feature/M7-document         # Dev 3
│   ├── feature/M8-examen           # Dev 3
│   ├── feature/M9-acces            # Dev 3
│   ├── feature/M10-ordonnance      # Dev 2
│   ├── feature/M11-parametres      # Dev 3
│   └── feature/M12-aide            # Dev 3
```

Workflow : chaque dev crée sa branche depuis `staging`. MR vers `staging`. Quand `staging` est stable, merge vers `dev`.

Commits : `feature(M4): formulaire consultation [DOT-XX]`

---

## 5. STRATEGIE DE TESTS

Règle : code + tests dans le MÊME commit. CI bloque le merge si un test échoue.

Fichier de test à côté du fichier testé : `button.tsx` → `button.test.tsx`
Tests E2E dans `e2e/`. Tests RLS dans `packages/supabase/tests/`.

Commandes : `pnpm test`, `pnpm test:watch`, `pnpm test:coverage`, `pnpm test:e2e`

---

## 6. MODULES

---

### MODULE 0 : Setup (Dev 1) — 2 jours
**Branche** : `feature/M0-setup`

**REGLE** : ce module ne nécessite pas de validation de maquette, c'est du setup technique.

#### Tâches
- M0.1 — Initialiser Next.js (`pnpm create next-app@latest . --typescript --tailwind --eslint --app --src-dir`)
- M0.2 — Installer dépendances (supabase, lucide-react, zod, react-hook-form, date-fns, sonner, vitest, playwright, testing-library)
- M0.3 — Theme Dotobase (couleurs : primary #0053CD, primaryContainer #146BFB, background #FAFCFF, surface #FFFFFF, textMain #0E1B2A, textMuted #6E7C91, border #E3EDF7, success #22A06B, error #D14343, accent teal #2B8A9E. Police Manrope)
- M0.4 — Config Vitest + Playwright + helpers de test (mock-supabase, mock-auth, render-with-providers)
- M0.5 — Composants UI de base avec tests : button, input, card, badge, modal, table, spinner, select, textarea, tabs, dropdown, pagination, toast
- M0.6 — Config Supabase (client.ts, server.ts, .env.local.example)
- M0.7 — Middleware auth (redirect /login si pas de session)
- M0.8 — Layout authentifié : Sidebar + Header
  - Sidebar : Dashboard, Patients, Examens, Consultations, Traitements, Dossiers, (séparateur), Paramètre, Aide, Déconnexion, bouton "+ New Consultation"
  - Header : logo "Dotobase", barre recherche rapide, icône notifications, icône paramètres, icône aide, avatar + nom médecin
  - Tests sidebar : liens présents, lien actif surligné
  - Tests header : nom affiché, recherche cliquable
- M0.9 — GitLab CI/CD (.gitlab-ci.yml)
- M0.10 — Migrations SQL 19 tables MVP dans packages/supabase/migrations/
- M0.11 — Seed data (spécialités, médicaments essentiels Bénin, codes CIM-10)

---

### MODULE 1 : Auth (Dev 1) — 3 jours
**Branche** : `feature/M1-auth`
**Pages** : P01, P02

#### REGLE CLAUDE CODE
Avant de coder, demander : "La maquette P01 (Connexion médecin) et P02 (OTP) sont-elles validées pour le dev ?"

#### Tâches
- M1.1 — Page login P01 + tests : NPI 10 chiffres + mot de passe + bouton "Se connecter" + badge AES-256 + lien "Besoin d'aide?" + footer. Tests : validation NPI, champ mot de passe masqué, submit.
- M1.2 — Page OTP P02 + tests : 6 cases, timer 02:00, bouton "VALIDER", lien "Renvoyer le code", badge chiffrement. Header avec "Dotobase", "Support", "Emergency Access". Tests : saisie OTP, timer, renvoi code.
- M1.3 — Sélection d'établissement (si multi-établissement) + tests
- M1.4 — Hook use-auth + tests (user, session, etablissement, role, specialite, signOut)
- M1.5 — Server actions auth + tests
- M1.E2E — e2e/auth.spec.ts : login complet, OTP, redirect dashboard, logout

---

### MODULE 2 : Dashboard (Dev 1) — 3 jours
**Branche** : `feature/M2-dashboard`
**Pages** : P03, P05

#### REGLE CLAUDE CODE
Demander : "La maquette P03 (Gestion des consultations / Dashboard) est-elle validée pour le dev ?"

#### Tâches
- M2.1 — Page dashboard P03 + tests : en-tête clinique (nom + date + lieu), 5 cartes stats (Total, Aujourd'hui, En cours, Terminées, Urgences, Annulées), filtres (Statut, Type d'acte, Spécialité), tableau consultations récentes (patient, médecin, type), section Priorités et Alertes (alertes urgence, suivi critique), section Dernière Activité (timeline), section Actions Rapides (Nouvelle consultation, Voir détails, Générer rapport mensuel, Demander accès dossier, Transférer cas). Tests : cartes stats affichent les valeurs, filtres filtrent le tableau, alertes visibles.
- M2.2 — Modale recherche patient P05 + tests : 2 modes "Par NPI" (champ NPI) et "Par empreinte digitale" (affichage lecteur USB, statut connexion). Le mode empreinte est UI only pour le MVP (pas de driver). Tests : switch entre modes, validation NPI.
- M2.3 — Composants dashboard : StatCard, AlertPanel, ActivityTimeline, QuickActions. Chacun avec tests.
- M2.E2E — e2e/dashboard.spec.ts : page charge avec stats, recherche patient par NPI fonctionne

---

### MODULE 3 : Dossier patient (Dev 2) — 4 jours
**Branche** : `feature/M3-dossier`
**Pages** : P04

#### REGLE CLAUDE CODE
Demander : "La maquette P04 (Dossier patient vue médecin) est-elle validée pour le dev ?"

#### Tâches
- M3.1 — Page dossier patient P04 + tests : en-tête patient (photo, nom, NPI, âge, date naissance, sexe, adresse), bouton "+ Nouvelle consultation", onglets (Consultations, Diagnostics, Traitements, Documents), bannière alertes médicales (tags colorés avec codes CIM-10), section historique accès récent (badge "Accès Autorisé", date expiration), section Diagnostics (codes CIM-10 + type principal/secondaire), section Traitements Actuels (médicament, posologie, badge Actif, observance %), section Dernières Consultations (timeline), sidebar droite : Résumé Médical (compteurs consult/urgence/hospit), Médecin Référent, Actions Rapides (ajouter diagnostic, ajouter traitement, ajouter document, transférer dossier), Documents Récents.
- M3.2 — Composants dossier + tests : PatientHeader, AlertesMedicales, AccesRecentBanner, DiagnosticsPanel, TraitementsPanel, ConsultationsTimeline, ResumeMedical, ActionRapides, DocumentsRecents. Chacun avec tests.
- M3.3 — Hook use-patient + tests (données patient, dossier, tri par pertinence)
- M3.4 — Tri par pertinence : consultations de la spécialité du médecin en premier. Tests avec mock 10 consultations 3 spécialités.
- M3.E2E — e2e/dossier.spec.ts : ouvrir patient, alertes visibles, onglets fonctionnent, tri pertinence

---

### MODULE 4 : Consultations (Dev 2) — 5 jours
**Branche** : `feature/M4-consultation`
**Pages** : P06, P07

#### REGLE CLAUDE CODE
Demander : "Les maquettes P06 (Historique consultations) et P07 (Ajouter consultation) sont-elles validées pour le dev ?"

#### Tâches
- M4.1 — Page historique consultations P06 + tests : en-tête patient (photo, NPI, âge, sexe, groupe sanguin, dernière visite), bannière alertes, bannière statut dossier, compteurs (total, terminées, en cours, urgences), dernière consultation (carte sombre avec médecin + traitement), filtres (dates, types, spécialité), tableau consultations (praticien, type/motif, diagnostic, statut + pagination), section Audit Log (timeline), section Résumé de Suivi.
- M4.2 — Page ajouter consultation P07 + tests : breadcrumb, en-tête patient (nom, NPI, âge, sexe, groupe), badge médecin connecté + date/heure, section Informations Générales (type : RDV/Urgence/Walk-in, service, salle, motif principal), section Symptômes et Signes Fonctionnels (checkboxes + durée + niveau douleur 1-3 + description), section Examen Clinique et Constantes (tableau : tension, température, fréquence cardiaque, SpO2, poids avec valeur/unité/statut coloré + examen général + observations cliniques), section Diagnostic CIM-10 (recherche + ajout), sidebar droite : Hypothèse Clinique (texte libre + sévérité estimée), Traitement (formulaire rapide médicament + dosage + durée + posologie + suivi requis), Documents et Examens (upload + checkboxes ordonnance/ECG/analyse), badge Accès Autorisé. Boutons footer : Annuler, Sauvegarder brouillon, Ajouter consultation, Terminer consultation.
- M4.3 — Composants consultation + tests : ConsultationForm, SymptomesSection, ConstantesTable, CIM10Search, HypothesePanel, TraitementRapide, DocumentsExamens.
- M4.E2E — e2e/consultation.spec.ts : créer consultation complète bout en bout

---

### MODULE 5 : Diagnostics (Dev 2) — 3 jours
**Branche** : `feature/M5-diagnostic`
**Pages** : P08, P09

#### REGLE CLAUDE CODE
Demander : "Les maquettes P08 et P09 (Diagnostics) sont-elles validées pour le dev ?"

#### Tâches
- M5.1 — Page dossier diagnostics P08 + tests : en-tête patient (avec constantes vitales + statut), bannière pathologie détectée, recherche CIM-10 (tableau résultats : code, description, action "Ajouter"), diagnostic actuel (principal + secondaires avec chips supprimables + différentiel), sidebar : Évaluation Clinique (gravité légère/modérée/sévère, risque cardiovasculaire), Observations (checkboxes + analyse clinique texte), Plan Diagnostic (examens demandés + objectif thérapeutique).
- M5.2 — Page ajouter diagnostic P09 + tests : recherche CIM-10, toggles principal/secondaire, commentaire médical, facteurs de risque, diagnostic différentiel, sidebar : alertes automatiques, sévérité et risque, plan médical (examens + objectif). Boutons : Annuler, Générer rapport, Enregistrer diagnostic.
- M5.3 — Composants diagnostics + tests : CIM10SearchTable, DiagnosticPrincipal, DiagnosticsSecondaires, DiagnosticDifferentiel, EvaluationClinique, PlanDiagnostic.
- M5.E2E — e2e/diagnostic.spec.ts

---

### MODULE 6 : Traitements (Dev 2) — 4 jours
**Branche** : `feature/M6-traitement`
**Pages** : P10, P11

#### REGLE CLAUDE CODE
Demander : "Les maquettes P10 et P11 (Traitements) sont-elles validées pour le dev ?"

#### Tâches
- M6.1 — Page dossier traitements P10 + tests : en-tête patient (NPI, âge, groupe), compteurs (actifs, terminés, observance), carte objectif thérapeutique (ex: "Tension < 140/90", prochaine évaluation), alertes de risques + absence allergies, tableau prescriptions actives (médicament, dosage, fréquence, statut, actions éditer/supprimer), formulaire "Ajouter un Nouveau Traitement" intégré (médicament dropdown, dosage, voie orale/injectable/topique, fréquence, moments de prise checkboxes, durée, posologie, précautions/notes), sidebar : Suivi Quotidien (indicateurs surveillés), Historique des Traitements (timeline).
- M6.2 — Page ajouter traitement P11 + tests : breadcrumb, en-tête patient + diagnostic principal + consultation liée, sélection médicament (recherche + tableau résultats avec classe, dosages, statut), posologie (dosage dropdown, voie, fréquence, moments matin/avec nourriture), durée (30j/60j/90j + dates début/fin), instructions et précautions (texte + checkboxes : ne pas dépasser dose, éviter alcool, surveiller tension, signaler effets), sidebar : Contrôles de Sécurité (interactions OK, allergies, risque patient), Suivi Médical (fréquence contrôle, suivi par médecin/infirmier, indicateurs clés), Lier le traitement (consultation + diagnostic checkboxes), Aperçu Ordonnance. Boutons : Annuler, Ajouter autre médicament, Générer ordonnance, Enregistrer traitement.
- M6.3 — Composants traitements + tests : PrescriptionTable, TraitementForm, MedicamentSearch, PosologieForm, SecurityChecks, SuiviMedical, TraitementHistorique.
- M6.E2E — e2e/traitement.spec.ts

---

### MODULE 7 : Documents (Dev 3) — 3 jours
**Branche** : `feature/M7-document`
**Pages** : P12, P13

#### REGLE CLAUDE CODE
Demander : "Les maquettes P12 et P13 (Documents) sont-elles validées pour le dev ?"

#### Tâches
- M7.1 — Page documents P12 + tests : en-tête patient (avec stats total documents, analyses, imagerie), grille documents importants (cartes avec icône type, badge URGENT, nom, date, taille), zone "Ajouter un document" (drag-and-drop + catégorie + titre), tableau liste documents (type badge coloré ECG/BIO/RADIO, date, ajouté par, taille + pagination), boutons Annuler/Enregistrer, footer badge chiffrement AES-256.
- M7.2 — Page ajouter document P13 + tests : en-tête patient + diagnostic actif, zone upload drag-and-drop (PDF/JPG/PNG/DOCX/DICOM, max 50Mo), métadonnées (titre, catégorie dropdown, date document, émetteur/labo, description/notes), sidebar : Contrôle Qualité (format valide, taille, consentement RG12), Lien Médical (associer consultation, document sensible toggle, priorité Normal/Important/Critique).
- M7.3 — Composants documents + tests : DocumentGrid, UploadZone, DocumentTable, DocumentMetadataForm, QualityCheck, MedicalLink.
- M7.E2E — e2e/document.spec.ts

---

### MODULE 8 : Examens (Dev 3) — 3 jours
**Branche** : `feature/M8-examen`
**Pages** : P14, P15

#### REGLE CLAUDE CODE
Demander : "Les maquettes P14 et P15 (Examens) sont-elles validées pour le dev ?"

#### Tâches
- M8.1 — Page examens P14 + tests : breadcrumb, en-tête "Examens Médicaux" + boutons Retour consultation/Ajouter examen, cartes alertes critiques (ECG urgent, analyse sanguine résultat), compteurs (total examens, en attente, terminés, anormaux), tableau examens (ID, examen, type, date, statut badge, priorité, demandeur, actions + pagination), section Journal d'audit (timeline), sidebar : Prochain Examen (nom + date + recommandation), Documents récents.
- M8.2 — Page créer examen P15 + tests : en-tête patient + badge Dossier Actif, section Informations Générales (type examen dropdown, priorité Faible/Normale/Urgente, nom précis), section Contexte Clinique (motif demande, suspicion clinique/diagnostic provisoire), section Instructions spécifiques (consignes labo/plateau technique), sidebar : Acheminement (service destination dropdown, médecin demandeur), Pièces Jointes (joindre ordonnance, autres documents). Boutons : Enregistrer Brouillon, Envoyer Demande.
- M8.3 — Composants examens + tests : ExamenAlerts, ExamenTable, ExamenForm, AuditTimeline, ProchainExamen.
- M8.E2E — e2e/examen.spec.ts

---

### MODULE 9 : Accès / Consentement (Dev 3) — 3 jours
**Branche** : `feature/M9-acces`
**Pages** : P16, P17

#### REGLE CLAUDE CODE
Demander : "Les maquettes P16 et P17 (Accès dossier) sont-elles validées pour le dev ?"

#### Tâches
- M9.1 — Page demande accès P16 + tests : lien retour liste patients, bannière "Consentement requis", carte patient (nom + NPI), motif de l'accès (dropdown : Consultation, Urgence, Suivi, etc.), durée (dropdown : 12h, 24h, 7j, 30j), méthode d'authentification (3 cartes sélectionnables : Validation NPI, Autorisation OTP, Empreinte), boutons Annuler + Valider l'accès patient, footer "SÉCURISÉ PAR DOTOBASE SHIELD".
- M9.2 — Page accès validé P17 + tests : icône check vert, titre "Accès validé", texte confirmation, résumé accès (patient + durée), date expiration, boutons "Ouvrir dossier patient" + "Retour à la liste", footer "Accès sécurisé et enregistré dans le journal d'audit".
- M9.3 — Policies RLS + tests pgTAP (6 tests minimum)
- M9.E2E — e2e/acces.spec.ts

---

### MODULE 10 : Ordonnance (Dev 2) — 2 jours
**Branche** : `feature/M10-ordonnance`
**Pages** : P18

#### REGLE CLAUDE CODE
Demander : "La maquette P18 (Ordonnance) est-elle validée pour le dev ?"

#### Tâches
- M10.1 — Page ordonnance P18 + tests : sidebar actions (Imprimer, Télécharger PDF, Envoyer au patient, Retour dossier, badge sécurité RG15), en-tête clinique (logo + nom clinique + adresse + téléphone + numéro ordonnance + date + validité), section patient (nom, NPI, âge/sexe, groupe sanguin, allergies), section médecin (nom, numéro d'ordre, diagnostic CIM-10, spécialité), section Prescription Médicamenteuse (cartes par médicament : nom + dosage + voie + posologie + durée + indications particulières), section Consignes Générales + Suivi Recommandé (tableau tension/effets/prochain RDV), section Cachet et Signature Sécurisée (image signature + QR code vérification).
- M10.2 — Composants ordonnance + tests : OrdonnanceHeader, PatientInfo, MedecinInfo, PrescriptionCard, ConsignesBlock, SignatureBlock.
- M10.E2E — e2e/ordonnance.spec.ts : ordonnance s'affiche correctement, PDF téléchargeable

---

### MODULE 11 : Paramètres (Dev 3) — 3 jours
**Branche** : `feature/M11-parametres`
**Pages** : P19

#### REGLE CLAUDE CODE
Demander : "La maquette P19 (Paramètres) est-elle validée pour le dev ?"

#### Tâches
- M11.1 — Page paramètres P19 + tests : en-tête profil (photo éditable, nom, NPI, badges spécialité + rôle, compteurs consultations/patients/ordonnances/diagnostics), section Informations Personnelles (téléphone, email, adresse cabinet, langue dropdown, fuseau horaire dropdown), section Gestion Professionnelle (spécialité secondaire, services autorisés checkboxes, planning hebdomadaire jours actifs, heures de garde), sidebar : Sécurité (statut OTP actif, changement mot de passe, dernière connexion + IP), Signature et Sceau (image signature uploadable, "Sceau numérique validé", bouton mettre à jour), Confidentialité (conformité RG12/RG15, durée accès par défaut dropdown), section Notifications (matrice type x canal : App/SMS/Email pour Nouveau Patient, Résultats Analyses, Demande Accès), section Réglages Avancés (thème clair/sombre toggle, taille police slider, mode dashboard simplifié/détaillé dropdown).
- M11.2 — Composants paramètres + tests : ProfileCard, PersonalInfoForm, ProfessionalForm, SecurityPanel, SignatureUpload, ConfidentialityPanel, NotificationsMatrix, AdvancedSettings.

---

### MODULE 12 : Aide (Dev 3) — 1 jour
**Branche** : `feature/M12-aide`
**Pages** : P20

#### REGLE CLAUDE CODE
Demander : "La maquette P20 (Aide) est-elle validée pour le dev ?"

#### Tâches
- M12.1 — Page aide P20 + tests : en-tête personnalisé "Comment pouvons-nous vous aider, Dr. [nom] ?", grille rubriques d'aide (8 cartes : Consultations, Dossiers patients, Traitements, Diagnostics, Documents, Consentement, Transfert, Paramètres), section FAQ (accordéon 5+ questions), sidebar : Support Technique Live (téléphone + email + disponibilité 24/7), Actions Assistance Rapide (Chat assistance, Guide utilisateur, Tutoriel vidéo), Sécurité et Confidentialité (texte).

---

## 7. REPARTITION DES DEVS

| Dev | Modules | Pages | Durée estimée |
|-----|---------|-------|---------------|
| Dev 1 | M0, M1, M2 | P01-P05 | 8 jours |
| Dev 2 | M3, M4, M5, M6, M10 | P04, P06-P11, P18 | 18 jours |
| Dev 3 | M7, M8, M9, M11, M12 | P12-P17, P19-P20 | 13 jours |

### Planning sur 5 semaines

**Semaine 1**
| Dev 1 | Dev 2 | Dev 3 |
|---|---|---|
| M0 Setup (2j) | Attente M0 | Attente M0 |
| M1 Auth (début) | M3 Dossier patient (début) | M7 Documents (début) |

**Semaine 2**
| Dev 1 | Dev 2 | Dev 3 |
|---|---|---|
| M1 Auth (fin) | M3 Dossier patient (fin) | M7 Documents (fin) |
| M2 Dashboard (début) | M4 Consultations (début) | M8 Examens |

**Semaine 3**
| Dev 1 | Dev 2 | Dev 3 |
|---|---|---|
| M2 Dashboard (fin) | M4 Consultations (fin) | M9 Accès |
| Review M3, M7, M8 | M5 Diagnostics | Review M4, M1 |

**Semaine 4**
| Dev 1 | Dev 2 | Dev 3 |
|---|---|---|
| Review M5, M9 | M6 Traitements | M11 Paramètres |
| Fix bugs | M10 Ordonnance | M12 Aide |

**Semaine 5**
| Dev 1 | Dev 2 | Dev 3 |
|---|---|---|
| Tests E2E cross-modules | Fix bugs + polish | Fix bugs + polish |
| Déploiement staging | Documentation | Documentation |

---

## 8. GITLAB CI/CD

```yaml
stages: [lint, test, build]

webapp-lint:
  stage: lint
  image: node:20
  script:
    - cd DEV/webapp && corepack enable && pnpm install --frozen-lockfile
    - pnpm lint && pnpm tsc --noEmit
  only:
    changes: [DEV/webapp/**/*]

webapp-test:
  stage: test
  image: node:20
  script:
    - cd DEV/webapp && corepack enable && pnpm install --frozen-lockfile
    - pnpm test --run
  only:
    changes: [DEV/webapp/**/*]

webapp-e2e:
  stage: test
  image: mcr.microsoft.com/playwright:v1.48.0-noble
  script:
    - cd DEV/webapp && corepack enable && pnpm install --frozen-lockfile
    - pnpm build && pnpm test:e2e
  only: [staging, dev]

webapp-build:
  stage: build
  image: node:20
  script:
    - cd DEV/webapp && corepack enable && pnpm install --frozen-lockfile
    - pnpm build
  only:
    changes: [DEV/webapp/**/*]
```

---

## 9. CONFIGURATION LINEAR (Guide gestionnaire)

Ce guide est destiné au gestionnaire de projet (pas un dev). Suivez chaque étape dans l'ordre.

### Étape 1 : Créer le compte
1. Aller sur https://linear.app
2. Cliquer "Sign up" (gratuit jusqu'à 250 issues)
3. Créer le workspace : nom = "Dotobase"
4. Choisir le plan Free (suffisant pour commencer)

### Étape 2 : Inviter l'équipe
1. Cliquer sur le nom du workspace en haut à gauche
2. Aller dans "Settings" > "Members"
3. Cliquer "Invite members"
4. Entrer les emails des 3 développeurs
5. Rôle pour chacun : "Member"
6. Inviter aussi vous-même en tant que "Admin"

### Étape 3 : Créer l'équipe
1. Dans la barre latérale gauche, cliquer "Teams"
2. Cliquer "Create team"
3. Nom : "Dotobase Dev"
4. Identifiant : "DOT" (les issues seront numérotées DOT-1, DOT-2, etc.)
5. Cliquer "Create"

### Étape 4 : Créer les projets
Dans la barre latérale, sous l'équipe "Dotobase Dev" :
1. Cliquer "Projects" > "Create project"
2. Créer ces 3 projets :

**Projet 1 : "MVP Webapp"**
- Description : "Développement de l'application web Next.js pour les médecins et cliniques"
- Statut : "In Progress"
- Cliquer "Create"

**Projet 2 : "MVP Mobile"**
- Description : "Développement de l'application mobile Flutter pour les patients"
- Statut : "In Progress"

**Projet 3 : "Infrastructure"**
- Description : "Supabase, migrations SQL, CI/CD, déploiement"
- Statut : "In Progress"

### Étape 5 : Créer les labels
1. Aller dans "Settings" > "Labels" (dans la section de l'équipe Dotobase Dev)
2. Créer chaque label avec sa couleur :

| Nom du label | Couleur à choisir |
|---|---|
| M0-setup | Gris |
| M1-auth | Bleu clair |
| M2-dashboard | Bleu |
| M3-dossier | Violet |
| M4-consultation | Violet foncé |
| M5-diagnostic | Violet |
| M6-traitement | Indigo |
| M7-document | Vert |
| M8-examen | Vert foncé |
| M9-acces | Rose |
| M10-ordonnance | Orange |
| M11-parametres | Gris foncé |
| M12-aide | Gris |
| bug | Rouge |
| chore | Gris clair |
| infrastructure | Jaune |

### Étape 6 : Créer les cycles (sprints)
1. Dans l'équipe "Dotobase Dev", cliquer "Cycles" dans la barre latérale
2. Activer les cycles si ce n'est pas fait (Settings > Cycles > Enable)
3. Durée des cycles : 2 semaines
4. Créer 3 cycles :

**Cycle 1 : "Setup + Premiers modules"**
- Date début : [lundi de la semaine 1]
- Date fin : [dimanche de la semaine 2]

**Cycle 2 : "Modules principaux"**
- Date début : [lundi de la semaine 3]
- Date fin : [dimanche de la semaine 4]

**Cycle 3 : "Finalisation + Intégration"**
- Date début : [lundi de la semaine 5]
- Date fin : [dimanche de la semaine 5]

### Étape 7 : Créer les issues

Pour chaque issue ci-dessous :
1. Cliquer "Create issue" (ou raccourci C)
2. Remplir le titre exactement comme indiqué
3. Sélectionner le projet "MVP Webapp" (sauf si indiqué "Infrastructure")
4. Ajouter le label indiqué
5. Assigner au dev indiqué
6. Ajouter au cycle indiqué
7. Définir la priorité indiquée (Urgent / High / Medium / Low)
8. Dans la description, coller la description fournie

#### CYCLE 1 — issues à créer

**DOT-1** : Initialiser le projet Next.js
- Projet : Infrastructure
- Label : M0-setup
- Assigné : Dev 1
- Priorité : Urgent
- Description : Créer le projet Next.js dans DEV/webapp/ avec TypeScript, Tailwind, ESLint, App Router. Installer toutes les dépendances (supabase, lucide-react, zod, react-hook-form, date-fns, sonner, vitest, playwright). Vérifier que `pnpm dev` fonctionne.

**DOT-2** : Configurer le theme Dotobase + composants UI
- Projet : MVP Webapp
- Label : M0-setup
- Assigné : Dev 1
- Priorité : Urgent
- Description : Créer tailwind.config.ts avec les couleurs Dotobase (primary #0053CD, etc.). Configurer Manrope via next/font. Créer tous les composants UI de base dans src/components/ui/ : button, input, card, badge, modal, table, spinner, select, textarea, tabs, dropdown, pagination, toast. Chaque composant avec son fichier .test.tsx.

**DOT-3** : Configurer Supabase + middleware auth
- Projet : Infrastructure
- Label : M0-setup
- Assigné : Dev 1
- Priorité : Urgent
- Description : Créer client.ts, server.ts dans src/lib/supabase/. Créer .env.local.example. Créer middleware.ts qui redirige vers /login si pas de session. Routes publiques : /login, /otp.

**DOT-4** : Créer le layout authentifié (Sidebar + Header)
- Projet : MVP Webapp
- Label : M0-setup
- Assigné : Dev 1
- Priorité : High
- Description : Créer src/app/(authenticated)/layout.tsx. Sidebar avec : Dashboard, Patients, Examens, Consultations, Traitements, Dossiers, séparateur, Paramètre, Aide, Déconnexion, bouton "+ New Consultation". Header avec : logo Dotobase, barre recherche rapide, icônes notifications/paramètres/aide, avatar + nom médecin. Tests : liens sidebar présents, lien actif surligné, header affiche le nom.

**DOT-5** : Configurer Vitest + Playwright + helpers de test
- Projet : Infrastructure
- Label : M0-setup
- Assigné : Dev 1
- Priorité : High
- Description : Créer vitest.config.ts, playwright.config.ts, src/test/setup.ts. Créer les helpers : mock-supabase.ts, mock-auth.ts, render-with-providers.tsx. Ajouter les scripts test/test:watch/test:coverage/test:e2e dans package.json.

**DOT-6** : Écrire les migrations SQL (19 tables MVP)
- Projet : Infrastructure
- Label : infrastructure
- Assigné : Dev 1
- Priorité : High
- Description : Créer les fichiers dans packages/supabase/migrations/. 001 à 010. Exécuter dans Supabase staging. Générer les types TypeScript. Créer seed.sql avec données de test (spécialités, médicaments, CIM-10).

**DOT-7** : Configurer GitLab CI/CD
- Projet : Infrastructure
- Label : infrastructure
- Assigné : Dev 1
- Priorité : Medium
- Description : Créer .gitlab-ci.yml avec les pipelines lint, test, e2e, build. Les tests bloquent le merge.

**DOT-8** : Page connexion médecin (P01)
- Projet : MVP Webapp
- Label : M1-auth
- Assigné : Dev 1
- Priorité : High
- Description : Page /login. Champ NPI 10 chiffres + mot de passe + bouton Se connecter + badge AES-256 + lien Besoin d'aide + footer Dotobase. AVANT DE CODER : demander si la maquette P01 est validée. Tests : validation NPI, champ mot de passe, submit.

**DOT-9** : Page vérification OTP (P02)
- Projet : MVP Webapp
- Label : M1-auth
- Assigné : Dev 1
- Priorité : High
- Description : Page /otp. 6 cases OTP, timer 02:00, bouton VALIDER, lien Renvoyer le code, header Dotobase/Support/Emergency Access. AVANT DE CODER : demander si la maquette P02 est validée. Tests : saisie OTP, timer, renvoi.

**DOT-10** : Hook use-auth + sélection établissement
- Projet : MVP Webapp
- Label : M1-auth
- Assigné : Dev 1
- Priorité : High
- Description : Hook use-auth (user, session, etablissement, role, specialite, signOut). Page sélection établissement si multi-établissement. Server actions auth. Tests complets.

**DOT-11** : Test E2E auth
- Projet : MVP Webapp
- Label : M1-auth
- Assigné : Dev 1
- Priorité : Medium
- Description : e2e/auth.spec.ts. Scénarios : login NPI+MDP, OTP valide, redirect dashboard, NPI invalide, OTP invalide, accès protégé sans session.

**DOT-12** : Page dashboard / Gestion consultations (P03)
- Projet : MVP Webapp
- Label : M2-dashboard
- Assigné : Dev 1
- Priorité : High
- Description : Page /dashboard. Stats (Total, Aujourd'hui, En cours, Terminées, Urgences, Annulées), filtres, tableau consultations récentes, Priorités et Alertes, Dernière Activité, Actions Rapides. AVANT DE CODER : demander si la maquette P03 est validée. Tests + E2E.

**DOT-13** : Modale recherche patient (P05)
- Projet : MVP Webapp
- Label : M2-dashboard
- Assigné : Dev 1
- Priorité : Medium
- Description : Modale avec 2 onglets : Par NPI (champ saisie) et Par empreinte digitale (UI only, pas de driver pour le MVP). AVANT DE CODER : demander si la maquette P05 est validée.

**DOT-14** : Page dossier patient (P04)
- Projet : MVP Webapp
- Label : M3-dossier
- Assigné : Dev 2
- Priorité : High
- Description : Page /patients/[npi]. En-tête patient, onglets (Consultations/Diagnostics/Traitements/Documents), alertes médicales, historique accès, diagnostics, traitements actuels, consultations timeline, sidebar (résumé médical, médecin référent, actions rapides, documents récents). AVANT DE CODER : demander si la maquette P04 est validée. Tests + E2E.

**DOT-15** : Composants dossier patient + tri pertinence
- Projet : MVP Webapp
- Label : M3-dossier
- Assigné : Dev 2
- Priorité : High
- Description : Composants PatientHeader, AlertesMedicales, AccesRecentBanner, DiagnosticsPanel, TraitementsPanel, ConsultationsTimeline, ResumeMedical, ActionRapides, DocumentsRecents. Logique de tri par pertinence (spécialité du médecin en premier). Tests chaque composant + test tri avec 10 consultations mock.

**DOT-16** : Page demande accès dossier (P16)
- Projet : MVP Webapp
- Label : M9-acces
- Assigné : Dev 3
- Priorité : High
- Description : Page /acces. Bannière consentement requis, carte patient, motif accès dropdown, durée dropdown, 3 méthodes auth (Validation NPI, OTP, Empreinte), boutons Annuler/Valider. AVANT DE CODER : demander si la maquette P16 est validée.

**DOT-17** : Page accès validé (P17) + policies RLS
- Projet : MVP Webapp
- Label : M9-acces
- Assigné : Dev 3
- Priorité : High
- Description : Page /acces/valide. Confirmation, résumé accès, boutons ouvrir dossier/retour. Écrire les policies RLS dans packages/supabase/migrations/010_rls_policies.sql. Tests pgTAP (6 min). AVANT DE CODER : demander si la maquette P17 est validée.

**DOT-18** : Page documents patient (P12)
- Projet : MVP Webapp
- Label : M7-document
- Assigné : Dev 3
- Priorité : Medium
- Description : Page /patients/[npi]/documents. Grille documents importants, zone upload, tableau liste paginée. AVANT DE CODER : demander si la maquette P12 est validée.

**DOT-19** : Page ajouter document (P13)
- Projet : MVP Webapp
- Label : M7-document
- Assigné : Dev 3
- Priorité : Medium
- Description : Page /patients/[npi]/documents/new. Upload drag-and-drop, métadonnées, lien médical, contrôle qualité. AVANT DE CODER : demander si la maquette P13 est validée.

#### CYCLE 2 — issues à créer

**DOT-20** : Page historique consultations (P06)
- Projet : MVP Webapp
- Label : M4-consultation
- Assigné : Dev 2
- Priorité : High
- Description : Page /patients/[npi]/consultations. En-tête patient, alertes, compteurs, filtres, tableau consultations, audit log, résumé suivi. AVANT DE CODER : demander si P06 est validée.

**DOT-21** : Page ajouter consultation (P07)
- Projet : MVP Webapp
- Label : M4-consultation
- Assigné : Dev 2
- Priorité : High
- Description : Page /patients/[npi]/consultations/new. Formulaire complet : informations générales, symptômes, constantes vitales, diagnostic CIM-10, sidebar hypothèse/traitement/documents. AVANT DE CODER : demander si P07 est validée.

**DOT-22** : Page dossier diagnostics (P08) + ajouter diagnostic (P09)
- Projet : MVP Webapp
- Label : M5-diagnostic
- Assigné : Dev 2
- Priorité : High
- Description : Pages /patients/[npi]/diagnostics et /patients/[npi]/diagnostics/new. Recherche CIM-10, diagnostics principal/secondaire/différentiel, évaluation clinique, plan diagnostic. AVANT DE CODER : demander si P08 et P09 sont validées.

**DOT-23** : Page dossier traitements (P10) + ajouter traitement (P11)
- Projet : MVP Webapp
- Label : M6-traitement
- Assigné : Dev 2
- Priorité : High
- Description : Pages /patients/[npi]/traitements et /patients/[npi]/traitements/new. Prescriptions actives, formulaire complet traitement, contrôles sécurité, lien diagnostic. AVANT DE CODER : demander si P10 et P11 sont validées.

**DOT-24** : Page examens (P14) + créer examen (P15)
- Projet : MVP Webapp
- Label : M8-examen
- Assigné : Dev 3
- Priorité : High
- Description : Pages /patients/[npi]/examens et /patients/[npi]/examens/new. Liste examens, alertes, création examen, journal audit. AVANT DE CODER : demander si P14 et P15 sont validées.

**DOT-25** : Page ordonnance (P18)
- Projet : MVP Webapp
- Label : M10-ordonnance
- Assigné : Dev 2
- Priorité : Medium
- Description : Page /patients/[npi]/ordonnance/[ordoId]. Vue PDF-like complète avec en-tête clinique, patient, médecin, prescriptions, consignes, signature, QR. Actions imprimer/PDF/envoyer. AVANT DE CODER : demander si P18 est validée.

**DOT-26** : Page paramètres (P19)
- Projet : MVP Webapp
- Label : M11-parametres
- Assigné : Dev 3
- Priorité : Medium
- Description : Page /parametres. Profil, informations personnelles, gestion professionnelle, sécurité, signature/sceau, confidentialité, notifications matrice, réglages avancés. AVANT DE CODER : demander si P19 est validée.

**DOT-27** : Page aide (P20)
- Projet : MVP Webapp
- Label : M12-aide
- Assigné : Dev 3
- Priorité : Low
- Description : Page /aide. Rubriques d'aide, FAQ accordion, support technique live, actions assistance. AVANT DE CODER : demander si P20 est validée.

**DOT-28** : Tests E2E cross-modules
- Projet : MVP Webapp
- Label : chore
- Assigné : Dev 1
- Priorité : High
- Description : Tests E2E qui traversent plusieurs modules : login → dashboard → ouvrir patient → créer consultation → poser diagnostic → émettre ordonnance → voir dans le dossier.

**DOT-29** : Fix bugs + polish UI
- Projet : MVP Webapp
- Label : chore
- Assigné : Dev 1, Dev 2, Dev 3
- Priorité : Medium
- Description : Corriger les bugs remontés pendant l'intégration. Vérifier responsive. Vérifier cohérence visuelle entre toutes les pages.

**DOT-30** : Déploiement staging
- Projet : Infrastructure
- Label : infrastructure
- Assigné : Dev 1
- Priorité : High
- Description : Déployer la webapp sur Vercel (ou autre) connecté à Supabase staging. Vérifier que tout fonctionne en environnement de pré-production.

### Étape 8 : Intégration GitLab
1. Dans Linear, aller dans "Settings" > "Integrations"
2. Chercher "GitLab" et cliquer "Add"
3. Connecter au dépôt GitLab Dotobase
4. Activer "Auto-close issues" : quand une MR contenant [DOT-XX] est mergée, l'issue se ferme

### Étape 9 : Vues recommandées
Configurer ces vues pour l'équipe :
- **Board** (par défaut) : vue Kanban avec colonnes Backlog / Todo / In Progress / In Review / Done. Utiliser cette vue pour les stand-ups quotidiens.
- **My Issues** : chaque dev filtre ses issues assignées. Utile pour le travail quotidien.
- **Cycle actif** : voir la progression du sprint en cours. Utile pour le suivi hebdomadaire.

### Étape 10 : Rituels
- **Stand-up quotidien (5 min)** : chaque dev met à jour ses issues dans Linear (déplacer de Todo à In Progress, de In Progress à In Review). Le gestionnaire voit l'avancement sur le Board.
- **Review hebdomadaire (30 min)** : le gestionnaire regarde le Cycle actif, identifie les blocages, réassigne si nécessaire.
- **Fin de cycle** : le gestionnaire archive le cycle terminé, crée le suivant, déplace les issues non terminées.

---

## 10. REGLES D'EQUIPE

- Chaque MR vers `staging` nécessite 1 review + CI verte
- Merge dans `dev` uniquement quand `staging` est stable
- Pas de merge si un test échoue
- Stand-up quotidien : fait hier, fait aujourd'hui, bloqué
- REGLE CLAUDE CODE : avant de développer une page, demander si la maquette est validée pour le dev
