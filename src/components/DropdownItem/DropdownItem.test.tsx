import { render, screen, fireEvent } from '@testing-library/react';
import { DropdownItem } from './DropdownItem';

describe('DropdownItem', () => {
  it('renders without crashing', () => {
    render(<DropdownItem index="001." label="Lorem ipsum" />);
    expect(screen.getByText('001.')).toBeInTheDocument();
  });

  it('renders the index prop', () => {
    render(<DropdownItem index="042." label="Some label" />);
    expect(screen.getByText('042.')).toBeInTheDocument();
  });

  it('renders the label prop', () => {
    render(<DropdownItem index="001." label="My label text" />);
    expect(screen.getByText('My label text')).toBeInTheDocument();
  });

  it('is collapsed by default', () => {
    render(<DropdownItem index="001." label="Test" />);
    expect(screen.getByText('Test').closest('[aria-expanded]')).toHaveAttribute(
      'aria-expanded',
      'false'
    );
  });

  it('expands when clicked', () => {
    render(<DropdownItem index="001." label="Test" />);
    const trigger = screen.getByText('Test').closest('[aria-expanded]')!;
    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
  });

  it('collapses again on second click', () => {
    render(<DropdownItem index="001." label="Test" />);
    const trigger = screen.getByText('Test').closest('[aria-expanded]')!;
    fireEvent.click(trigger);
    fireEvent.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });

  it('renders the description prop', () => {
    render(<DropdownItem index="001." label="Test" description="Custom description text" />);
    expect(screen.getByText('Custom description text')).toBeInTheDocument();
  });
});
