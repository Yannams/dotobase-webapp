import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Card, { CardHeader, CardTitle, CardContent, CardFooter } from './card';

describe('Card', () => {
  it('renders children', () => {
    render(<Card><p>Contenu</p></Card>);
    expect(screen.getByText('Contenu')).toBeInTheDocument();
  });

  it('renders with header and title', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Résumé</CardTitle>
        </CardHeader>
        <CardContent><p>Données</p></CardContent>
      </Card>
    );
    expect(screen.getByText('Résumé')).toBeInTheDocument();
    expect(screen.getByText('Données')).toBeInTheDocument();
  });

  it('renders footer', () => {
    render(
      <Card>
        <CardContent><p>Corps</p></CardContent>
        <CardFooter><button>Action</button></CardFooter>
      </Card>
    );
    expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument();
  });
});
