'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  ClipboardList,
  FolderOpen,
  Settings2,
  HelpCircle,
  LogOut,
  Plus,
} from 'lucide-react';
import { cn } from '@/lib/utils/cn';

interface NavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const mainNav: NavItem[] = [
  { href: '/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
  { href: '/patients', label: 'Patients', icon: <Users size={18} /> },
  { href: '/consultations', label: 'Consultations', icon: <ClipboardList size={18} /> },
  { href: '/dossiers', label: 'Dossiers', icon: <FolderOpen size={18} /> },
];

const bottomNav: NavItem[] = [
  { href: '/parametres', label: 'Parametre', icon: <Settings2 size={18} /> },
  { href: '/aide', label: 'Aide', icon: <HelpCircle size={18} /> },
];

interface SidebarProps {
  clinicName?: string;
  clinicType?: string;
  onLogout?: () => void;
}

export default function Sidebar({
  clinicName = 'Dotobase',
  clinicType = 'Plateforme médicale',
  onLogout,
}: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-60 shrink-0 flex-col border-r border-[#E3EDF7] bg-white">
      {/* Logo */}
      <div className="flex items-center gap-3 px-5 py-5 border-b border-[#E3EDF7]">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0053CD]">
          <Plus size={20} className="text-white" strokeWidth={3} />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-[#0E1B2A]">{clinicName}</p>
          <p className="truncate text-xs text-[#6E7C91]">{clinicType}</p>
        </div>
      </div>


      {/* Navigation principale */}
      <nav className="flex-1 overflow-y-auto px-3 py-2">
        <ul className="flex flex-col gap-1">
          {mainNav.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-[#0053CD] text-white'
                      : 'text-[#6E7C91] hover:bg-[#F0F5FF] hover:text-[#0E1B2A]'
                  )}
                >
                  {item.icon}
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Navigation bas */}
      <div className="px-3 pb-4">
        <ul className="flex flex-col gap-1">
          {bottomNav.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                    isActive
                      ? 'bg-[#0053CD] text-white'
                      : 'text-[#6E7C91] hover:bg-[#F0F5FF] hover:text-[#0E1B2A]'
                  )}
                >
                  {item.icon}
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="my-3 border-t border-[#E3EDF7]" />

        <button
          onClick={onLogout}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-[#6E7C91] transition-colors hover:bg-[#FCEAEA] hover:text-[#D14343] cursor-pointer"
        >
          <LogOut size={18} />
          Déconnexion
        </button>
      </div>
    </aside>
  );
}
