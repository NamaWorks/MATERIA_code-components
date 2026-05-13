import { render, screen, fireEvent } from '@testing-library/react';
import { Menu } from './Menu';

const mockNavItems = [
  { name: 'Nosotros', slug: 'NOSOTROS', link: '#nosotros' },
  { name: 'Proyectos', slug: 'PROYECTOS', link: '#proyectos', submenu: 'projects' as const },
  { name: 'Productos', slug: 'PRODUCTOS', link: '#productos', submenu: 'products' as const },
  { name: 'Contacto', slug: 'CONTACTO', link: '#contacto' },
];

describe('Menu', () => {
  it('renders without crashing', () => {
    render(<Menu />);
  });

  it('renders nav items from props', () => {
    render(<Menu navItems={mockNavItems} />);
    expect(screen.getByText('NOSOTROS')).toBeInTheDocument();
    expect(screen.getByText('PROYECTOS')).toBeInTheDocument();
    expect(screen.getByText('PRODUCTOS')).toBeInTheDocument();
    expect(screen.getByText('CONTACTO')).toBeInTheDocument();
  });

  it('renders logo slot', () => {
    render(<Menu logo={<span data-testid="logo">Logo</span>} />);
    expect(screen.getByTestId('logo')).toBeInTheDocument();
  });

  it('renders dropdown indicator only on items with a submenu', () => {
    render(<Menu navItems={mockNavItems} />);
    const indicators = document.querySelectorAll('svg[aria-hidden="true"]');
    // Only PROYECTOS and PRODUCTOS have submenu indicators
    expect(indicators).toHaveLength(2);
  });

  it('shows dropdown panel on nav item hover', () => {
    render(<Menu navItems={mockNavItems} />);
    fireEvent.mouseEnter(screen.getByText('PROYECTOS'));
    expect(document.querySelector('.grid-rows-\\[1fr\\]')).toBeInTheDocument();
  });

  it('uses correct href for each nav item', () => {
    render(<Menu navItems={mockNavItems} />);
    expect(screen.getByText('NOSOTROS').closest('a')).toHaveAttribute('href', '#nosotros');
    expect(screen.getByText('PROYECTOS').closest('a')).toHaveAttribute('href', '#proyectos');
  });
});
