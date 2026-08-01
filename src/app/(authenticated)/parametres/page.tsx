import React from 'react';
import { 
  User, 
  BriefcaseMedical, 
  Bell, 
  ShieldCheck, 
  PenTool, 
  Lock, 
  Settings2, 
  Edit3,
  Moon,
  Sun,
  Type,
  FileSignature
} from 'lucide-react';
import Image from 'next/image';

export default function ParametresPage() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-6 pb-10">
      
      {/* Top Section - Profile & Stats */}
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Profile Card */}
        <div className="bg-white rounded-xl border border-[#E3EDF7] p-5 flex items-center gap-5 w-full lg:w-[350px] shrink-0 shadow-sm">
          <div className="relative">
            <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-200 border-2 border-white shadow-sm">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix&backgroundColor=e2e8f0" 
                alt="Doctor Profile" 
                className="w-full h-full object-cover"
              />
            </div>
            <button className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full bg-[#0053CD] text-white flex items-center justify-center border-2 border-white shadow-sm hover:bg-[#0046b3]">
              <Edit3 size={12} />
            </button>
          </div>
          <div>
            <h2 className="text-[17px] font-bold text-[#0E1B2A] leading-tight">Dr. Hounkpatin</h2>
            <p className="text-xs text-[#6E7C91] mb-2 font-medium">NPI: 209875821</p>
            <div className="flex gap-2">
              <span className="px-2 py-0.5 bg-blue-50 text-[#0053CD] text-[10px] font-bold rounded-full border border-blue-100">
                Cardiologie
              </span>
              <span className="px-2 py-0.5 bg-blue-50 text-[#0053CD] text-[10px] font-bold rounded-full border border-blue-100">
                Santé Publique
              </span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-xl border border-[#E3EDF7] p-4 flex flex-col justify-center shadow-sm">
            <span className="text-xs font-semibold text-[#6E7C91] mb-1 flex items-center gap-1.5">
              <BriefcaseMedical size={14} /> Consultations
            </span>
            <h3 className="text-2xl font-extrabold text-[#0E1B2A]">542</h3>
          </div>
          <div className="bg-white rounded-xl border border-[#E3EDF7] p-4 flex flex-col justify-center shadow-sm">
            <span className="text-xs font-semibold text-[#6E7C91] mb-1 flex items-center gap-1.5">
              <User size={14} /> Patients Suivis
            </span>
            <h3 className="text-2xl font-extrabold text-[#0E1B2A]">213</h3>
          </div>
          <div className="bg-white rounded-xl border border-[#E3EDF7] p-4 flex flex-col justify-center shadow-sm">
            <span className="text-xs font-semibold text-[#6E7C91] mb-1 flex items-center gap-1.5">
              <FileSignature size={14} /> Ordonnances
            </span>
            <h3 className="text-2xl font-extrabold text-[#0E1B2A]">498</h3>
          </div>
          <div className="bg-white rounded-xl border border-[#E3EDF7] p-4 flex flex-col justify-center shadow-sm">
            <span className="text-xs font-semibold text-[#6E7C91] mb-1 flex items-center gap-1.5">
              <ShieldCheck size={14} /> Diagnostics
            </span>
            <h3 className="text-2xl font-extrabold text-[#0E1B2A]">601</h3>
          </div>
        </div>

      </div>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Left Column (2/3 width) */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          
          {/* Informations Personnelles */}
          <div className="bg-white rounded-xl border border-[#E3EDF7] shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-[#E3EDF7] flex items-center gap-2 bg-[#F8FAFC]">
              <User size={18} className="text-[#0053CD]" />
              <h2 className="text-[15px] font-bold text-[#0E1B2A]">Informations Personnelles</h2>
            </div>
            <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-5">
              
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#6E7C91]">Téléphone Professionnel</label>
                <input 
                  type="text" 
                  defaultValue="+229 97 80 80 80"
                  className="w-full rounded-lg border border-[#E3EDF7] bg-[#FAFCFF] px-3 py-2 text-sm text-[#0E1B2A] focus:border-[#0053CD] focus:outline-none focus:ring-1 focus:ring-[#0053CD]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#6E7C91]">Email Professionnel</label>
                <input 
                  type="email" 
                  defaultValue="hounkpatin.r@saintluc.bj"
                  className="w-full rounded-lg border border-[#E3EDF7] bg-[#FAFCFF] px-3 py-2 text-sm text-[#0E1B2A] focus:border-[#0053CD] focus:outline-none focus:ring-1 focus:ring-[#0053CD]"
                />
              </div>

              <div className="flex flex-col gap-1.5 md:col-span-2">
                <label className="text-xs font-bold text-[#6E7C91]">Adresse Cabinet</label>
                <input 
                  type="text" 
                  defaultValue="Avenue de la Paix, Cotonou, Bénin"
                  className="w-full rounded-lg border border-[#E3EDF7] bg-[#FAFCFF] px-3 py-2 text-sm text-[#0E1B2A] focus:border-[#0053CD] focus:outline-none focus:ring-1 focus:ring-[#0053CD]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#6E7C91]">Langue</label>
                <select className="w-full rounded-lg border border-[#E3EDF7] bg-[#FAFCFF] px-3 py-2 text-sm text-[#0E1B2A] focus:border-[#0053CD] focus:outline-none focus:ring-1 focus:ring-[#0053CD] appearance-none">
                  <option>Français</option>
                  <option>Anglais</option>
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#6E7C91]">Fuseau Horaire</label>
                <select className="w-full rounded-lg border border-[#E3EDF7] bg-[#FAFCFF] px-3 py-2 text-sm text-[#0E1B2A] focus:border-[#0053CD] focus:outline-none focus:ring-1 focus:ring-[#0053CD] appearance-none">
                  <option>(GMT+01:00) West Central Africa</option>
                </select>
              </div>

            </div>
          </div>

          {/* Gestion Professionnelle */}
          <div className="bg-white rounded-xl border border-[#E3EDF7] shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-[#E3EDF7] flex items-center gap-2 bg-[#F8FAFC]">
              <BriefcaseMedical size={18} className="text-[#0053CD]" />
              <h2 className="text-[15px] font-bold text-[#0E1B2A]">Gestion Professionnelle</h2>
            </div>
            <div className="p-5 flex flex-col gap-6">
              
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-[#6E7C91]">Spécialité Principale</label>
                <input 
                  type="text" 
                  defaultValue="Médecine Générale"
                  className="w-full rounded-lg border border-[#E3EDF7] bg-[#FAFCFF] px-3 py-2 text-sm text-[#0E1B2A] focus:border-[#0053CD] focus:outline-none focus:ring-1 focus:ring-[#0053CD]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#6E7C91] block mb-3">Spécialités Additionnelles</label>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-[#0053CD] rounded border-[#E3EDF7] focus:ring-[#0053CD]" />
                    <span className="text-sm font-medium text-[#0E1B2A]">Cardiologie</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-[#0053CD] rounded border-[#E3EDF7] focus:ring-[#0053CD]" />
                    <span className="text-sm font-medium text-[#0E1B2A]">Urgences</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-[#0053CD] rounded border-[#E3EDF7] focus:ring-[#0053CD]" />
                    <span className="text-sm font-medium text-[#0E1B2A]">Réanimation</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-[#0053CD] rounded border-[#E3EDF7] focus:ring-[#0053CD]" />
                    <span className="text-sm font-medium text-[#0E1B2A]">Pédiatrie</span>
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                <div>
                  <label className="text-xs font-bold text-[#6E7C91] block mb-2">Jours de consultation</label>
                  <div className="flex gap-1.5">
                    {['L', 'M', 'M', 'J', 'V'].map(day => (
                      <div key={day} className="w-8 h-8 rounded-lg bg-[#0053CD] text-white flex items-center justify-center text-xs font-bold shadow-sm cursor-pointer hover:bg-[#0046b3]">
                        {day}
                      </div>
                    ))}
                    {['S', 'D'].map(day => (
                      <div key={day} className="w-8 h-8 rounded-lg bg-white border border-[#E3EDF7] text-[#6E7C91] flex items-center justify-center text-xs font-bold shadow-sm cursor-pointer hover:bg-gray-50">
                        {day}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#6E7C91] block mb-2">Horaires de Garde</label>
                  <div className="flex items-center gap-3">
                    <input type="time" defaultValue="08:00" className="w-full rounded-lg border border-[#E3EDF7] bg-[#FAFCFF] px-3 py-1.5 text-sm font-medium text-[#0E1B2A] focus:border-[#0053CD] focus:outline-none focus:ring-1 focus:ring-[#0053CD]" />
                    <span className="text-[#6E7C91] font-bold text-sm">-</span>
                    <input type="time" defaultValue="17:00" className="w-full rounded-lg border border-[#E3EDF7] bg-[#FAFCFF] px-3 py-1.5 text-sm font-medium text-[#0E1B2A] focus:border-[#0053CD] focus:outline-none focus:ring-1 focus:ring-[#0053CD]" />
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-xl border border-[#E3EDF7] shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-[#E3EDF7] flex items-center gap-2 bg-[#F8FAFC]">
              <Bell size={18} className="text-[#0053CD]" />
              <h2 className="text-[15px] font-bold text-[#0E1B2A]">Notifications</h2>
            </div>
            <div className="p-0 overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-white">
                  <tr>
                    <th className="px-5 py-3 text-[11px] font-bold text-[#6E7C91] uppercase tracking-wider">Type</th>
                    <th className="px-5 py-3 text-[11px] font-bold text-[#6E7C91] uppercase tracking-wider text-center">App</th>
                    <th className="px-5 py-3 text-[11px] font-bold text-[#6E7C91] uppercase tracking-wider text-center">SMS</th>
                    <th className="px-5 py-3 text-[11px] font-bold text-[#6E7C91] uppercase tracking-wider text-center">Email</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E3EDF7]">
                  <tr>
                    <td className="px-5 py-3 text-sm font-medium text-[#0E1B2A]">Nouveau Patient</td>
                    <td className="px-5 py-3 text-center"><input type="checkbox" defaultChecked className="w-4 h-4 text-[#0053CD] rounded border-[#E3EDF7]" /></td>
                    <td className="px-5 py-3 text-center"><input type="checkbox" defaultChecked className="w-4 h-4 text-[#0053CD] rounded border-[#E3EDF7]" /></td>
                    <td className="px-5 py-3 text-center"><input type="checkbox" className="w-4 h-4 text-[#0053CD] rounded border-[#E3EDF7]" /></td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3 text-sm font-medium text-[#0E1B2A]">Résultats d'Analyses</td>
                    <td className="px-5 py-3 text-center"><input type="checkbox" defaultChecked className="w-4 h-4 text-[#0053CD] rounded border-[#E3EDF7]" /></td>
                    <td className="px-5 py-3 text-center"><input type="checkbox" className="w-4 h-4 text-[#0053CD] rounded border-[#E3EDF7]" /></td>
                    <td className="px-5 py-3 text-center"><input type="checkbox" defaultChecked className="w-4 h-4 text-[#0053CD] rounded border-[#E3EDF7]" /></td>
                  </tr>
                  <tr>
                    <td className="px-5 py-3 text-sm font-medium text-[#0E1B2A]">Demande d'Accès Dossier</td>
                    <td className="px-5 py-3 text-center"><input type="checkbox" defaultChecked className="w-4 h-4 text-[#0053CD] rounded border-[#E3EDF7]" /></td>
                    <td className="px-5 py-3 text-center"><input type="checkbox" defaultChecked className="w-4 h-4 text-[#0053CD] rounded border-[#E3EDF7]" /></td>
                    <td className="px-5 py-3 text-center"><input type="checkbox" defaultChecked className="w-4 h-4 text-[#0053CD] rounded border-[#E3EDF7]" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </div>

        {/* Right Column (1/3 width) */}
        <div className="flex flex-col gap-6">
          
          {/* Sécurité */}
          <div className="bg-white rounded-xl border border-[#E3EDF7] shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-[#E3EDF7] flex items-center gap-2 bg-[#F8FAFC]">
              <ShieldCheck size={18} className="text-[#0053CD]" />
              <h2 className="text-[15px] font-bold text-[#0E1B2A]">Sécurité</h2>
            </div>
            <div className="p-5 flex flex-col gap-5">
              
              <div className="bg-[#F0FDF4] border border-[#DCFCE7] rounded-lg p-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-emerald-700" />
                  <span className="text-sm font-bold text-emerald-800">2FA Actif</span>
                </div>
                <button className="text-[11px] font-bold text-emerald-700 bg-emerald-100 hover:bg-emerald-200 px-2.5 py-1 rounded-md transition-colors">
                  Désactiver
                </button>
              </div>

              <div className="flex flex-col gap-3">
                <input 
                  type="password" 
                  placeholder="Ancien mot de passe"
                  className="w-full rounded-lg border border-[#E3EDF7] bg-[#FAFCFF] px-3 py-2 text-sm placeholder:text-[#94A3B8] text-[#0E1B2A] focus:border-[#0053CD] focus:outline-none focus:ring-1 focus:ring-[#0053CD]"
                />
                <input 
                  type="password" 
                  placeholder="Nouveau mot de passe"
                  className="w-full rounded-lg border border-[#E3EDF7] bg-[#FAFCFF] px-3 py-2 text-sm placeholder:text-[#94A3B8] text-[#0E1B2A] focus:border-[#0053CD] focus:outline-none focus:ring-1 focus:ring-[#0053CD]"
                />
                <button className="w-full bg-[#EBF3FF] text-[#0053CD] hover:bg-[#D6E6FF] font-bold text-sm py-2 rounded-lg transition-colors mt-1">
                  Changer le mot de passe
                </button>
              </div>

              <div className="text-[10px] text-[#6E7C91] mt-2 border-t border-[#E3EDF7] pt-4">
                Dernière connexion: aujourd'hui, 08:15 <br/>
                IP: 197.234.207.64
              </div>

            </div>
          </div>

          {/* Signature & Sceau */}
          <div className="bg-white rounded-xl border border-[#E3EDF7] shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-[#E3EDF7] flex items-center gap-2 bg-[#F8FAFC]">
              <PenTool size={18} className="text-[#0053CD]" />
              <h2 className="text-[15px] font-bold text-[#0E1B2A]">Signature & Sceau</h2>
            </div>
            <div className="p-5 flex flex-col gap-4">
              
              <div className="w-full h-28 bg-[#FAFCFF] border-2 border-dashed border-[#CBD5E1] rounded-lg flex flex-col items-center justify-center p-4">
                <span className="font-['Brush_Script_MT',_cursive] text-3xl text-[#0E1B2A] opacity-70">Dr Hounkpatin</span>
                <span className="text-[10px] text-[#94A3B8] font-bold mt-2 uppercase tracking-wider">Sceau numérique valide</span>
              </div>

              <button className="flex items-center justify-center gap-2 w-full bg-white border border-[#E3EDF7] text-[#0053CD] hover:bg-gray-50 font-bold text-sm py-2 rounded-lg transition-colors">
                <FileSignature size={16} />
                Mettre à jour la signature
              </button>

            </div>
          </div>

          {/* Confidentialité */}
          <div className="bg-white rounded-xl border border-[#E3EDF7] shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-[#E3EDF7] flex items-center gap-2 bg-[#F8FAFC]">
              <Lock size={18} className="text-[#0053CD]" />
              <h2 className="text-[15px] font-bold text-[#0E1B2A]">Confidentialité</h2>
            </div>
            <div className="p-5 flex flex-col gap-4">
              
              <div className="flex gap-3">
                <div className="flex-1 bg-[#F0FDF4] rounded-lg p-2.5 text-center border border-[#DCFCE7]">
                  <h4 className="text-[11px] font-bold text-emerald-800 mb-0.5">RGPD</h4>
                  <p className="text-[10px] text-emerald-600 font-semibold">Compliant</p>
                </div>
                <div className="flex-1 bg-[#F0FDF4] rounded-lg p-2.5 text-center border border-[#DCFCE7]">
                  <h4 className="text-[11px] font-bold text-emerald-800 mb-0.5">HDS</h4>
                  <p className="text-[10px] text-emerald-600 font-semibold">Compliant</p>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 mt-2">
                <label className="text-xs font-bold text-[#6E7C91]">Durée archivage par défaut</label>
                <select className="w-full rounded-lg border border-[#E3EDF7] bg-[#FAFCFF] px-3 py-2 text-sm font-medium text-[#0E1B2A] focus:border-[#0053CD] focus:outline-none focus:ring-1 focus:ring-[#0053CD] appearance-none">
                  <option>7 Ans (Standard)</option>
                  <option>10 Ans (Étendu)</option>
                </select>
              </div>

            </div>
          </div>

          {/* Réglages Avancés */}
          <div className="bg-white rounded-xl border border-[#E3EDF7] shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-[#E3EDF7] flex items-center gap-2 bg-[#F8FAFC]">
              <Settings2 size={18} className="text-[#0053CD]" />
              <h2 className="text-[15px] font-bold text-[#0E1B2A]">Réglages Avancés</h2>
            </div>
            <div className="p-5 flex flex-col gap-5">
              
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-[#0E1B2A]">Thème Visuel</h4>
                  <p className="text-[10px] text-[#6E7C91]">Alterner entre mode clair et sombre</p>
                </div>
                <div className="flex bg-[#F1F5F9] rounded-lg p-0.5 border border-[#E2E8F0]">
                  <button className="p-1.5 rounded-md bg-white text-[#0053CD] shadow-sm">
                    <Sun size={14} />
                  </button>
                  <button className="p-1.5 rounded-md text-[#94A3B8] hover:text-[#475569]">
                    <Moon size={14} />
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 border-t border-[#E3EDF7] pt-4">
                <div>
                  <h4 className="text-sm font-bold text-[#0E1B2A]">Taille de Police</h4>
                  <p className="text-[10px] text-[#6E7C91]">Ajuster pour le confort de lecture</p>
                </div>
                <div className="flex items-center gap-2 flex-1 max-w-[100px]">
                  <Type size={12} className="text-[#94A3B8]" />
                  <div className="h-1.5 flex-1 bg-[#E2E8F0] rounded-full relative">
                    <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-[#0053CD] rounded-full"></div>
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-[#0053CD] rounded-full"></div>
                  </div>
                  <Type size={16} className="text-[#0053CD]" />
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-[#E3EDF7] pt-4">
                <div>
                  <h4 className="text-sm font-bold text-[#0E1B2A]">Mode Dashboard</h4>
                  <p className="text-[10px] text-[#6E7C91]">Vue simplifiée ou détaillée</p>
                </div>
                <select className="rounded-lg border border-[#E3EDF7] bg-[#FAFCFF] px-2 py-1 text-xs font-bold text-[#0E1B2A] focus:border-[#0053CD] focus:outline-none appearance-none cursor-pointer">
                  <option>Détaillé</option>
                  <option>Simplifié</option>
                </select>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
