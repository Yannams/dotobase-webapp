import Sidebar from '@/components/layout/Sidebar';
import Header from '@/components/layout/Header';

export default function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-[#F8FAFC]">
      <Sidebar clinicName="Dr. Smith's Office" clinicType="General Practitioner" />
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header doctorName="Dr. Hounkpatin" doctorRole="Médecin Principal" notificationCount={1} />
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
