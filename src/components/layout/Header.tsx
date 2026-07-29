'use client';

import { Bell, Settings2, HelpCircle, Search } from 'lucide-react';
import Avatar from '@/components/ui/avatar';
import { cn } from '@/lib/utils/cn';

interface HeaderProps {
  doctorName?: string;
  doctorRole?: string;
  doctorAvatar?: string;
  notificationCount?: number;
  onSearch?: (query: string) => void;
  className?: string;
}

export default function Header({
  doctorName = 'Dr. Médecin',
  doctorRole = 'Médecin Principal',
  doctorAvatar,
  notificationCount = 0,
  onSearch,
  className,
}: HeaderProps) {
  return (
    <header
      className={cn(
        'flex h-16 shrink-0 items-center gap-4 border-b border-[#E3EDF7] bg-white px-6',
        className
      )}
    >
      {/* Barre de recherche */}
      <div className="relative flex-1 max-w-xl">
        <Search
          size={16}
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#6E7C91]"
        />
        <input
          type="search"
          placeholder="Recherche rapide..."
          onChange={(e) => onSearch?.(e.target.value)}
          className="w-full rounded-lg border border-[#E3EDF7] bg-[#FAFCFF] py-2 pl-9 pr-4 text-sm text-[#0E1B2A] placeholder:text-[#6E7C91] focus:border-[#0053CD] focus:outline-none focus:ring-2 focus:ring-[#0053CD]/20 transition-colors"
        />
      </div>

      {/* Actions droite */}
      <div className="flex items-center gap-1">
        {/* Cloche notifications */}
        <button
          aria-label="Notifications"
          className="relative flex h-9 w-9 items-center justify-center rounded-lg text-[#6E7C91] hover:bg-[#F0F5FF] hover:text-[#0E1B2A] transition-colors cursor-pointer"
        >
          <Bell size={18} />
          {notificationCount > 0 && (
            <span className="absolute right-1.5 top-1.5 flex h-2 w-2 items-center justify-center rounded-full bg-[#D14343]" />
          )}
        </button>

        {/* Paramètres */}
        <button
          aria-label="Paramètres"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-[#6E7C91] hover:bg-[#F0F5FF] hover:text-[#0E1B2A] transition-colors cursor-pointer"
        >
          <Settings2 size={18} />
        </button>

        {/* Aide */}
        <button
          aria-label="Aide"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-[#6E7C91] hover:bg-[#F0F5FF] hover:text-[#0E1B2A] transition-colors cursor-pointer"
        >
          <HelpCircle size={18} />
        </button>
      </div>

      {/* Séparateur */}
      <div className="h-7 w-px bg-[#E3EDF7]" />

      {/* Infos médecin */}
      <div className="flex items-center gap-3">
        <div className="text-right hidden sm:block">
          <p className="text-sm font-semibold text-[#0E1B2A] leading-tight">{doctorName}</p>
          <p className="text-xs text-[#6E7C91]">{doctorRole}</p>
        </div>
        <Avatar name={doctorName} src={doctorAvatar} size="md" />
      </div>
    </header>
  );
}
