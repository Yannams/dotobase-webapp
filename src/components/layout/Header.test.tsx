import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Header from './Header';

describe('Header', () => {
  it('renders doctor name and role', () => {
    render(<Header doctorName="Dr. Hounkpatin" doctorRole="Médecin Principal" />);
    expect(screen.getByText('Dr. Hounkpatin')).toBeInTheDocument();
    expect(screen.getByText('Médecin Principal')).toBeInTheDocument();
  });

  it('renders search input', () => {
    render(<Header />);
    expect(screen.getByPlaceholderText('Recherche rapide...')).toBeInTheDocument();
  });

  it('calls onSearch when typing', () => {
    const onSearch = vi.fn();
    render(<Header onSearch={onSearch} />);
    fireEvent.change(screen.getByPlaceholderText('Recherche rapide...'), {
      target: { value: 'Jean' },
    });
    expect(onSearch).toHaveBeenCalledWith('Jean');
  });

  it('renders notification button', () => {
    render(<Header />);
    expect(screen.getByLabelText('Notifications')).toBeInTheDocument();
  });

  it('shows notification dot when count > 0', () => {
    const { container } = render(<Header notificationCount={3} />);
    const dot = container.querySelector('.bg-\\[\\#D14343\\]');
    expect(dot).toBeInTheDocument();
  });

  it('renders settings and help buttons', () => {
    render(<Header />);
    expect(screen.getByLabelText('Paramètres')).toBeInTheDocument();
    expect(screen.getByLabelText('Aide')).toBeInTheDocument();
  });
});
