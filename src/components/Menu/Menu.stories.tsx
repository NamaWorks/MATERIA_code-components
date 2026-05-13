import type { Meta, StoryObj } from '@storybook/react-vite';
import { Menu } from './Menu';

const mockNavItems = [
  { name: 'Nosotros', slug: 'NOSOTROS', link: '#nosotros' },
  { name: 'Proyectos', slug: 'PROYECTOS', link: '#proyectos', submenu: 'projects' as const },
  { name: 'Productos', slug: 'PRODUCTOS', link: '#productos', submenu: 'products' as const },
  { name: 'Profesionales', slug: 'PROFESIONALES', link: '#profesionales' },
  { name: 'Stock', slug: 'STOCK', link: '#stock' },
  { name: 'W', slug: 'W', link: '#w' },
  { name: 'Contacto', slug: 'CONTACTO', link: '#contacto' },
];

const mockLogo = (
  <svg width="35" height="34" viewBox="0 0 35 34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Materia">
    <g clipPath="url(#story-m-clip)">
      <path d="M35 26.4907H8.22668" stroke="white" strokeWidth="0.58" strokeMiterlimit="10" />
      <path d="M27.5 33.9998L27.6863 7.58984" stroke="white" strokeWidth="0.58" strokeMiterlimit="10" />
      <path d="M0.0898438 0.0898438H7.58674" stroke="white" strokeWidth="0.58" strokeMiterlimit="10" />
      <path d="M0.0898438 0.0439453V7.58741" stroke="white" strokeWidth="0.58" strokeMiterlimit="10" />
      <path d="M8.35124 18.9563H7.58105V7.50586H8.64006L12.8761 15.6057L13.8481 17.5358H13.9165L14.8916 15.6057L19.1432 7.50586H20.1835V18.9563H19.4165V10.1385L19.432 8.66831H19.3637L18.6307 10.1385L14.345 18.2725H13.4227L9.13696 10.1385L8.40093 8.66831H8.33261L8.35124 10.1385V18.9563Z" fill="white" />
    </g>
    <defs>
      <clipPath id="story-m-clip">
        <rect width="35" height="34" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  args: {
    logo: mockLogo,
    navItems: mockNavItems,
  },
};

export const NoLogo: Story = {
  args: {
    navItems: mockNavItems,
  },
};
