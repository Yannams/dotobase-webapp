import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Textarea from './textarea';

describe('Textarea', () => {
  it('renders with label', () => {
    render(<Textarea label="Observations" />);
    expect(screen.getByLabelText('Observations')).toBeInTheDocument();
  });

  it('shows error message', () => {
    render(<Textarea label="Notes" error="Champ requis" />);
    expect(screen.getByText('Champ requis')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true');
  });

  it('shows helper text', () => {
    render(<Textarea label="Notes" helper="Maximum 500 caractères" />);
    expect(screen.getByText('Maximum 500 caractères')).toBeInTheDocument();
  });
});
