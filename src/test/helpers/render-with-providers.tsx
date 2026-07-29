import { render, type RenderOptions } from '@testing-library/react';
import type { ReactElement } from 'react';

/**
 * Wraps render() with all app-level providers.
 * Add providers here as the app grows (e.g. QueryClient, Theme).
 */
function AllProviders({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

function renderWithProviders(ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  return render(ui, { wrapper: AllProviders, ...options });
}

export { renderWithProviders };
export { screen, fireEvent, waitFor, act } from '@testing-library/react';
