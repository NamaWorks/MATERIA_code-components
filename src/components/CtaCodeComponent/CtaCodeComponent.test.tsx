import { render } from '@testing-library/react';
import { CtaCodeComponent } from './CtaCodeComponent';

describe('CtaCodeComponent', () => {
  it('renders without crashing', () => {
    const { container } = render(<CtaCodeComponent />);
    const chars = container.querySelectorAll('.char-top');
    const text = Array.from(chars)
      .map((s) => s.textContent)
      .join('')
      .replace(/\u00A0/g, ' ');
    expect(text).toBe('Contacta ahora');
  });

  it('renders the title prop', () => {
    const { container } = render(<CtaCodeComponent title="Pide cita ahora" />);
    const chars = container.querySelectorAll('.char-top');
    const text = Array.from(chars)
      .map((s) => s.textContent)
      .join('')
      .replace(/\u00A0/g, ' ');
    expect(text).toBe('Pide cita ahora');
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

  it('renders both char-top and char-bottom layers with matching character count', () => {
    const title = 'Test';
    const { container } = render(<CtaCodeComponent title={title} />);
    const charsTop = container.querySelectorAll('.char-top');
    const charsBottom = container.querySelectorAll('.char-bottom');
    expect(charsTop.length).toBe(title.length);
    expect(charsBottom.length).toBe(title.length);
  });

  it('renders text in uppercase via CSS class', () => {
    const { container } = render(<CtaCodeComponent title="Test" />);
    const span = container.querySelector('.uppercase');
    expect(span).toBeInTheDocument();
  });
});
