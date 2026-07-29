import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Table from './table';

const columns = [
  { key: 'nom' as const, header: 'Nom' },
  { key: 'type' as const, header: 'Type' },
];

const data = [
  { id: '1', nom: 'Jean Dupont', type: 'Consultation' },
  { id: '2', nom: 'Marie Diallo', type: 'Urgence' },
];

describe('Table', () => {
  it('renders column headers', () => {
    render(<Table columns={columns} data={data} keyField="id" />);
    expect(screen.getByText('Nom')).toBeInTheDocument();
    expect(screen.getByText('Type')).toBeInTheDocument();
  });

  it('renders data rows', () => {
    render(<Table columns={columns} data={data} keyField="id" />);
    expect(screen.getByText('Jean Dupont')).toBeInTheDocument();
    expect(screen.getByText('Marie Diallo')).toBeInTheDocument();
  });

  it('shows empty message when no data', () => {
    render(<Table columns={columns} data={[]} keyField="id" emptyMessage="Aucune consultation" />);
    expect(screen.getByText('Aucune consultation')).toBeInTheDocument();
  });

  it('uses custom render function', () => {
    const colsWithRender = [
      { key: 'nom' as const, header: 'Nom', render: (row: typeof data[0]) => <strong>{row.nom}</strong> },
    ];
    render(<Table columns={colsWithRender} data={data} keyField="id" />);
    expect(screen.getByText('Jean Dupont').tagName).toBe('STRONG');
  });
});
