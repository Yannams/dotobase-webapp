import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Input from './input';

describe('Input', () => {
  it('renders with label', () => {
    render(<Input label="NPI" />);
    expect(screen.getByLabelText('NPI')).toBeInTheDocument();
  });

  it('shows required indicator', () => {
    render(<Input label="NPI" required />);
    expect(screen.getByText('*')).toBeInTheDocument();
  });

  it('shows error message', () => {
    render(<Input label="NPI" error="NPI invalide" />);
    expect(screen.getByText('NPI invalide')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('shows helper text when no error', () => {
    render(<Input label="NPI" helper="10 chiffres" />);
    expect(screen.getByText('10 chiffres')).toBeInTheDocument();
  });

  it('is disabled when disabled prop is true', () => {
    render(<Input label="NPI" disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });
});
