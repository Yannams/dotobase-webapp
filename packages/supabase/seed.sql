-- Seed data pour Dotobase — Bénin
-- Données de test et référentiels pour l'environnement de développement/staging.
-- À exécuter APRÈS les migrations 001-010.

-- ─── SPÉCIALITÉS MÉDICALES ───────────────────────────────────────────────────

INSERT INTO public.specialites (code, nom) VALUES
  ('MED_GEN',   'Médecine Générale'),
  ('CARDIO',    'Cardiologie'),
  ('PEDIATRIE', 'Pédiatrie'),
  ('GYNECO',    'Gynécologie-Obstétrique'),
  ('CHIRURGIE', 'Chirurgie Générale'),
  ('OPHTHAL',   'Ophtalmologie'),
  ('DERMATO',   'Dermatologie'),
  ('PNEUMO',    'Pneumologie'),
  ('NEURO',     'Neurologie'),
  ('ORTHO',     'Orthopédie-Traumatologie'),
  ('GASTRO',    'Gastro-entérologie'),
  ('ENDO',      'Endocrinologie'),
  ('URGENCES',  'Médecine d''Urgence'),
  ('INFIRMIER', 'Soins Infirmiers'),
  ('PHARMA',    'Pharmacologie')
ON CONFLICT (code) DO NOTHING;

-- ─── CODES CIM-10 (sélection maladies fréquentes au Bénin) ──────────────────

INSERT INTO public.icd10_codes (code, description_fr, categorie, sous_categorie) VALUES
  ('B50',   'Paludisme à Plasmodium falciparum',                       'Maladies infectieuses', 'Paludisme'),
  ('B51',   'Paludisme à Plasmodium vivax',                            'Maladies infectieuses', 'Paludisme'),
  ('A09',   'Diarrhée et gastro-entérite d''origine infectieuse',      'Maladies infectieuses', 'Infections intestinales'),
  ('A15',   'Tuberculose respiratoire',                                 'Maladies infectieuses', 'Tuberculose'),
  ('B20',   'VIH/SIDA : maladies infectieuses',                        'Maladies infectieuses', 'VIH'),
  ('B24',   'VIH/SIDA non précisé',                                    'Maladies infectieuses', 'VIH'),
  ('A01',   'Typhoïde',                                                 'Maladies infectieuses', 'Infections bactériennes'),
  ('A90',   'Dengue',                                                   'Maladies infectieuses', 'Arboviroses'),
  ('J18',   'Pneumonie non précisée',                                   'Maladies respiratoires', 'Pneumonies'),
  ('J11',   'Grippe avec pneumonie, virus non identifié',               'Maladies respiratoires', 'Grippe'),
  ('J45',   'Asthme',                                                   'Maladies respiratoires', 'Asthme'),
  ('J06',   'Infections aiguës des voies respiratoires supérieures',    'Maladies respiratoires', 'IVR supérieures'),
  ('I10',   'Hypertension artérielle essentielle',                      'Maladies cardiovasculaires', 'HTA'),
  ('I50',   'Insuffisance cardiaque',                                   'Maladies cardiovasculaires', 'Cardiopathies'),
  ('I21',   'Infarctus aigu du myocarde',                               'Maladies cardiovasculaires', 'Coronaropathies'),
  ('E11',   'Diabète de type 2',                                        'Maladies endocriniennes', 'Diabète'),
  ('E10',   'Diabète de type 1',                                        'Maladies endocriniennes', 'Diabète'),
  ('E14',   'Diabète non précisé',                                      'Maladies endocriniennes', 'Diabète'),
  ('D50',   'Anémie ferriprive',                                        'Maladies du sang', 'Anémies'),
  ('D57',   'Drépanocytose',                                            'Maladies du sang', 'Hémoglobinopathies'),
  ('K29',   'Gastrite et duodénite',                                    'Maladies digestives', 'Gastrites'),
  ('K35',   'Appendicite aiguë',                                        'Maladies digestives', 'Appendicite'),
  ('K80',   'Lithiase biliaire',                                        'Maladies digestives', 'Voies biliaires'),
  ('O14',   'Hypertension gestationnelle avec protéinurie',             'Grossesse', 'Complications'),
  ('O20',   'Hémorragie du début de grossesse',                         'Grossesse', 'Complications'),
  ('L03',   'Cellulite',                                                 'Maladies cutanées', 'Infections'),
  ('B35',   'Dermatophytose (teigne)',                                   'Maladies cutanées', 'Infections fongiques'),
  ('S72',   'Fracture du col du fémur',                                  'Traumatismes', 'Fractures'),
  ('T14',   'Traumatisme de région non précisée',                        'Traumatismes', 'Traumatismes généraux'),
  ('G40',   'Épilepsie',                                                 'Maladies neurologiques', 'Épilepsie'),
  ('F32',   'Épisode dépressif',                                         'Troubles mentaux', 'Dépression')
ON CONFLICT (code) DO NOTHING;

