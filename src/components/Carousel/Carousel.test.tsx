import { render } from '@testing-library/react';
import { Carousel } from './Carousel';

describe('Carousel', () => {
  it('renders without crashing', () => {
    const { container } = render(<Carousel />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders children in both track copies', () => {
    const { getAllByText } = render(
      <Carousel>
        <div>Item</div>
      </Carousel>
    );
    expect(getAllByText('Item').length).toBe(2);
  });

  it('does not render arrow buttons when arrows is false', () => {
    const { queryByLabelText } = render(<Carousel arrows={false} />);
    expect(queryByLabelText('Previous')).not.toBeInTheDocument();
    expect(queryByLabelText('Next')).not.toBeInTheDocument();
  });

  it('renders arrow buttons when arrows is true', () => {
    const { getByLabelText } = render(<Carousel arrows={true} />);
    expect(getByLabelText('Previous')).toBeInTheDocument();
    expect(getByLabelText('Next')).toBeInTheDocument();
  });
});
