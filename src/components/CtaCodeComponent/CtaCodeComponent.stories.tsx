// CTA prepared using code in order to add more dynamism and make it more appealing to the eye, making easier the attention grabbing function of it
// Import the raw React component, never the .webflow.tsx wrapper.

import type { Meta, StoryObj } from '@storybook/react-vite';
import { CtaCodeComponent } from './CtaCodeComponent';

const meta: Meta<typeof CtaCodeComponent> = {
  title: 'Components/CtaCodeComponent',
  component: CtaCodeComponent,
  args: {
    title: 'Contacta ahora',
    variant: 'black',
  },
};

export default meta;
type Story = StoryObj<typeof CtaCodeComponent>;

export const Default: Story = {
  args: {
    title: 'Contacta ahora',
    variant: 'black',
  },
};

export const Light: Story = {
  args: {
    title: 'Contacta ahora',
    variant: 'light',
  },
};

export const White: Story = {
  args: {
    title: 'Contacta ahora',
    variant: 'white',
  },
};

export const LongText: Story = {
  args: {
    title: 'Pide cita y descúbrelo en persona',
    variant: 'black',
  },
};
