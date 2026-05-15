import { render, screen, fireEvent } from '@testing-library/react';
import { Menu } from './Menu';

const mockNavLinks = (
  <>
    <a href="#nosotros">NOSOTROS</a>
    <a href="#proyectos" {...{'dropdown-data': 'projects'}}>PROYECTOS</a>
    <a href="#productos" {...{'dropdown-data': 'products'}}>PRODUCTOS</a>
    <a href="#contacto">CONTACTO</a>
  </>
);

describe('Menu', () => {
  it('renders without crashing', () => {
    render(<Menu />);
  });

  it('renders the logo slot', () => {
    render(<Menu logo={<span data-testid="logo">Logo</span>} />);
    expect(screen.getByTestId('logo')).toBeInTheDocument();
  });

  it('renders nav links slot', () => {
    render(<Menu navLinks={mockNavLinks} />);
    expect(screen.getByText('NOSOTROS')).toBeInTheDocument();
    expect(screen.getByText('PROYECTOS')).toBeInTheDocument();
  });

  it('opens proyectos panel on mouseover of item with dropdown-data="projects"', () => {
    render(<Menu navLinks={mockNavLinks} proyectosContent={<div>Proyectos content</div>} />);
    fireEvent.mouseOver(screen.getByText('PROYECTOS'));
    expect(document.querySelector('[data-dropdown-panel][data-open]')).toBeInTheDocument();
  });

  it('opens productos panel on mouseover of item with dropdown-data="products"', () => {
    render(<Menu navLinks={mockNavLinks} productosContent={<div>Productos content</div>} />);
    fireEvent.mouseOver(screen.getByText('PRODUCTOS'));
    expect(document.querySelector('[data-dropdown-panel][data-open]')).toBeInTheDocument();
  });

  it('does not open any panel on mouseover of item without dropdown-data', () => {
    render(<Menu navLinks={mockNavLinks} />);
    fireEvent.mouseOver(screen.getByText('NOSOTROS'));
    expect(document.querySelector('[data-dropdown-panel][data-open]')).not.toBeInTheDocument();
  });

  it('renders dropdown slot content inside the correct panel', () => {
    render(
      <Menu
        navLinks={mockNavLinks}
        proyectosContent={<div data-testid="proy-content">Proyectos</div>}
        productosContent={<div data-testid="prod-content">Productos</div>}
      />
    );
    expect(screen.getByTestId('proy-content')).toBeInTheDocument();
    expect(screen.getByTestId('prod-content')).toBeInTheDocument();
  });
});
