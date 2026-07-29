import React from 'react';
import { Users, Activity, AlertTriangle, ClipboardList, UserCircle2, FileText, BriefcaseMedical, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function DashboardPage() {
  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-8 pb-10">
      
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-[#0F5A9A] tracking-tight">Tableau de bord</h1>
        <p className="text-sm text-gray-500 mt-1">Bon retour, Docteur. Voici le résumé de votre activité pour aujourd'hui.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0F5A9A] flex items-center justify-center">
              <Users size={20} strokeWidth={2} />
            </div>
            <span className="text-xs font-semibold text-gray-500">Aujourd'hui</span>
          </div>
          <div className="mt-auto">
            <h3 className="text-3xl font-bold text-gray-900 leading-none">12</h3>
            <p className="text-sm text-gray-500 mt-1">Patients attendus</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Activity size={20} strokeWidth={2} />
            </div>
            <div className="flex items-center gap-1.5 px-2 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full">
              <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
              En cours
            </div>
          </div>
          <div className="mt-auto">
            <h3 className="text-3xl font-bold text-gray-900 leading-none">1</h3>
            <p className="text-sm text-gray-500 mt-1">Consultation active</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-lg bg-red-50 text-red-500 flex items-center justify-center">
              <AlertTriangle size={20} strokeWidth={2.5} />
            </div>
            <div className="px-2 py-1 bg-[#D14343] text-white text-[10px] font-bold tracking-wide uppercase rounded">
              Urgent
            </div>
          </div>
          <div className="mt-auto">
            <h3 className="text-3xl font-bold text-gray-900 leading-none">2</h3>
            <p className="text-sm text-gray-500 mt-1">Alertes urgences</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <ClipboardList size={20} strokeWidth={2} />
            </div>
          </div>
          <div className="mt-auto">
            <h3 className="text-3xl font-bold text-gray-900 leading-none">45</h3>
            <p className="text-sm text-gray-500 mt-1">Traitements suivis</p>
          </div>
        </div>

      </div>

      {/* Main Content Split */}
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        
        {/* Activité Récente */}
        <div className="flex-1 w-full bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <h2 className="text-[15px] font-bold text-gray-900">Activité Récente</h2>
            <button className="text-sm font-semibold text-[#0F5A9A] hover:underline">
              Voir tout
            </button>
          </div>
          
          <div className="p-6">
            <div className="relative border-l-2 border-gray-100 ml-3 space-y-8 pb-4">
              
              {/* Item 1 */}
              <div className="relative pl-6">
                <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#0F5A9A]">
                  <UserCircle2 size={16} />
                </div>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-sm font-bold text-gray-900">Patient consulté : A. Codjo</h4>
                  <span className="text-xs text-gray-400 font-medium">il y a 10 min</span>
                </div>
                <p className="text-sm text-gray-500 mb-2">Consultation de suivi post-opératoire terminée avec succès.</p>
                <div className="inline-flex px-2 py-0.5 bg-emerald-100 text-emerald-700 text-xs font-bold rounded">
                  Terminée
                </div>
              </div>

              {/* Item 2 */}
              <div className="relative pl-6">
                <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#0F5A9A]">
                  <FileText size={16} />
                </div>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-sm font-bold text-gray-900">Diagnostic ajouté : Hypertension</h4>
                  <span className="text-xs text-gray-400 font-medium">il y a 45 min</span>
                </div>
                <p className="text-sm text-gray-500 mb-2">Nouveau diagnostic pour Mme. Diallo - Protocole de surveillance engagé.</p>
                <div className="flex items-center gap-1 text-xs text-gray-500 font-medium">
                  <ShieldCheck size={14} className="text-gray-400" />
                  Dossier sécurisé
                </div>
              </div>

              {/* Item 3 */}
              <div className="relative pl-6">
                <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#0F5A9A]">
                  <BriefcaseMedical size={16} />
                </div>
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-sm font-bold text-gray-900">Traitement en cours : Protocole Cardio</h4>
                  <span className="text-xs text-gray-400 font-medium">il y a 2 heures</span>
                </div>
                <p className="text-sm text-gray-500 mb-2">Mise à jour de la posologie pour M. Traoré. Suivi hebdomadaire requis.</p>
                <div className="inline-flex px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-bold rounded">
                  En cours
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-full lg:w-80 flex flex-col gap-6 shrink-0">
          
          {/* Calendar Widget */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5">
            <h2 className="text-[15px] font-bold text-gray-900 mb-4">Calendrier</h2>
            
            <div className="bg-[#F8FAFC] rounded-lg p-4 border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-gray-900 text-sm">Octobre 2023</span>
                <div className="flex gap-1">
                  <button className="text-gray-400 hover:text-gray-700"><ChevronLeft size={16} /></button>
                  <button className="text-gray-400 hover:text-gray-700"><ChevronRight size={16} /></button>
                </div>
              </div>
              
              <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
                <span className="text-gray-400 font-medium">L</span>
                <span className="text-gray-400 font-medium">M</span>
                <span className="text-gray-400 font-medium">M</span>
                <span className="text-gray-400 font-medium">J</span>
                <span className="text-gray-400 font-medium">V</span>
                <span className="text-gray-400 font-medium">S</span>
                <span className="text-gray-400 font-medium">D</span>
              </div>
              
              <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium text-gray-700">
                <div className="py-1">12</div>
                <div className="py-1">13</div>
                <div className="py-1 bg-[#0F5A9A] text-white rounded-md shadow-sm">14</div>
                <div className="py-1">15</div>
                <div className="py-1">16</div>
                <div className="py-1">17</div>
                <div className="py-1">18</div>
              </div>
            </div>
          </div>

          {/* Security Banner */}
          <div className="bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-xl shadow-sm p-4 flex items-center gap-4 text-white">
            <div className="shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h3 className="font-bold text-[15px]">Système Sécurisé</h3>
              <p className="text-xs text-emerald-50/90 font-medium leading-tight">Tous les dossiers sont chiffrés AES-256</p>
            </div>
          </div>

          {/* Image Banner */}
          <div className="relative w-full h-32 rounded-xl overflow-hidden shadow-sm">
            {/* Fallback gradient if image not available */}
            <div className="absolute inset-0 bg-slate-800" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
            <div className="absolute bottom-3 left-4 z-20">
              <p className="text-white text-sm font-bold tracking-wide">Hôpital Central de la Paix</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

