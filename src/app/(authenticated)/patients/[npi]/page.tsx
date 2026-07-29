'use client';

import React from 'react';
import { 
  Plus, 
  User, 
  MapPin, 
  AlertTriangle, 
  Lock, 
  ShieldCheck, 
  Activity, 
  Stethoscope, 
  FileText,
  Send,
  FileDown,
  ExternalLink,
  ChevronRight,
  PlusCircle,
  Pill,
  File
} from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function PatientMedicalFilePage() {
  const router = useRouter();
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-6 pb-10">
      
      {/* Patient Header Card */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 bg-slate-100 rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex items-center justify-center shrink-0">
            <User size={36} className="text-slate-400" />
            {/* Ideally replace with an actual Image component for the patient */}
          </div>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-2xl font-bold text-slate-900">A. Codjo</h1>
              <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded-md border border-slate-200">
                NPI: 329875421
              </span>
            </div>
            <div className="flex items-center gap-4 text-sm text-slate-600">
              <span className="flex items-center gap-1.5 font-medium">
                <User size={14} className="text-slate-400" />
                32 ans (né le 12/08/1993) • Masculin
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <MapPin size={14} className="text-slate-400" />
                Cotonou, Littoral
              </span>
            </div>
          </div>
        </div>
        <button 
          onClick={() => router.push('/patients/329875421/consultations/new')}
          className="bg-[#00A1C9] hover:bg-[#008BB0] text-white px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-colors shadow-sm shrink-0 w-full sm:w-auto justify-center"
        >
          <Plus size={18} />
          Nouvelle consultation
        </button>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column (Main Info) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          
          {/* Navigation Tabs */}
          <div className="border-b border-slate-200">
            <nav className="flex gap-8">
              <button className="border-b-2 border-[#00A1C9] text-[#00A1C9] font-bold pb-3 px-1 text-sm">
                Consultations
              </button>
              <button className="border-b-2 border-transparent text-slate-500 hover:text-slate-700 font-semibold pb-3 px-1 text-sm transition-colors">
                Diagnostics
              </button>
              <button className="border-b-2 border-transparent text-slate-500 hover:text-slate-700 font-semibold pb-3 px-1 text-sm transition-colors">
                Traitements
              </button>
              <button className="border-b-2 border-transparent text-slate-500 hover:text-slate-700 font-semibold pb-3 px-1 text-sm transition-colors flex items-center gap-1.5">
                Documents
                <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-1.5 py-0.5 rounded-full">12</span>
              </button>
            </nav>
          </div>
          
          {/* Alertes Médicales */}
          <div className="bg-[#FFF5F5] rounded-xl border border-[#FFE0E0] border-l-4 border-l-[#D14343] p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle size={18} className="text-[#D14343]" strokeWidth={2.5} />
              <h3 className="text-[15px] font-bold text-[#D14343]">Alertes Médicales</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#FFEBEB] text-[#D14343] text-[11px] font-bold px-3 py-1.5 rounded-md border border-[#FFD6D6]">
                Surveillance cardiovasculaire
              </span>
              <span className="bg-[#FFEBEB] text-[#D14343] text-[11px] font-bold px-3 py-1.5 rounded-md border border-[#FFD6D6]">
                Dernière tension élevée : 15/05/2026
              </span>
              <span className="bg-slate-100 text-slate-600 text-[11px] font-bold px-3 py-1.5 rounded-md border border-slate-200">
                Risque modéré (I10, E66)
              </span>
            </div>
          </div>

          {/* Historique d'accès récent */}
          <div className="bg-[#F0FDF4] rounded-xl border border-[#DCFCE7] border-l-4 border-l-emerald-500 p-5 shadow-sm flex items-center justify-between">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                <Lock size={20} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-0.5">Accès Autorisé</h3>
                <p className="text-xs text-emerald-700 font-medium">Validé par OTP patient</p>
              </div>
            </div>
            <div className="text-right flex flex-col items-end">
              <ShieldCheck size={18} className="text-emerald-500 mb-1" />
              <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Expire le</p>
              <p className="text-xs font-bold text-slate-700">16/05/2026 08h30</p>
            </div>
          </div>

          {/* Diagnostics and Traitements Split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Diagnostics */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
              <h3 className="text-[15px] font-bold text-slate-900 mb-4">Diagnostics</h3>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="bg-[#0053CD] text-white text-xs font-bold px-2 py-1 rounded-md shrink-0 mt-0.5">
                    I10
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Hypertension essentielle</p>
                    <p className="text-xs text-[#00A1C9] font-medium">Diagnostic Principal</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-slate-200 text-slate-600 text-xs font-bold px-2 py-1 rounded-md shrink-0 mt-0.5">
                    E66
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">Surpoids</p>
                    <p className="text-xs text-slate-500 font-medium">Diagnostic Secondaire</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Traitements Actuels */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-[15px] font-bold text-slate-900">Traitements Actuels</h3>
                <button className="text-[#00A1C9] hover:text-[#008BB0] transition-colors">
                  <PlusCircle size={20} />
                </button>
              </div>
              
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-bold text-slate-900">Amlodipine 5mg</p>
                    <p className="text-xs text-slate-500">1 comp/jour</p>
                  </div>
                  <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2 py-0.5 rounded-full border border-emerald-100">
                    Actif
                  </span>
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-600">Observance :</span>
                    <span className="text-emerald-600">92% (Bonne)</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Dernières Consultations */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
            <h3 className="text-[15px] font-bold text-slate-900 mb-5">Dernières Consultations</h3>
            
            <div className="relative border-l border-slate-200 ml-2 space-y-6 pb-2">
              
              {/* Consultation 1 */}
              <div className="relative pl-6">
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#D14343] border-2 border-white box-content"></div>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Douleur thoracique - Urgence</h4>
                    <p className="text-xs text-slate-500 font-medium">Dr. Hounkpatin • Cardiologie</p>
                  </div>
                  <span className="text-xs font-bold text-[#D14343]">15/05/2026</span>
                </div>
                <div className="bg-slate-50 border border-slate-100 rounded-lg p-3 mt-3">
                  <p className="text-[13px] text-slate-600 italic">
                    "Patient admis pour précordialgies. ECG réalisé immédiatement. Pas de signe d'infarctus aigu mais surveillance accrue."
                  </p>
                </div>
              </div>

              {/* Consultation 2 */}
              <div className="relative pl-6">
                <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-300 border-2 border-white box-content"></div>
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Suivi d'hypertension artérielle</h4>
                    <p className="text-xs text-slate-500 font-medium">Dr. Hounkpatin • Cardiologie</p>
                  </div>
                  <span className="text-xs font-semibold text-slate-500">10/05/2026</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Right Column (Sidebar Widgets) */}
        <div className="lg:col-span-1 flex flex-col gap-6">
          
          {/* Résumé Médical */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
            <h3 className="text-[15px] font-bold text-slate-900 mb-4">Résumé Médical</h3>
            
            <div className="grid grid-cols-3 gap-2 mb-5">
              <div className="bg-[#F0F7FF] rounded-lg p-3 text-center border border-[#E6F0FF]">
                <p className="text-xl font-bold text-[#0053CD]">5</p>
                <p className="text-[10px] font-bold text-[#0053CD] uppercase">CONSULT.</p>
              </div>
              <div className="bg-[#FFEBEB] rounded-lg p-3 text-center border border-[#FFD6D6]">
                <p className="text-xl font-bold text-[#D14343]">1</p>
                <p className="text-[10px] font-bold text-[#D14343] uppercase">URGENCE</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-3 text-center border border-slate-100">
                <p className="text-xl font-bold text-slate-500">0</p>
                <p className="text-[10px] font-bold text-slate-500 uppercase">HOSPIT.</p>
              </div>
            </div>

            <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2">MÉDECIN RÉFÉRENT</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <Stethoscope size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-slate-900">Dr. Hounkpatin</p>
                  <p className="text-xs text-emerald-600 font-medium">Cardiologie</p>
                </div>
              </div>
            </div>
          </div>

          {/* Actions Rapides */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
            <h3 className="text-[15px] font-bold text-slate-900 mb-4">Actions Rapides</h3>
            
            <div className="flex flex-col gap-2">
              <button className="flex items-center gap-3 w-full p-3 rounded-lg border border-slate-200 hover:bg-slate-50 hover:border-[#00A1C9] transition-all group">
                <Stethoscope size={18} className="text-[#0053CD] group-hover:text-[#00A1C9]" />
                <span className="text-sm font-semibold text-slate-700 group-hover:text-slate-900">Ajouter diagnostics</span>
              </button>
              <button className="flex items-center gap-3 w-full p-3 rounded-lg border border-slate-200 hover:bg-slate-50 hover:border-[#00A1C9] transition-all group">
                <Pill size={18} className="text-[#0053CD] group-hover:text-[#00A1C9]" />
                <span className="text-sm font-semibold text-slate-700 group-hover:text-slate-900">Ajouter traitement</span>
              </button>
              <button className="flex items-center gap-3 w-full p-3 rounded-lg border border-slate-200 hover:bg-slate-50 hover:border-[#00A1C9] transition-all group">
                <FileText size={18} className="text-[#0053CD] group-hover:text-[#00A1C9]" />
                <span className="text-sm font-semibold text-slate-700 group-hover:text-slate-900">Ajouter document</span>
              </button>
              <button className="flex items-center gap-3 w-full p-3 rounded-lg border border-[#E6F0FF] bg-[#F0F7FF] hover:bg-[#E6F0FF] transition-all group text-[#0053CD]">
                <Send size={18} className="rotate-45" />
                <span className="text-sm font-bold">Transférer dossier</span>
              </button>
            </div>
          </div>

          {/* Document Récent */}
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-[15px] font-bold text-slate-900">Document Récent</h3>
              <div className="flex items-center gap-2">
                <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded-md">
                  12 total
                </span>
                <button className="text-[10px] font-bold text-[#00A1C9] uppercase hover:underline">
                  Voir tout
                </button>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 border border-slate-100 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer group">
              <div className="w-10 h-10 rounded-lg bg-[#FFEBEB] text-[#D14343] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <FileText size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 line-clamp-1">ECG_Codjo_150526.pdf</p>
                <p className="text-xs text-slate-500 mt-0.5">Ajouté par Dr. Hounkpatin</p>
                <p className="text-[10px] text-slate-400 font-medium">15 Mai 2026</p>
              </div>
            </div>
          </div>

          {/* Floating Action / Export Button (Simulated) */}
          <div className="mt-4 flex justify-end">
            <button className="w-12 h-12 bg-[#0053CD] hover:bg-[#0041A3] rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-900/20 transition-transform hover:scale-105">
              <ExternalLink size={20} />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
