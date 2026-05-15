import type { Meta, StoryObj } from '@storybook/react-vite';
import { Menu } from './Menu';

// ─── Mock logo ───────────────────────────────────────────────────────────────

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

// ─── Mock nav links (simulates a Webflow Collection List) ─────────────────────
// Items with dropdown-data trigger the matching panel on hover.
// In Webflow this attribute is bound to a CMS Option field on the Collection Item.

const navLinkStyle =
  "font-['Helvetica_Neue'] text-[12px] font-normal text-white uppercase cursor-pointer hover:opacity-60 transition-opacity";

const mockNavLinks = (
  <>
    <a href="#nosotros" className={navLinkStyle}>NOSOTROS</a>
    <a href="#proyectos" className={navLinkStyle} {...{'dropdown-data': 'projects'}}>PROYECTOS</a>
    <a href="#productos" className={navLinkStyle} {...{'dropdown-data': 'products'}}>PRODUCTOS</a>
    <a href="#profesionales" className={navLinkStyle}>PROFESIONALES</a>
    <a href="#stock" className={navLinkStyle}>STOCK</a>
    <a href="#contacto" className={navLinkStyle}>W&nbsp;&nbsp;CONTACTO</a>
  </>
);

// ─── Mock proyectos dropdown content ─────────────────────────────────────────

const mockProyectosContent = (
  <div className="flex gap-[20px] p-[20px]">
    {[
      { index: '001.', name: 'Claudio Coello' },
      { index: '002.', name: 'Boadilla' },
      { index: '003.', name: 'Gral Oraa' },
      { index: '004.', name: 'Juan Bravo' },
      { index: '005.', name: 'Narvaez' },
    ].map(({ index, name }) => (
      <div key={index} className="flex flex-col gap-[8px]">
        <div className="w-[155px] h-[140px] bg-[#555]" />
        <span className="font-['Helvetica_Neue'] text-[8px] text-[#F9F8F5]">{index}</span>
        <span className="font-['Helvetica_Neue'] text-[16px] text-[#F9F8F5]">{name}</span>
      </div>
    ))}
    <div className="flex items-end ml-auto">
      <div className="bg-[#F9F8F5]/80 rounded-[1px] px-[8px] py-[6px]">
        <span className="font-['Helvetica_Neue'] text-[9px] text-black uppercase">VER TODOS LOS PROYECTOS</span>
      </div>
    </div>
  </div>
);

// ─── Mock productos dropdown content ─────────────────────────────────────────

const ProductosItem = ({ title, items }: { title: string; items: string[] }) => (
  <div className="flex gap-[22px]">
    <div className="w-[11px] h-[11px] rounded-[1px] bg-[#F9F8F5] shrink-0 mt-[2px]" />
    <div className="flex flex-col gap-[13px]">
      <span className="font-['Helvetica_Neue'] text-[20px] text-[#F9F8F5]">{title}</span>
      <span className="font-['Helvetica_Neue'] text-[14px] text-[#F9F8F5] leading-[1.3]">
        {items.join(', ')}
      </span>
    </div>
  </div>
);

const mockProductosContent = (
  <div className="grid grid-cols-4 gap-[30px]">
    <ProductosItem title="Mobiliario interior" items={['Salón', 'Sofás', 'Butacas', 'Mesas comedor', 'Mesas auxiliares', 'Sillas', 'Camas', 'Vitrinas']} />
    <ProductosItem title="Cocinas" items={['Mobiliario', 'Equipamiento interior', 'Encimeras y fregaderos', 'Electrodomésticos']} />
    <ProductosItem title="Baños" items={['Mobiliario', 'Encimeras y lavabos', 'Grifería', 'Bañeras', 'Sanitarios', 'Mamparas', 'Accesorios']} />
    <ProductosItem title="Vestidores y armarios" items={['Vestidores', 'Armarios', 'Elementos singulares']} />
    <ProductosItem title="Puertas" items={['Correderas', 'Pivotantes', 'Vatientes', 'Plegables']} />
    <ProductosItem title="Pavimentos" items={['Porcelanicos', 'Piedras naturales', 'Madera', 'Cementino', 'Vinílicos y fibra']} />
    <ProductosItem title="Iluminación" items={['Técnica', 'Decorativa', 'Aspecto natural']} />
    <ProductosItem title="Complementos" items={['Cortinas y estores', 'Alfombras', 'Espejos', 'Piezas singulares']} />
  </div>
);

// ─── Meta ─────────────────────────────────────────────────────────────────────

const meta: Meta<typeof Menu> = {
  title: 'Components/Menu',
  component: Menu,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Menu>;

// ─── Stories ──────────────────────────────────────────────────────────────────

export const Default: Story = {
  args: {
    logo: mockLogo,
    navLinks: mockNavLinks,
  },
};

export const ProyectosOpen: Story = {
  args: {
    logo: mockLogo,
    navLinks: mockNavLinks,
    proyectosContent: mockProyectosContent,
  },
};

export const ProductosOpen: Story = {
  args: {
    logo: mockLogo,
    navLinks: mockNavLinks,
    productosContent: mockProductosContent,
  },
};

export const NoLogo: Story = {
  args: {
    navLinks: mockNavLinks,
    proyectosContent: mockProyectosContent,
    productosContent: mockProductosContent,
  },
};

export const PageDemo: Story = {
  decorators: [
    (Story) => (
      <div className="relative min-h-screen bg-[#1a1a1a]">
        <Story />
        {/* Page content below — verifies navbar overlays rather than pushes */}
        <img
          src="https://picsum.photos/seed/42/1400/800"
          alt=""
          className="w-full object-cover"
        />
        <div className="p-[40px] text-white">
          <h1 className="text-[48px] font-['Helvetica_Neue'] mb-[20px]">Page content below navbar</h1>
          <p className="text-[16px] opacity-60">
            The navbar is position: absolute so it overlays this content without pushing it down.
            Hover over PROYECTOS or PRODUCTOS to verify the dropdown also overlays the image.
          </p>
          <div className="grid grid-cols-3 gap-[20px] mt-[40px]">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <img
                key={n}
                src={`https://picsum.photos/seed/${n + 20}/400/300`}
                alt=""
                className="w-full object-cover rounded-[2px]"
              />
            ))}
          </div>
        </div>
      </div>
    ),
  ],
  args: {
    logo: mockLogo,
    navLinks: mockNavLinks,
    proyectosContent: mockProyectosContent,
    productosContent: mockProductosContent,
  },
};

export const FullMenu: Story = {
  args: {
    logo: mockLogo,
    navLinks: mockNavLinks,
    proyectosContent: (
      <div className="flex gap-[20px] p-[20px]">
        {[1, 2, 3, 4, 5].map((n) => (
          <div key={n} className="flex flex-col gap-[8px]">
            <img
              src={`https://picsum.photos/seed/${n + 10}/155/140`}
              alt=""
              className="w-[155px] h-[140px] object-cover"
            />
            <span className="font-['Helvetica_Neue'] text-[8px] text-[#F9F8F5]">00{n}.</span>
            <span className="font-['Helvetica_Neue'] text-[16px] text-[#F9F8F5]">Proyecto {n}</span>
          </div>
        ))}
        <div className="flex items-end ml-auto">
          <div className="bg-[#F9F8F5]/80 rounded-[1px] px-[8px] py-[6px]">
            <span className="font-['Helvetica_Neue'] text-[9px] text-black uppercase">VER TODOS LOS PROYECTOS</span>
          </div>
        </div>
      </div>
    ),
    productosContent: mockProductosContent,
  },
};
