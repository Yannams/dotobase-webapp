import React from 'react';
import { 
  Calendar, 
  MapPin, 
  Download, 
  Plus,
  Filter,
  Activity,
  Stethoscope,
  CheckCircle2,
  Clock,
  FileText,
  AlertTriangle,
  Eye,
  BarChart2,
  Key,
  Share2,
  Zap,
  MoreVertical
} from 'lucide-react';

export default function ConsultationsPage() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-6 pb-10">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-2">
        <div>
          <h2 className="text-[#0053CD] text-xs font-bold tracking-wider uppercase mb-1">Clinique Saint Luc</h2>
          <h1 className="text-3xl font-extrabold text-[#0E1B2A] tracking-tight">Gestion des Consultations</h1>
          <div className="flex items-center gap-4 text-sm text-[#6E7C91] mt-2 font-medium">
            <span className="flex items-center gap-1.5"><Calendar size={16} /> 15 Mai 2024</span>
            <span className="flex items-center gap-1.5"><MapPin size={16} /> Cotonou, Bénin</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 bg-[#F1F5F9] text-[#475569] px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#E2E8F0] transition-colors">
            <Download size={18} />
            Exporter la liste
          </button>
          <button className="flex items-center gap-2 bg-[#0053CD] text-white px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#0046b3] transition-colors shadow-sm">
            <Plus size={18} />
            Nouvelle consultation
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        
        <div className="bg-white rounded-xl border border-[#E3EDF7] p-4 flex flex-col shadow-sm">
          <span className="text-xs font-semibold text-[#6E7C91] mb-2">Total Consultations</span>
          <div className="flex items-end gap-2 mt-auto">
            <h3 className="text-3xl font-extrabold text-[#0E1B2A] leading-none">124</h3>
            <span className="text-xs font-bold text-emerald-600 mb-1">+12%</span>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-[#E3EDF7] p-4 flex flex-col shadow-sm">
          <span className="text-xs font-semibold text-[#6E7C91] mb-2">Aujourd'hui</span>
          <div className="mt-auto">
            <h3 className="text-3xl font-extrabold text-[#0E1B2A] leading-none">18</h3>
          </div>
        </div>

        <div className="bg-blue-50/50 rounded-xl border border-blue-100 p-4 flex flex-col shadow-sm">
          <span className="text-xs font-semibold text-[#6E7C91] mb-2">En cours</span>
          <div className="flex items-center gap-2 mt-auto">
            <div className="w-2 h-2 rounded-full bg-[#0053CD]"></div>
            <h3 className="text-3xl font-extrabold text-[#0053CD] leading-none">6</h3>
          </div>
        </div>

        <div className="bg-emerald-50/50 rounded-xl border border-emerald-100 p-4 flex flex-col shadow-sm">
          <span className="text-xs font-semibold text-[#6E7C91] mb-2">Terminées</span>
          <div className="mt-auto">
            <h3 className="text-3xl font-extrabold text-emerald-600 leading-none">102</h3>
          </div>
        </div>

        <div className="bg-red-50/50 rounded-xl border border-red-100 p-4 flex flex-col shadow-sm">
          <span className="text-xs font-semibold text-[#6E7C91] mb-2">Urgences</span>
          <div className="flex items-center gap-1.5 mt-auto">
            <span className="text-2xl font-bold text-[#D14343] leading-none">*</span>
            <h3 className="text-3xl font-extrabold text-[#D14343] leading-none">4</h3>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-[#E3EDF7] p-4 flex flex-col shadow-sm">
          <span className="text-xs font-semibold text-[#6E7C91] mb-2">Annulées</span>
          <div className="mt-auto">
            <h3 className="text-3xl font-extrabold text-[#6E7C91] leading-none">2</h3>
          </div>
        </div>

      </div>

      {/* Main Content Split */}
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-6 w-full">
          
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3">
            <button className="flex items-center gap-2 bg-white border border-[#E3EDF7] text-[#475569] px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm">
              <Filter size={16} />
              Filtrer par Statut
            </button>
            <button className="flex items-center gap-2 bg-white border border-[#E3EDF7] text-[#475569] px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm">
              <Stethoscope size={16} />
              Type d'acte
            </button>
            <button className="flex items-center gap-2 bg-white border border-[#E3EDF7] text-[#475569] px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm">
              <Activity size={16} />
              Spécialité
            </button>
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl border border-[#E3EDF7] shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#E3EDF7]">
              <h2 className="text-[15px] font-bold text-[#0E1B2A]">Consultations Récentes</h2>
              <span className="text-xs font-medium text-[#6E7C91]">Mis à jour à 10:45</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F8FAFC] border-b border-[#E3EDF7]">
                    <th className="px-6 py-3 text-xs font-bold text-[#6E7C91] uppercase tracking-wider">Patient</th>
                    <th className="px-6 py-3 text-xs font-bold text-[#6E7C91] uppercase tracking-wider">Médecin</th>
                    <th className="px-6 py-3 text-xs font-bold text-[#6E7C91] uppercase tracking-wider">Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E3EDF7]">
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-[#0E1B2A]">Codjo</td>
                    <td className="px-6 py-4 text-sm text-[#6E7C91]">Dr. Hounkpatin</td>
                    <td className="px-6 py-4 text-sm text-[#6E7C91]">RDV</td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-[#0E1B2A]">Lawson</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#D14343]">Dr. Adjovi</td>
                    <td className="px-6 py-4 text-sm font-bold text-[#D14343] flex items-center gap-1.5">
                      <Zap size={14} fill="currentColor" /> Urgence
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-[#0E1B2A]">Dossou</td>
                    <td className="px-6 py-4 text-sm text-[#6E7C91]">Dr. Mensah</td>
                    <td className="px-6 py-4 text-sm text-[#6E7C91]">Walk-in</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Dernière Activité */}
          <div className="bg-white rounded-xl border border-[#E3EDF7] shadow-sm overflow-hidden p-6">
            <h2 className="text-[15px] font-bold text-[#0E1B2A] mb-6">Dernière Activité</h2>
            
            <div className="relative border-l-2 border-[#E3EDF7] ml-3 space-y-6 pb-2">
              
              <div className="relative pl-6">
                <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-[#0E1B2A]">Consultation C-001 terminée par Dr. Hounkpatin</h4>
                  <p className="text-xs text-[#6E7C91] mt-1">il y a 5 minutes</p>
                </div>
              </div>

              <div className="relative pl-6">
                <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-[#0053CD]">
                  <FileText size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-[#0E1B2A]">Diagnostic I10 (Hypertension essentielle) posé pour A. Codjo</h4>
                  <p className="text-xs text-[#6E7C91] mt-1">il y a 12 minutes</p>
                </div>
              </div>

              <div className="relative pl-6">
                <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#475569]">
                  <FileText size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-[#0E1B2A]">
                    Ordonnance générée : <a href="#" className="text-[#0053CD] hover:underline">Amlodipine 5mg</a>
                  </h4>
                  <p className="text-xs text-[#6E7C91] mt-1">il y a 15 minutes</p>
                </div>
              </div>

              <div className="relative pl-6">
                <div className="absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-[#475569]">
                  <MoreVertical size={16} />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-sm font-medium text-[#0E1B2A]">Nouveau document : ECG_150524.pdf ajouté</h4>
                    <p className="text-xs text-[#6E7C91] mt-1">il y a 20 minutes</p>
                  </div>
                  <a href="#" className="text-sm font-semibold text-[#0053CD] hover:underline">Visualiser</a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Right Sidebar */}
        <div className="w-full lg:w-[340px] flex flex-col gap-6 shrink-0">
          
          {/* Priorités & Alertes */}
          <div className="bg-white rounded-xl border border-red-100 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-red-100 bg-red-50/30 flex items-center gap-2">
              <AlertTriangle size={18} className="text-[#D14343]" />
              <h2 className="text-[15px] font-bold text-[#D14343]">Priorités & Alertes</h2>
            </div>
            
            <div className="p-4 space-y-3">
              <div className="bg-red-50/50 border-l-4 border-[#D14343] p-3 rounded-r-lg">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] font-bold text-[#D14343] uppercase tracking-wider">Alerte Urgence</span>
                  <span className="text-[10px] font-bold text-[#D14343] uppercase">Immédiat</span>
                </div>
                <h4 className="text-sm font-bold text-[#0E1B2A] mb-1">Dossier C-002 - M. Lawson</h4>
                <p className="text-xs text-[#6E7C91] leading-relaxed">Suspicion SCA - Attente<br/>confirmation biologie</p>
              </div>

              <div className="bg-blue-50/50 border-l-4 border-[#0053CD] p-3 rounded-r-lg">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-[10px] font-bold text-[#0053CD] uppercase tracking-wider">Suivi Critique</span>
                </div>
                <h4 className="text-sm font-bold text-[#0E1B2A] mb-1">A. Codjo - Hypertension Grade 3</h4>
                <p className="text-xs text-[#6E7C91] leading-relaxed">Vérifier observance traitement<br/>Amlodipine</p>
              </div>
            </div>
          </div>

          {/* Actions Rapides */}
          <div className="bg-white rounded-xl border border-[#E3EDF7] shadow-sm p-5">
            <h2 className="text-[15px] font-bold text-[#0E1B2A] mb-4">Actions Rapides</h2>
            
            <div className="flex flex-col gap-2.5">
              <button className="flex items-center gap-3 w-full bg-[#0053CD] text-white px-4 py-3 rounded-lg text-sm font-medium hover:bg-[#0046b3] transition-colors shadow-sm">
                <Plus size={18} />
                Nouvelle consultation
              </button>
              
              <button className="flex items-center gap-3 w-full bg-white border border-[#E3EDF7] text-[#475569] px-4 py-3 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                <Eye size={18} />
                Voir tous les détails
              </button>
              
              <button className="flex items-center gap-3 w-full bg-white border border-[#E3EDF7] text-[#475569] px-4 py-3 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                <BarChart2 size={18} />
                Générer rapport mensuel
              </button>
              
              <button className="flex items-center gap-3 w-full bg-white border border-[#E3EDF7] text-[#475569] px-4 py-3 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                <Key size={18} />
                Demander accès dossier
              </button>
              
              <button className="flex items-center gap-3 w-full bg-white border border-[#E3EDF7] text-[#475569] px-4 py-3 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                <Share2 size={18} />
                Transférer cas spécialisé
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
