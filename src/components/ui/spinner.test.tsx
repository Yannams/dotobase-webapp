import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Spinner from './spinner';

describe('Spinner', () => {
  it('renders with default size', () => {
    render(<Spinner />);
    const el = screen.getByRole('status');
    expect(el).toBeInTheDocument();
    expect(el).toHaveClass('w-6', 'h-6');
  });

  it('renders sm size', () => {
    render(<Spinner size="sm" />);
    expect(screen.getByRole('status')).toHaveClass('w-4', 'h-4');
  });

  it('renders lg size', () => {
    render(<Spinner size="lg" />);
    expect(screen.getByRole('status')).toHaveClass('w-8', 'h-8');
  });

  it('has accessible label', () => {
    render(<Spinner />);
    expect(screen.getByLabelText('Chargement')).toBeInTheDocument();
  });
});
