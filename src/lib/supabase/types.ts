// Types auto-générés par Supabase CLI (`supabase gen types typescript --local`)
// Ce fichier sera remplacé après exécution de `supabase gen types` sur le projet réel.
// Maintenu manuellement jusqu'à la mise en place du projet Supabase staging.

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      specialites: {
        Row: { id: string; code: string; nom: string };
        Insert: Omit<Database['public']['Tables']['specialites']['Row'], 'id'>;
        Update: Partial<Database['public']['Tables']['specialites']['Insert']>;
      };
      etablissements: {
        Row: {
          id: string; nom: string;
          type: 'hopital' | 'clinique' | 'dispensaire' | 'cabinet' | 'autre';
          ville: string; adresse: string | null; telephone: string | null;
          email: string | null; created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['etablissements']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['etablissements']['Insert']>;
      };
      medecins: {
        Row: {
          id: string; npi: string; nom: string; prenom: string;
          specialite_id: string | null; telephone: string | null;
          email: string | null; created_at: string; updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['medecins']['Row'], 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['medecins']['Insert']>;
      };
      medecin_etablissements: {
        Row: {
          id: string; medecin_id: string; etablissement_id: string;
          role: 'medecin' | 'infirmier' | 'admin' | 'directeur';
          est_principal: boolean; created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['medecin_etablissements']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['medecin_etablissements']['Insert']>;
      };
      patients: {
        Row: {
          id: string; npi: string; nom: string; prenom: string;
          date_naissance: string; sexe: 'M' | 'F'; telephone: string | null;
          email: string | null; adresse: string | null;
          groupe_sanguin: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-' | null;
          created_at: string; updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['patients']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['patients']['Insert']>;
      };
      dossiers_medicaux: {
        Row: { id: string; patient_id: string; created_at: string; updated_at: string };
        Insert: Omit<Database['public']['Tables']['dossiers_medicaux']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['dossiers_medicaux']['Insert']>;
      };
      icd10_codes: {
        Row: {
          id: string; code: string; description_fr: string;
          categorie: string | null; sous_categorie: string | null;
        };
        Insert: Omit<Database['public']['Tables']['icd10_codes']['Row'], 'id'>;
        Update: Partial<Database['public']['Tables']['icd10_codes']['Insert']>;
      };
      consultations: {
        Row: {
          id: string; patient_id: string; medecin_id: string; etablissement_id: string;
          type: 'rdv' | 'urgence' | 'walk_in' | 'telemedicine';
          motif: string; service: string | null; salle: string | null;
          statut: 'en_cours' | 'terminee' | 'annulee';
          notes: string | null; date_consultation: string;
          created_at: string; updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['consultations']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['consultations']['Insert']>;
      };
      constantes_vitales: {
        Row: {
          id: string; consultation_id: string;
          tension_systolique: number | null; tension_diastolique: number | null;
          temperature: number | null; frequence_cardiaque: number | null;
          spo2: number | null; poids: number | null; taille: number | null;
          observations: string | null; created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['constantes_vitales']['Row'], 'id' | 'created_at'>;
        Update: Partial<Database['public']['Tables']['constantes_vitales']['Insert']>;
      };
      diagnostics: {
        Row: {
          id: string; consultation_id: string; patient_id: string;
          icd10_code_id: string | null; code_libre: string | null;
          type: 'principal' | 'secondaire' | 'differentiel';
          commentaire: string | null;
          severite: 'legere' | 'moderee' | 'severe' | 'critique' | null;
          created_at: string; updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['diagnostics']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['diagnostics']['Insert']>;
      };
      medicaments: {
        Row: {
          id: string; nom: string; classe: string | null; forme: string | null;
          dosages_disponibles: Json; actif: boolean;
        };
        Insert: Omit<Database['public']['Tables']['medicaments']['Row'], 'id'>;
        Update: Partial<Database['public']['Tables']['medicaments']['Insert']>;
      };
      traitements: {
        Row: {
          id: string; patient_id: string; medecin_id: string;
          consultation_id: string | null; medicament_id: string | null;
          medicament_libre: string | null; dosage: string; voie: string;
          frequence: string; date_debut: string; date_fin: string | null;
          posologie: string | null; precautions: string | null;
          statut: 'actif' | 'termine' | 'suspendu' | 'annule';
          created_at: string; updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['traitements']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['traitements']['Insert']>;
      };
      ordonnances: {
        Row: {
          id: string; consultation_id: string; patient_id: string; medecin_id: string;
          numero: string; date_emission: string; date_validite: string;
          instructions_generales: string | null;
          statut: 'active' | 'expiree' | 'annulee';
          created_at: string; updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['ordonnances']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['ordonnances']['Insert']>;
      };
      documents: {
        Row: {
          id: string; patient_id: string; medecin_id: string;
          consultation_id: string | null;
          categorie: 'analyse' | 'imagerie' | 'ecg' | 'compte_rendu' | 'ordonnance' | 'autre';
          titre: string; url_storage: string; format: string | null;
          taille_octets: number | null; est_urgent: boolean;
          priorite: 'normal' | 'important' | 'critique';
          created_at: string; updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['documents']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['documents']['Insert']>;
      };
      examens: {
        Row: {
          id: string; patient_id: string; medecin_id: string;
          consultation_id: string | null;
          type_examen: 'analyse_sanguine' | 'imagerie' | 'ecg' | 'biopsie' | 'endoscopie' | 'autre';
          nom: string; priorite: 'faible' | 'normale' | 'urgente';
          statut: 'en_attente' | 'en_cours' | 'termine' | 'annule';
          motif: string | null; instructions: string | null;
          date_demande: string; date_resultat: string | null;
          created_at: string; updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['examens']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['examens']['Insert']>;
      };
      acces_dossiers: {
        Row: {
          id: string; patient_id: string; medecin_id: string;
          motif: 'consultation' | 'urgence' | 'suivi' | 'transfert' | 'autre';
          methode_auth: 'npi' | 'otp' | 'empreinte';
          duree_heures: 12 | 24 | 168 | 720;
          date_expiration: string;
          statut: 'en_attente' | 'approuve' | 'refuse' | 'expire';
          created_at: string; updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['acces_dossiers']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['acces_dossiers']['Insert']>;
      };
      audit_logs: {
        Row: {
          id: string; table_name: string; record_id: string;
          action: 'INSERT' | 'UPDATE' | 'DELETE' | 'SELECT';
          medecin_id: string | null; old_values: Json | null;
          new_values: Json | null; ip_address: string | null; created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['audit_logs']['Row'], 'id' | 'created_at'>;
        Update: never;
      };
      notifications: {
        Row: {
          id: string; medecin_id: string;
          type: 'nouveau_patient' | 'resultat_analyse' | 'demande_acces' | 'alerte_critique' | 'systeme';
          titre: string; message: string; est_lue: boolean; data: Json; created_at: string;
        };
        Insert: Omit<Database['public']['Tables']['notifications']['Row'], 'id' | 'created_at'>;
        Update: Partial<Pick<Database['public']['Tables']['notifications']['Row'], 'est_lue'>>;
      };
      parametres_medecin: {
        Row: {
          id: string; medecin_id: string;
          theme: 'clair' | 'sombre';
          taille_police: 'petite' | 'normale' | 'grande';
          duree_acces_defaut: 12 | 24 | 168 | 720;
          notif_nouveau_patient: boolean; notif_resultats: boolean;
          notif_demande_acces: boolean; created_at: string; updated_at: string;
        };
        Insert: Omit<Database['public']['Tables']['parametres_medecin']['Row'], 'id' | 'created_at' | 'updated_at'>;
        Update: Partial<Database['public']['Tables']['parametres_medecin']['Insert']>;
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
}
