import type { Meta, StoryObj } from '@storybook/react-vite';
import { NavbarLink } from './NavbarLink';

const meta: Meta<typeof NavbarLink> = {
  title: 'Components/NavbarLink',
  component: NavbarLink,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'dark' },
  },
};

export default meta;
type Story = StoryObj<typeof NavbarLink>;

export const Default: Story = {
  args: { label: 'NOSOTROS', href: '#' },
};

export const WithIndicator: Story = {
  args: { label: 'PRODUCTOS', href: '#', dropdownData: 'products' },
};

export const AllLinks: Story = {
  render: () => (
    <div className="flex items-center gap-[60px]">
      <NavbarLink label="NOSOTROS" href="#" />
      <NavbarLink label="PROYECTOS" href="#" dropdownData="projects" />
      <NavbarLink label="PRODUCTOS" href="#" dropdownData="products" />
      <NavbarLink label="PROFESIONALES" href="#" />
      <NavbarLink label="STOCK" href="#" />
    </div>
  ),
};
