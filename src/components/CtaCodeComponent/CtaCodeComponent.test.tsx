import { render, screen } from '@testing-library/react';
import { CtaCodeComponent } from './CtaCodeComponent';

describe('CtaCodeComponent', () => {
  it('renders without crashing', () => {
    render(<CtaCodeComponent />);
    expect(screen.getByText('Contacta ahora')).toBeInTheDocument();
  });

  it('renders the title prop', () => {
    render(<CtaCodeComponent title="Pide cita ahora" />);
    expect(screen.getByText('Pide cita ahora')).toBeInTheDocument();
  });

  it('renders with default black variant when no variant is provided', () => {
    const { container } = render(<CtaCodeComponent title="Test" />);
    const boxes = container.querySelectorAll('.bg-\\[\\#0E0E0E\\]');
    expect(boxes.length).toBeGreaterThan(0);
  });

  it('renders with light variant applying cream background', () => {
    const { container } = render(<CtaCodeComponent title="Test" variant="light" />);
    const boxes = container.querySelectorAll('.bg-\\[\\#F2EEE9\\]');
    expect(boxes.length).toBeGreaterThan(0);
  });

  it('renders with white variant applying white background', () => {
    const { container } = render(<CtaCodeComponent title="Test" variant="white" />);
    const boxes = container.querySelectorAll('.bg-white');
    expect(boxes.length).toBeGreaterThan(0);
  });

  it('renders the arrow icon svg element in the DOM', () => {
    const { container } = render(<CtaCodeComponent title="Test" />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });

  it('arrow container is hidden by default via opacity-0', () => {
    const { container } = render(<CtaCodeComponent title="Test" />);
    const arrowBox = container.querySelector('.opacity-0');
    expect(arrowBox).toBeInTheDocument();
  });

  it('arrow container starts offset to the right via translate-x-2', () => {
    const { container } = render(<CtaCodeComponent title="Test" />);
    const arrowBox = container.querySelector('.translate-x-2');
    expect(arrowBox).toBeInTheDocument();
  });

  it('svg paths have trim-path classes applied', () => {
    const { container } = render(<CtaCodeComponent title="Test" />);
    const paths = container.querySelectorAll('.cta-arrow-path');
    expect(paths.length).toBe(2);
  });

  it('renders text in uppercase via CSS class', () => {
    const { container } = render(<CtaCodeComponent title="Test" />);
    const span = container.querySelector('.uppercase');
    expect(span).toBeInTheDocument();
  });
});
