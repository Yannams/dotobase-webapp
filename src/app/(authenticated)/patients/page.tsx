'use client';

import React, { useState, useEffect } from 'react';
import { 
  Users, 
  CheckCircle2, 
  AlertTriangle, 
  UserPlus, 
  Stethoscope, 
  Search, 
  ChevronDown, 
  Eye,
  ChevronLeft,
  ChevronRight,
  Plus,
  X,
  Fingerprint,
  IdCard,
  Info,
  MoreHorizontal,
  ShieldCheck,
  Smartphone,
  Clock,
  Lock,
  User,
  Shield
} from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function PatientsPage() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'npi' | 'fingerprint'>('npi');
  const [searchStatus, setSearchStatus] = useState<'idle' | 'waiting' | 'success'>('idle');

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (searchStatus === 'waiting') {
      // Simulate waiting for patient authorization
      timeout = setTimeout(() => {
        setSearchStatus('success');
      }, 3000);
    }
    return () => clearTimeout(timeout);
  }, [searchStatus]);

  return (
    <div className="max-w-7xl mx-auto flex flex-col gap-6 pb-10">
      
      {/* Page Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-[#0F172A] tracking-tight">Mes Patients</h1>
          <p className="text-sm text-gray-500 mt-1">Gérez et suivez les données de vos patients</p>
        </div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="bg-[#00A1C9] hover:bg-[#008BB0] text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-colors"
        >
          <Plus size={18} />
          Ajouter un patient
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#00A1C9] flex items-center justify-center">
              <Users size={20} strokeWidth={2} />
            </div>
            <span className="text-[10px] font-bold text-gray-500 bg-gray-50 px-2 py-0.5 rounded">+2%</span>
          </div>
          <div className="mt-4">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">TOTAL PATIENTS</p>
            <h3 className="text-2xl font-bold text-gray-900 leading-none">120</h3>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-500 flex items-center justify-center">
              <CheckCircle2 size={20} strokeWidth={2} />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">ACTIFS</p>
            <h3 className="text-2xl font-bold text-gray-900 leading-none">98</h3>
          </div>
        </div>

        {/* Card 3 (Red) */}
        <div className="bg-[#FFEBEB] rounded-xl shadow-sm border border-[#FFD6D6] p-4 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="w-10 h-10 rounded-lg bg-[#D14343] text-white flex items-center justify-center">
              <AlertTriangle size={20} strokeWidth={2.5} />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-[10px] font-bold text-[#D14343] uppercase tracking-wider mb-1">URGENT</p>
            <h3 className="text-2xl font-bold text-[#D14343] leading-none">5</h3>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-500 flex items-center justify-center">
              <UserPlus size={20} strokeWidth={2} />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">NOUVEAUX (7J)</p>
            <h3 className="text-2xl font-bold text-gray-900 leading-none">12</h3>
          </div>
        </div>

        {/* Card 5 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-500 flex items-center justify-center">
              <Stethoscope size={20} strokeWidth={2} />
            </div>
          </div>
          <div className="mt-4">
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider mb-1">SOUS TRAITEMENT</p>
            <h3 className="text-2xl font-bold text-gray-900 leading-none">67</h3>
          </div>
        </div>

      </div>

      {/* Search and Filters */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col gap-4">
        {/* Search */}
        <div className="relative w-full">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Rechercher par nom, NPI, téléphone..." 
            className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#00A1C9] focus:ring-1 focus:ring-[#00A1C9]"
          />
        </div>
        
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2">
          {['Genre', 'Age', 'Groupe Sanguin', 'Statut', 'Dernière Visite'].map((filter, index) => (
            <button key={index} className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-semibold text-gray-600 hover:bg-gray-50 transition-colors">
              {filter}
              <ChevronDown size={14} className="text-gray-400" />
            </button>
          ))}
          <button className="px-3 py-1.5 text-xs font-semibold text-gray-500 hover:text-gray-800 transition-colors bg-gray-100 rounded-lg ml-auto">
            Effacer les filtres
          </button>
        </div>
      </div>

      {/* Patients Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <th className="py-3 px-4 text-[10px] font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap">PHOTO</th>
                <th className="py-3 px-4 text-[10px] font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap">NOM COMPLET</th>
                <th className="py-3 px-4 text-[10px] font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap">GENRE</th>
                <th className="py-3 px-4 text-[10px] font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap">AGE</th>
                <th className="py-3 px-4 text-[10px] font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap">GS</th>
                <th className="py-3 px-4 text-[10px] font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap">DERNIÈRE VISITE</th>
                <th className="py-3 px-4 text-[10px] font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap">MOTIF CONSULTATION</th>
                <th className="py-3 px-4 text-[10px] font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap">STATUT</th>
                <th className="py-3 px-4 text-[10px] font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap">MÉDECIN RÉFÉRENT</th>
                <th className="py-3 px-4 text-[10px] font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap">ALLERGIES</th>
                <th className="py-3 px-4 text-[10px] font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap">TRAITEMENTS</th>
                <th className="py-3 px-4 text-[10px] font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap">URGENCE</th>
                <th className="py-3 px-4 text-[10px] font-bold text-gray-500 uppercase tracking-wider whitespace-nowrap text-center">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              
              {/* Row 1 */}
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="py-3 px-4">
                  <div className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white shadow-sm overflow-hidden flex items-center justify-center text-blue-600 font-bold text-xs">
                    AC
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span className="text-sm font-semibold text-gray-900">A. Codjo</span>
                </td>
                <td className="py-3 px-4">
                  <span className="text-sm text-gray-600">M</span>
                </td>
                <td className="py-3 px-4">
                  <span className="text-sm text-gray-600">32</span>
                </td>
                <td className="py-3 px-4">
                  <span className="text-sm font-bold text-gray-900">O+</span>
                </td>
                <td className="py-3 px-4">
                  <span className="text-sm font-medium text-gray-900">Aujourd'hui</span>
                </td>
                <td className="py-3 px-4">
                  <span className="text-sm text-gray-600">Chest pain</span>
                </td>
                <td className="py-3 px-4">
                  <span className="inline-flex px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] font-bold rounded-full">Actif</span>
                </td>
                <td className="py-3 px-4">
                  <span className="text-sm font-medium text-[#00A1C9]">Dr. Hounkpatin</span>
                </td>
                <td className="py-3 px-4">
                  <span className="text-sm text-gray-500">None</span>
                </td>
                <td className="py-3 px-4">
                  <span className="text-sm font-medium text-gray-900">Yes (2)</span>
                </td>
                <td className="py-3 px-4">
                  <span className="text-sm font-medium text-gray-500">No</span>
                </td>
                <td className="py-3 px-4 text-center">
                  <button className="text-gray-400 hover:text-[#00A1C9] transition-colors p-1 bg-gray-50 rounded">
                    <Eye size={16} />
                  </button>
                </td>
              </tr>

              {/* Row 2 */}
              <tr className="hover:bg-gray-50/50 transition-colors">
                <td className="py-3 px-4">
                  <div className="w-8 h-8 rounded-full bg-purple-100 border-2 border-white shadow-sm overflow-hidden flex items-center justify-center text-purple-600 font-bold text-xs">
                    ML
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span className="text-sm font-semibold text-gray-900">M. Lawson</span>
                </td>
                <td className="py-3 px-4">
                  <span className="text-sm text-gray-600">F</span>
                </td>
                <td className="py-3 px-4">
                  <span className="text-sm text-gray-600">28</span>
                </td>
                <td className="py-3 px-4">
                  <span className="text-sm font-bold text-gray-900">A+</span>
                </td>
                <td className="py-3 px-4">
                  <span className="text-sm font-medium text-gray-900">12/05/2026</span>
                </td>
                <td className="py-3 px-4">
                  <span className="text-sm text-gray-600">Fever</span>
                </td>
                <td className="py-3 px-4">
                  <span className="inline-flex px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] font-bold rounded-full">Suivi</span>
                </td>
                <td className="py-3 px-4">
                  <span className="text-sm font-medium text-[#00A1C9]">Dr. Adjovi</span>
                </td>
                <td className="py-3 px-4">
                  <span className="text-sm font-semibold text-[#D14343]">Penicillin</span>
                </td>
                <td className="py-3 px-4">
                  <span className="text-sm font-medium text-gray-900">Yes (1)</span>
                </td>
                <td className="py-3 px-4">
                  <span className="inline-flex px-2 py-0.5 bg-[#D14343] text-white text-[10px] font-bold rounded">YES</span>
                </td>
                <td className="py-3 px-4 text-center">
                  <button className="text-gray-400 hover:text-[#00A1C9] transition-colors p-1 bg-gray-50 rounded">
                    <Eye size={16} />
                  </button>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="border-t border-gray-100 px-6 py-4 flex items-center justify-between">
          <span className="text-xs text-gray-500 font-medium">Affichage de 1-2 sur 120 patients</span>
          <div className="flex items-center gap-1">
            <button className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-gray-500 hover:bg-gray-50">
              <ChevronLeft size={14} />
            </button>
            <button className="w-7 h-7 flex items-center justify-center rounded bg-[#00A1C9] text-white font-medium text-xs">
              1
            </button>
            <button className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-gray-600 font-medium text-xs hover:bg-gray-50">
              2
            </button>
            <button className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-gray-600 font-medium text-xs hover:bg-gray-50">
              3
            </button>
            <button className="w-7 h-7 flex items-center justify-center rounded border border-gray-200 text-gray-500 hover:bg-gray-50">
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Layout Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Derniers Ajouts */}
        <div className="lg:col-span-1 bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <h2 className="text-sm font-bold text-gray-900 mb-4">Derniers Ajouts</h2>
          <div className="flex flex-col gap-3">
            
            <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors border border-transparent hover:border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                  BK
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">B. Kocou</p>
                  <p className="text-xs text-gray-500">Ajouté il y a 2h</p>
                </div>
              </div>
              <ChevronRight size={16} className="text-gray-400" />
            </div>

            <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors border border-transparent hover:border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs">
                  SD
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">S. Dossou</p>
                  <p className="text-xs text-gray-500">Ajouté il y a 5h</p>
                </div>
              </div>
              <ChevronRight size={16} className="text-gray-400" />
            </div>

          </div>
        </div>

        {/* Notes de Suivi Récentes */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-5">
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-sm font-bold text-gray-900">Notes de Suivi Récentes</h2>
            <button className="text-xs font-semibold text-[#00A1C9] hover:underline">
              Voir tout l'audit log
            </button>
          </div>
          
          <div className="relative border-l border-gray-200 ml-2 space-y-6 pb-2">
            
            <div className="relative pl-6">
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#00A1C9] border-2 border-white box-content"></div>
              <div className="flex justify-between items-start mb-0.5">
                <h4 className="text-sm font-semibold text-gray-900">Modification Dossier - M. Lawson</h4>
                <span className="text-xs text-gray-400 font-medium">14:20</span>
              </div>
              <p className="text-xs text-gray-500">Mise à jour de l'allergie (Pénicilline) par Dr. Smith.</p>
            </div>

            <div className="relative pl-6">
              <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-gray-300 border-2 border-white box-content"></div>
              <div className="flex justify-between items-start mb-0.5">
                <h4 className="text-sm font-semibold text-gray-900">Clôture de Consultation - A. Codjo</h4>
                <span className="text-xs text-gray-400 font-medium">11:05</span>
              </div>
              <p className="text-xs text-gray-500">Consultation terminée pour motif "Douleur thoracique".</p>
            </div>
            
          </div>
        </div>

      </div>

      {/* Add Patient Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <div className="bg-white rounded-[24px] w-full max-w-[500px] shadow-2xl relative overflow-hidden flex flex-col">
            
            {/* Close Button */}
            <button 
              onClick={() => { setIsModalOpen(false); setSearchStatus('idle'); }}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors z-10"
            >
              <X size={18} />
            </button>

            {searchStatus === 'success' && activeTab === 'npi' ? (
              <div className="p-10 flex flex-col items-center relative">
                {/* Avatar with Shield */}
                <div className="relative mb-4 mt-4">
                  <div className="w-20 h-20 rounded-full bg-slate-200 border-4 border-white shadow-sm overflow-hidden flex items-center justify-center">
                    <User size={40} className="text-slate-400" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center text-white">
                    <Shield size={12} fill="currentColor" strokeWidth={0} />
                  </div>
                </div>

                {/* Patient Info */}
                <h2 className="text-lg font-bold text-[#0053CD] mb-1">Yann AMOUSSOU</h2>
                <p className="text-sm text-slate-500 font-mono tracking-widest mb-10">1234 5678 9012</p>

                {/* Success Icon */}
                <div className="relative flex items-center justify-center mb-8">
                  <div className="absolute w-24 h-24 bg-emerald-100 rounded-full"></div>
                  <div className="relative w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-sm z-10">
                    <CheckCircle2 size={32} />
                  </div>
                </div>

                {/* Status Text */}
                <h3 className="text-[17px] font-bold text-slate-900 mb-2 text-center">Autorisation accordée</h3>
                <p className="text-[13px] text-slate-500 text-center mb-8 max-w-xs leading-relaxed">
                  Le patient a validé l'accès à son dossier depuis son application mobile.
                </p>

                {/* Go to file Button */}
                <button 
                  onClick={() => { setIsModalOpen(false); setSearchStatus('idle'); router.push('/patients/329875421'); }}
                  className="w-full bg-[#00A1C9] hover:bg-[#008BB0] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <Search size={18} />
                  Aller au dossier médical
                </button>
              </div>
            ) : searchStatus === 'waiting' && activeTab === 'npi' ? (
              <div className="p-10 flex flex-col items-center relative">
                {/* Avatar with Shield */}
                <div className="relative mb-4 mt-4">
                  <div className="w-20 h-20 rounded-full bg-slate-200 border-4 border-white shadow-sm overflow-hidden flex items-center justify-center">
                    <User size={40} className="text-slate-400" />
                  </div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center text-white">
                    <Shield size={12} fill="currentColor" strokeWidth={0} />
                  </div>
                </div>

                {/* Patient Info */}
                <h2 className="text-lg font-bold text-[#0053CD] mb-1">Yann AMOUSSOU</h2>
                <p className="text-sm text-slate-500 font-mono tracking-widest mb-10">1234 5678 9012</p>

                {/* Pulsing Phone Icon */}
                <div className="relative flex items-center justify-center mb-8">
                  <div className="absolute w-32 h-32 bg-[#E6F3FF] rounded-full animate-ping opacity-75"></div>
                  <div className="absolute w-24 h-24 bg-[#CCE7FF] rounded-full"></div>
                  <div className="relative w-16 h-16 bg-[#99D0FF] rounded-full flex items-center justify-center text-white shadow-sm z-10">
                    <Smartphone size={32} />
                  </div>
                </div>

                {/* Status Text */}
                <h3 className="text-[15px] font-bold text-slate-900 mb-2 text-center">En attente d'autorisation du patient...</h3>
                <p className="text-[13px] text-slate-500 text-center mb-6 max-w-xs leading-relaxed">
                  Une notification a été envoyée sur l'application mobile du patient.
                </p>

                {/* Timer Badge */}
                <div className="flex items-center gap-2 bg-[#F0F7FF] text-[#0053CD] px-4 py-2 rounded-full font-semibold text-sm mb-8">
                  <Clock size={16} />
                  <span>Expire dans 02:45</span>
                </div>

                {/* Cancel Button */}
                <button 
                  onClick={() => setSearchStatus('idle')}
                  className="w-full bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 py-3.5 rounded-xl font-bold transition-colors shadow-sm flex items-center justify-center gap-2"
                >
                  <X size={18} />
                  Annuler la demande
                </button>
              </div>
            ) : (
              <div className="p-8 pb-6">
                {activeTab === 'npi' ? (
                  <>
                    <p className="text-[#0053CD] text-[10px] font-bold tracking-wider uppercase mb-2">NOUVEAU DOSSIER</p>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">Rechercher un dossier médical</h2>
                    <p className="text-sm text-slate-500 mb-8">Identifiez le patient via son NPI ou son empreinte digitale</p>
                  </>
                ) : (
                  <div className="mb-8">
                    <div className="flex justify-between items-start mb-2">
                      <h2 className="text-2xl font-bold text-slate-900">Recherche de Patient</h2>
                      <button className="text-slate-400 hover:text-slate-600 transition-colors">
                        <MoreHorizontal size={20} />
                      </button>
                    </div>
                    <p className="text-sm text-slate-500">Identifiez le patient pour accéder à son dossier médical sécurisé.</p>
                  </div>
                )}

                {/* Tabs */}
                <div className="bg-slate-50 p-1 rounded-xl flex gap-1 mb-8">
                  <button 
                    onClick={() => { setActiveTab('npi'); setSearchStatus('idle'); }}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold transition-all ${
                      activeTab === 'npi' 
                        ? 'bg-[#0E1B2A] text-white shadow-sm' 
                        : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <IdCard size={18} />
                    Par NPI
                  </button>
                  <button 
                    onClick={() => { setActiveTab('fingerprint'); setSearchStatus('idle'); }}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold transition-all ${
                      activeTab === 'fingerprint' 
                        ? 'bg-[#0E1B2A] text-white shadow-sm' 
                        : 'text-slate-500 hover:text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <Fingerprint size={18} />
                    Par empreinte digitale
                  </button>
                </div>

                {/* Tab Content */}
                {activeTab === 'npi' ? (
                  <>
                    {/* Input Form */}
                    <div className="flex flex-col gap-2 mb-8">
                      <label className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">NUMÉRO PERSONNEL D'IDENTIFICATION</label>
                      <div className="relative">
                        <input 
                          type="text" 
                          placeholder="0000 0000 0000" 
                          className="w-full border border-slate-200 rounded-xl px-4 py-3.5 text-slate-900 placeholder-slate-300 focus:outline-none focus:border-[#0053CD] focus:ring-1 focus:ring-[#0053CD] tracking-widest font-mono text-lg"
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300">
                          <IdCard size={20} />
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400 mt-1">
                        <IdCard size={12} />
                        <span className="text-xs">10 chiffres — lisible sur la carte d'identité du patient</span>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button 
                      onClick={() => setSearchStatus('waiting')}
                      className="w-full bg-[#0E1B2A] hover:bg-slate-800 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors shadow-sm"
                    >
                      <Search size={18} />
                      Rechercher le dossier
                    </button>
                  </>
                ) : (
                  <div className="flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full bg-[#DFF1F8] flex items-center justify-center mb-6 relative">
                      <Fingerprint size={56} className="text-[#0E1B2A]" strokeWidth={1.5} />
                    </div>
                    
                    <h3 className="text-[17px] font-bold text-slate-900 mb-2 text-center">Posez le doigt du patient sur le lecteur</h3>
                    <p className="text-sm text-slate-500 text-center mb-6 max-w-sm">
                      Le lecteur biométrique va comparer l'empreinte avec les données ANIP.
                    </p>
                    
                    <div className="flex items-center gap-3 bg-[#F8FAFC] border border-slate-100 rounded-full px-4 py-2 mb-8">
                      <div className="flex items-center gap-2 border-r border-slate-200 pr-3">
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                        <span className="text-[11px] font-bold text-slate-700">Lecteur connecté</span>
                      </div>
                      <span className="text-[11px] font-bold text-[#00A1C9]">ZK4500 USB</span>
                    </div>

                    <button 
                      onClick={() => { setIsModalOpen(false); setSearchStatus('idle'); }}
                      className="w-full bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 py-3.5 rounded-xl font-bold transition-colors shadow-sm"
                    >
                      Annuler
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Info Footer */}
            {(searchStatus === 'waiting' || searchStatus === 'success') && activeTab === 'npi' ? (
              <div className="p-4 flex items-center justify-center gap-2 mt-auto border-t border-slate-100 pb-6 pt-6">
                <Lock size={12} className="text-[#00A1C9]" />
                <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">
                  Connexion sécurisée établie
                </p>
              </div>
            ) : activeTab === 'npi' ? (
              <div className="bg-[#F0F7FF] p-5 flex items-start gap-3 mt-auto">
                <div className="text-[#0053CD] shrink-0 mt-0.5">
                  <Info size={18} />
                </div>
                <p className="text-xs text-[#0053CD] font-medium leading-relaxed">
                  L'accès au dossier requiert l'autorisation du patient via son application mobile. Une notification lui sera envoyée.
                </p>
              </div>
            ) : (
              <div className="bg-[#F0F7FF] p-4 flex items-center justify-center gap-2 mt-auto">
                <ShieldCheck size={16} className="text-[#0053CD]" />
                <p className="text-[11px] font-semibold text-[#0053CD]">
                  Authentification sécurisée via le registre biométrique national (ANIP)
                </p>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
