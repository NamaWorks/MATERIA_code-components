import { render, screen } from '@testing-library/react';
import { NavbarLink } from './NavbarLink';

describe('NavbarLink', () => {
  it('renders the label', () => {
    render(<NavbarLink label="NOSOTROS" />);
    expect(screen.getByText('NOSOTROS')).toBeInTheDocument();
  });

  it('renders as a link with href', () => {
    render(<NavbarLink label="NOSOTROS" href="/nosotros" />);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/nosotros');
  });

  it('does not render the indicator without dropdownData', () => {
    const { container } = render(<NavbarLink label="NOSOTROS" />);
    expect(container.querySelector('[style*="invert"]')).not.toBeInTheDocument();
  });

  it('does not render the indicator when dropdownData is "none"', () => {
    const { container } = render(<NavbarLink label="NOSOTROS" dropdownData="none" />);
    expect(container.querySelector('[style*="invert"]')).not.toBeInTheDocument();
  });

  it('renders the indicator when dropdownData is set', () => {
    const { container } = render(<NavbarLink label="PRODUCTOS" dropdownData="products" />);
    expect(container.querySelector('[style*="invert"]')).toBeInTheDocument();
  });
});
