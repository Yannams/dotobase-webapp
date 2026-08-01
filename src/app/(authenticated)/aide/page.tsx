import React from 'react';
import { 
  ClipboardList, 
  FolderOpen, 
  Pill, 
  Microscope, 
  FileText, 
  ShieldCheck, 
  Share2, 
  Settings,
  ChevronDown,
  PhoneCall,
  Mail,
  MessageSquare,
  BookOpen,
  PlayCircle
} from 'lucide-react';

export default function AidePage() {
  return (
    <div className="max-w-6xl mx-auto flex flex-col gap-8 pb-10">
      
      {/* Top Banner */}
      <div className="bg-[#EEF2FF] rounded-2xl p-10 flex flex-col items-center justify-center text-center relative overflow-hidden border border-[#E0E7FF]">
        {/* Decorative background element simulating the faint circle in the design */}
        <div className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-[#E0E7FF]/50 border-[20px] border-white/40"></div>
        
        <h1 className="text-3xl font-extrabold text-[#1E3A8A] mb-3 relative z-10">
          Comment pouvons-nous vous aider, Dr. Hounkpatin ?
        </h1>
        <p className="text-[#475569] text-[15px] max-w-2xl relative z-10">
          Trouvez des tutoriels, des guides et des réponses directes pour optimiser votre pratique quotidienne sur le portail.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Left Column - Main Content */}
        <div className="flex-1 w-full flex flex-col gap-8">
          
          {/* Rubriques d'aide */}
          <div>
            <h2 className="text-[17px] font-bold text-[#0E1B2A] mb-4">Rubriques d'aide</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              
              {/* Card 1 */}
              <div className="bg-white rounded-xl border border-[#E3EDF7] p-5 hover:border-[#0053CD] hover:shadow-sm transition-all cursor-pointer">
                <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-[#0053CD] mb-4">
                  <ClipboardList size={18} />
                </div>
                <h3 className="text-sm font-bold text-[#0E1B2A] mb-1.5">Consultations</h3>
                <p className="text-xs text-[#6E7C91] leading-relaxed">Gérer vos rendez-vous, notes de séances et historique.</p>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl border border-[#E3EDF7] p-5 hover:border-[#0053CD] hover:shadow-sm transition-all cursor-pointer">
                <div className="w-9 h-9 rounded-lg bg-gray-50 flex items-center justify-center text-[#475569] mb-4">
                  <FolderOpen size={18} />
                </div>
                <h3 className="text-sm font-bold text-[#0E1B2A] mb-1.5">Dossiers patients</h3>
                <p className="text-xs text-[#6E7C91] leading-relaxed">Accès sécurisé, archivage et mise à jour des données.</p>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl border border-[#E3EDF7] p-5 hover:border-[#0053CD] hover:shadow-sm transition-all cursor-pointer">
                <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4">
                  <Pill size={18} />
                </div>
                <h3 className="text-sm font-bold text-[#0E1B2A] mb-1.5">Traitements</h3>
                <p className="text-xs text-[#6E7C91] leading-relaxed">Gestion des ordonnances et suivis thérapeutiques.</p>
              </div>

              {/* Card 4 */}
              <div className="bg-white rounded-xl border border-[#E3EDF7] p-5 hover:border-[#0053CD] hover:shadow-sm transition-all cursor-pointer">
                <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-[#0053CD] mb-4">
                  <Microscope size={18} />
                </div>
                <h3 className="text-sm font-bold text-[#0E1B2A] mb-1.5">Diagnostics</h3>
                <p className="text-xs text-[#6E7C91] leading-relaxed">Interprétation des résultats et outils d'aide au diagnostic.</p>
              </div>

              {/* Card 5 */}
              <div className="bg-white rounded-xl border border-[#E3EDF7] p-5 hover:border-[#0053CD] hover:shadow-sm transition-all cursor-pointer">
                <div className="w-9 h-9 rounded-lg bg-gray-50 flex items-center justify-center text-[#475569] mb-4">
                  <FileText size={18} />
                </div>
                <h3 className="text-sm font-bold text-[#0E1B2A] mb-1.5">Documents</h3>
                <p className="text-xs text-[#6E7C91] leading-relaxed">Modèles officiels, signatures et exports PDF.</p>
              </div>

              {/* Card 6 */}
              <div className="bg-white rounded-xl border border-[#E3EDF7] p-5 hover:border-[#0053CD] hover:shadow-sm transition-all cursor-pointer">
                <div className="w-9 h-9 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4">
                  <ShieldCheck size={18} />
                </div>
                <h3 className="text-sm font-bold text-[#0E1B2A] mb-1.5">Consentement</h3>
                <p className="text-xs text-[#6E7C91] leading-relaxed">Protocoles RGPD et signatures numériques éclairées.</p>
              </div>

              {/* Card 7 */}
              <div className="bg-white rounded-xl border border-[#E3EDF7] p-5 hover:border-[#0053CD] hover:shadow-sm transition-all cursor-pointer">
                <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center text-red-500 mb-4">
                  <Share2 size={18} />
                </div>
                <h3 className="text-sm font-bold text-[#0E1B2A] mb-1.5">Transfert</h3>
                <p className="text-xs text-[#6E7C91] leading-relaxed">Partage sécurisé de dossiers entre confrères.</p>
              </div>

              {/* Card 8 */}
              <div className="bg-white rounded-xl border border-[#E3EDF7] p-5 hover:border-[#0053CD] hover:shadow-sm transition-all cursor-pointer">
                <div className="w-9 h-9 rounded-lg bg-gray-50 flex items-center justify-center text-[#475569] mb-4">
                  <Settings size={18} />
                </div>
                <h3 className="text-sm font-bold text-[#0E1B2A] mb-1.5">Paramètres</h3>
                <p className="text-xs text-[#6E7C91] leading-relaxed">Configuration de votre profil et de vos préférences.</p>
              </div>

            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="text-[17px] font-bold text-[#0E1B2A] mb-4">Questions Fréquentes (FAQ)</h2>
            <div className="flex flex-col gap-2.5">
              
              <div className="bg-white border border-[#E3EDF7] rounded-xl px-5 py-4 flex items-center justify-between cursor-pointer hover:border-[#CBD5E1] transition-colors">
                <span className="text-[14px] font-bold text-[#0E1B2A]">Comment activer la double authentification ?</span>
                <ChevronDown size={18} className="text-[#6E7C91]" />
              </div>

              <div className="bg-white border border-[#E3EDF7] rounded-xl px-5 py-4 flex items-center justify-between cursor-pointer hover:border-[#CBD5E1] transition-colors">
                <span className="text-[14px] font-bold text-[#0E1B2A]">Puis-je exporter l'historique complet d'un patient ?</span>
                <ChevronDown size={18} className="text-[#6E7C91]" />
              </div>

              <div className="bg-white border border-[#E3EDF7] rounded-xl px-5 py-4 flex items-center justify-between cursor-pointer hover:border-[#CBD5E1] transition-colors">
                <span className="text-[14px] font-bold text-[#0E1B2A]">Que faire en cas de document corrompu ?</span>
                <ChevronDown size={18} className="text-[#6E7C91]" />
              </div>

              <div className="bg-white border border-[#E3EDF7] rounded-xl px-5 py-4 flex items-center justify-between cursor-pointer hover:border-[#CBD5E1] transition-colors">
                <span className="text-[14px] font-bold text-[#0E1B2A]">Comment partager une consultation avec un confrère ?</span>
                <ChevronDown size={18} className="text-[#6E7C91]" />
              </div>

              <div className="bg-white border border-[#E3EDF7] rounded-xl px-5 py-4 flex items-center justify-between cursor-pointer hover:border-[#CBD5E1] transition-colors">
                <span className="text-[14px] font-bold text-[#0E1B2A]">Le système est-il conforme HDS ?</span>
                <ChevronDown size={18} className="text-[#6E7C91]" />
              </div>

            </div>
          </div>

        </div>

        {/* Right Column - Sidebar */}
        <div className="w-full lg:w-[320px] flex flex-col gap-6 shrink-0">
          
          {/* Support Technique Live */}
          <div className="bg-[#2A2D34] rounded-xl p-6 text-white shadow-md">
            <div className="flex items-center gap-2 text-[11px] font-bold tracking-widest text-emerald-400 uppercase mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Support technique live
            </div>
            
            <h3 className="text-lg font-bold mb-6 pr-4">Besoin d'aide immédiate ?</h3>
            
            <div className="flex flex-col gap-5 mb-6">
              <div className="flex items-start gap-3">
                <PhoneCall size={20} className="text-gray-400 mt-0.5" />
                <div>
                  <p className="text-[11px] text-gray-400 uppercase font-semibold">Téléphone direct</p>
                  <p className="text-[15px] font-medium">+229 21 00 00 00</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-gray-400 mt-0.5" />
                <div>
                  <p className="text-[11px] text-gray-400 uppercase font-semibold">Email support</p>
                  <p className="text-[15px] font-medium">support@csi.bj</p>
                </div>
              </div>
            </div>

            <div className="w-full bg-white/10 rounded-lg py-2.5 text-center text-sm font-semibold text-gray-300">
              Disponibilité : 24/7
            </div>
          </div>

          {/* Actions d'assistance rapide */}
          <div>
            <h2 className="text-[12px] font-bold text-[#6E7C91] uppercase tracking-wider mb-3">Actions d'assistance rapide</h2>
            <div className="flex flex-col gap-2.5">
              
              <button className="w-full flex items-center gap-3 bg-[#F1F5F9] text-[#0E1B2A] px-4 py-3 rounded-lg text-sm font-semibold hover:bg-[#E2E8F0] transition-colors border border-transparent">
                <MessageSquare size={18} className="text-[#0053CD]" />
                Chat assistance
              </button>

              <button className="w-full flex items-center gap-3 bg-[#F1F5F9] text-[#0E1B2A] px-4 py-3 rounded-lg text-sm font-semibold hover:bg-[#E2E8F0] transition-colors border border-transparent">
                <BookOpen size={18} className="text-[#0053CD]" />
                Guide utilisateur
              </button>

              <button className="w-full flex items-center gap-3 bg-[#F1F5F9] text-[#0E1B2A] px-4 py-3 rounded-lg text-sm font-semibold hover:bg-[#E2E8F0] transition-colors border border-transparent">
                <PlayCircle size={18} className="text-[#0053CD]" />
                Tutoriel vidéo
              </button>

            </div>
          </div>

          {/* Sécurité & Confidentialité */}
          <div className="bg-[#F0FDF4] border border-[#DCFCE7] rounded-xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck size={18} className="text-emerald-700" />
              <h3 className="text-sm font-bold text-emerald-800">Sécurité & Confidentialité</h3>
            </div>
            <p className="text-[12px] text-emerald-700 leading-relaxed">
              Vos données sont chiffrées de bout en bout et conformes aux normes internationales de santé.
            </p>
          </div>

        </div>

      </div>

      {/* Bottom Banners */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
        
        {/* Banner 1 */}
        <div className="relative h-40 rounded-xl overflow-hidden group cursor-pointer shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-slate-900"></div>
          {/* Faux image background using subtle patterns/gradients */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400 via-blue-900 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          
          <div className="absolute bottom-4 left-5">
            <h3 className="text-white text-sm font-bold tracking-wide group-hover:underline">Explorer la base de connaissances avancée</h3>
          </div>
        </div>

        {/* Banner 2 */}
        <div className="relative h-40 rounded-xl overflow-hidden group cursor-pointer shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-emerald-900"></div>
          {/* Faux image background using subtle patterns/gradients */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-400 via-emerald-900 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          
          <div className="absolute bottom-4 left-5">
            <h3 className="text-white text-sm font-bold tracking-wide group-hover:underline">Dernières mises à jour du système v4.2</h3>
          </div>
        </div>

      </div>

    </div>
  );
}
