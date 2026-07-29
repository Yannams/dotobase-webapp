import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Dropdown from './dropdown';

const items = [
  { label: 'Modifier', onClick: vi.fn() },
  { label: 'Supprimer', onClick: vi.fn(), danger: true },
];

describe('Dropdown', () => {
  it('does not show menu initially', () => {
    render(<Dropdown trigger={<button>Options</button>} items={items} />);
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });

  it('shows menu on trigger click', () => {
    render(<Dropdown trigger={<button>Options</button>} items={items} />);
    fireEvent.click(screen.getByText('Options'));
    expect(screen.getByRole('menu')).toBeInTheDocument();
    expect(screen.getByText('Modifier')).toBeInTheDocument();
  });

  it('calls item onClick and closes menu', () => {
    const onClick = vi.fn();
    render(<Dropdown trigger={<button>Options</button>} items={[{ label: 'Modifier', onClick }]} />);
    fireEvent.click(screen.getByText('Options'));
    fireEvent.click(screen.getByText('Modifier'));
    expect(onClick).toHaveBeenCalledOnce();
    expect(screen.queryByRole('menu')).not.toBeInTheDocument();
  });
});
