// Carousel to be used on galleries that will autoplay and carousel of logos or similar
// Import the raw React component, never the .webflow.tsx wrapper.

import type { Meta, StoryObj } from '@storybook/react-vite';
import { Carousel } from './Carousel';

const meta: Meta<typeof Carousel> = {
  title: 'Components/Carousel',
  component: Carousel,
  args: {
    arrows: false,
    speed: .5
  },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

const items = ['#D4C5B0', '#B0A090', '#8C7B6B', '#6B5C50', '#4A3F38'];

export const Default: Story = {
  render: (args) => (
    <Carousel {...args}>
      {items.map((color, i) => (
        <div
          key={i}
          style={{ background: color }}
          className="w-[300px] h-[200px] shrink-0 rounded-sm mr-[3px]"
        />
      ))}
    </Carousel>
  ),
};

export const WithArrows: Story = {
  args: { arrows: true },
  render: (args) => (
    <Carousel {...args}>
      {items.map((color, i) => (
        <div
          key={i}
          style={{ background: color }}
          className="w-[300px] h-[200px] shrink-0 rounded-sm mr-[3px]"
        />
      ))}
    </Carousel>
  ),
};
