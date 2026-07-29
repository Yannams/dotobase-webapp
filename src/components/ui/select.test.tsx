import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Select from './select';

const options = [
  { value: 'rdv', label: 'Rendez-vous' },
  { value: 'urgence', label: 'Urgence' },
];

describe('Select', () => {
  it('renders with label', () => {
    render(<Select label="Type" options={options} />);
    expect(screen.getByLabelText('Type')).toBeInTheDocument();
  });

  it('renders all options', () => {
    render(<Select label="Type" options={options} />);
    expect(screen.getByRole('option', { name: 'Rendez-vous' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Urgence' })).toBeInTheDocument();
  });

  it('shows error message', () => {
    render(<Select label="Type" options={options} error="Champ requis" />);
    expect(screen.getByText('Champ requis')).toBeInTheDocument();
  });

  it('renders placeholder option', () => {
    render(<Select label="Type" options={options} placeholder="Choisir..." />);
    expect(screen.getByRole('option', { name: 'Choisir...' })).toBeInTheDocument();
  });
});
