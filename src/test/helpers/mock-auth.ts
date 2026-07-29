import { vi } from "vitest";

export const mockAuthUser = {
  id: "mock-user-id",
  npi: "1234567890",
  nom: "Dr. Dupont",
  prenom: "Jean",
  specialite_id: "cardio-uuid",
  role: "medecin" as const,
};

export const mockEtablissement = {
  id: "mock-etab-id",
  nom: "Hôpital Central de Cotonou",
};

export function mockUseAuth() {
  return vi.fn().mockReturnValue({
    user: mockAuthUser,
    etablissementActif: mockEtablissement,
    specialiteId: mockAuthUser.specialite_id,
    role: mockAuthUser.role,
    isLoading: false,
    signOut: vi.fn(),
  });
}
