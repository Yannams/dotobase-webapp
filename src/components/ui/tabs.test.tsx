import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Tabs, { TabsList, TabsPanel } from './tabs';

const tabs = [
  { value: 'consultations', label: 'Consultations' },
  { value: 'diagnostics', label: 'Diagnostics' },
  { value: 'traitements', label: 'Traitements' },
];

function TestTabs() {
  return (
    <Tabs defaultValue="consultations">
      <TabsList tabs={tabs} />
      <TabsPanel value="consultations"><p>Panel consultations</p></TabsPanel>
      <TabsPanel value="diagnostics"><p>Panel diagnostics</p></TabsPanel>
      <TabsPanel value="traitements"><p>Panel traitements</p></TabsPanel>
    </Tabs>
  );
}

describe('Tabs', () => {
  it('shows default panel', () => {
    render(<TestTabs />);
    expect(screen.getByText('Panel consultations')).toBeInTheDocument();
    expect(screen.queryByText('Panel diagnostics')).not.toBeInTheDocument();
  });

  it('switches panel on tab click', () => {
    render(<TestTabs />);
    fireEvent.click(screen.getByRole('tab', { name: 'Diagnostics' }));
    expect(screen.getByText('Panel diagnostics')).toBeInTheDocument();
    expect(screen.queryByText('Panel consultations')).not.toBeInTheDocument();
  });

  it('marks active tab as selected', () => {
    render(<TestTabs />);
    expect(screen.getByRole('tab', { name: 'Consultations' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('tab', { name: 'Diagnostics' })).toHaveAttribute('aria-selected', 'false');
  });
});
