import { render, screen, waitFor } from '@testing-library/react';
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

  it('applies invert(1) filter when parent has data-dropdown-open', async () => {
    const { container } = render(<NavbarLink label="PRODUCTOS" dropdownData="products" />);
    const parent = container.querySelector('a')!.parentElement!;
    parent.setAttribute('data-dropdown-open', '');
    await waitFor(() => {
      expect(container.querySelector('span[style*="invert(1)"]')).toBeInTheDocument();
    });
  });

  it('reverts to invert(0) filter when data-dropdown-open is removed', async () => {
    const { container } = render(<NavbarLink label="PRODUCTOS" dropdownData="products" />);
    const parent = container.querySelector('a')!.parentElement!;
    parent.setAttribute('data-dropdown-open', '');
    await waitFor(() => {
      expect(container.querySelector('span[style*="invert(1)"]')).toBeInTheDocument();
    });
    parent.removeAttribute('data-dropdown-open');
    await waitFor(() => {
      expect(container.querySelector('span[style*="invert(0)"]')).toBeInTheDocument();
    });
  });
});