-- ─── MÉDICAMENTS (Liste Nationale Essentielle Bénin) ─────────────────────────

INSERT INTO public.medicaments (nom, classe, forme, dosages_disponibles) VALUES
  ('Artéméther-Luméfantrine',    'Antipaludéen',               'comprimé',   '["20mg/120mg"]'),
  ('Artésunate',                 'Antipaludéen',               'injectable', '["60mg/ampoule", "120mg/ampoule"]'),
  ('Quinine',                    'Antipaludéen',               'injectable', '["300mg/mL"]'),
  ('Amoxicilline',               'Antibiotique',               'comprimé',   '["250mg", "500mg", "1000mg"]'),
  ('Amoxicilline + Clavulanate', 'Antibiotique',               'comprimé',   '["500mg/125mg", "875mg/125mg"]'),
  ('Ciprofloxacine',             'Antibiotique',               'comprimé',   '["250mg", "500mg"]'),
  ('Métronidazole',              'Antiprotozoaire',            'comprimé',   '["250mg", "500mg"]'),
  ('Cotrimoxazole',              'Antibiotique',               'comprimé',   '["480mg", "960mg"]'),
  ('Doxycycline',                'Antibiotique',               'comprimé',   '["100mg"]'),
  ('Ceftriaxone',                'Antibiotique céphalosporine','injectable', '["1g/flacon", "2g/flacon"]'),
  ('Amlodipine',                 'Inhibiteur calcique',        'comprimé',   '["5mg", "10mg"]'),
  ('Captopril',                  'IEC',                        'comprimé',   '["25mg", "50mg"]'),
  ('Hydrochlorothiazide',        'Diurétique thiazidique',     'comprimé',   '["12.5mg", "25mg"]'),
  ('Méthyldopa',                 'Antihypertenseur central',   'comprimé',   '["250mg", "500mg"]'),
  ('Metformine',                 'Biguanide',                  'comprimé',   '["500mg", "850mg", "1000mg"]'),
  ('Glibenclamide',              'Sulfonylurée',               'comprimé',   '["2.5mg", "5mg"]'),
  ('Insuline NPH',               'Insuline basale',            'injectable', '["100UI/mL"]'),
  ('Insuline Rapide',            'Insuline rapide',            'injectable', '["100UI/mL"]'),
  ('Paracétamol',                'Analgésique antipyrétique',  'comprimé',   '["500mg", "1000mg"]'),
  ('Ibuprofène',                 'AINS',                       'comprimé',   '["200mg", "400mg"]'),
  ('Diclofénac',                 'AINS',                       'comprimé',   '["50mg", "75mg"]'),
  ('Tramadol',                   'Opioïde faible',             'comprimé',   '["50mg", "100mg"]'),
  ('Fer + Acide folique',        'Hématinique',                'comprimé',   '["60mg/400µg"]'),
  ('Vitamine A',                 'Vitamine liposoluble',       'capsule',    '["100000 UI", "200000 UI"]'),
  ('Zinc',                       'Oligoélément',               'comprimé',   '["10mg", "20mg"]'),
  ('Salbutamol',                 'Bronchodilatateur β2',       'inhalateur', '["100µg/dose"]'),
  ('Prednisolone',               'Corticoïde',                 'comprimé',   '["5mg", "25mg"]'),
  ('Rifampicine',                'Antituberculeux',            'comprimé',   '["150mg", "300mg"]'),
  ('Isoniazide',                 'Antituberculeux',            'comprimé',   '["100mg", "300mg"]'),
  ('Sérum physiologique NaCl 0.9%', 'Soluté de perfusion',   'injectable', '["500mL", "1000mL"]'),
  ('Sérum glucosé 5%',           'Soluté de perfusion',        'injectable', '["500mL", "1000mL"]'),
  ('Ringer Lactate',             'Soluté de remplissage',      'injectable', '["500mL"]')
ON CONFLICT DO NOTHING;

-- ─── ÉTABLISSEMENTS DE TEST ───────────────────────────────────────────────────

INSERT INTO public.etablissements (nom, type, ville, adresse, telephone) VALUES
  ('Centre Hospitalier Universitaire de Cotonou',  'hopital',    'Cotonou',      'Avenue Jean-Paul II, Cotonou',     '+229 21 30 01 55'),
  ('Clinique La Croix du Sud',                      'clinique',   'Cotonou',      'Quartier Aïdjèdo, Cotonou',        '+229 21 31 22 44'),
  ('Hôpital de Zone de Calavi',                     'hopital',    'Calavi',       'Route de Calavi, Abomey-Calavi',   '+229 21 36 01 22'),
  ('Cabinet Médical du Centre',                     'cabinet',    'Porto-Novo',   'Avenue du 1er Août, Porto-Novo',   '+229 20 21 55 66'),
  ('Centre de Santé Commune 3',                     'dispensaire','Cotonou',      'Quartier Cadjèhoun, Cotonou',      '+229 21 32 11 00')
ON CONFLICT DO NOTHING;
