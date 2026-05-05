// Item of a dropdown group with its animations already integrated and to be used in coordination with the Webflow CMS data
// Import the raw React component, never the .webflow.tsx wrapper.

import type { Meta, StoryObj } from '@storybook/react-vite';
import { DropdownItem } from './DropdownItem';

const meta: Meta<typeof DropdownItem> = {
  title: 'Components/DropdownItem',
  component: DropdownItem,
  argTypes: {
    description: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof DropdownItem>;

export const Default: Story = {
  args: {
    index: '001.',
    label: 'Lorem ipsum dolor sit',
    description:
      'Natural materials and refined craftsmanship come together to create spaces that are both timeless and contemporary. Each element is selected for its tactile quality and visual depth.',
  },
};

export const WithDescription: Story = {
  args: {
    index: '002.',
    label: 'Craftsmanship & materials',
    description:
      'Natural materials and refined craftsmanship come together to create spaces that are both timeless and contemporary. \n\nEach element is selected for its tactile quality and visual depth.',
  },
};

export const LongLabel: Story = {
  args: {
    index: '003.',
    label: 'A longer label to see how the row handles wider text',
    description:
      'Natural materials and refined craftsmanship come together to create spaces that are both timeless and contemporary.',
  },
};
