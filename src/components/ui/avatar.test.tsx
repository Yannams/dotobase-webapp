import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Avatar from './avatar';

describe('Avatar', () => {
  it('shows initials from name', () => {
    render(<Avatar name="Jean Dupont" />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('shows single initial for single name', () => {
    render(<Avatar name="Jean" />);
    expect(screen.getByText('J')).toBeInTheDocument();
  });

  it('renders image when src provided', () => {
    render(<Avatar name="Jean Dupont" src="/photo.jpg" />);
    expect(screen.getByRole('img', { name: 'Jean Dupont' })).toBeInTheDocument();
  });

  it('has accessible label', () => {
    render(<Avatar name="Dr. Martin" />);
    expect(screen.getByLabelText('Dr. Martin')).toBeInTheDocument();
  });
});
