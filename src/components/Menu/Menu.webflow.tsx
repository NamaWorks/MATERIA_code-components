// Main navigation menu with hover-triggered dropdowns
// Prop types reference: https://developers.webflow.com/code-components/reference/prop-types
//
// ─── WEBFLOW DESIGNER USAGE ──────────────────────────────────────────────────
//
// 1. ADDING THE COMPONENT
//    In the Add panel (left sidebar) → Components section → drag "Menu" onto
//    any page. Place it at the very top of the page body.
//
// 2. LOGO SLOT
//    After adding, open the Navigator and look for the "Logo" slot inside Menu.
//    Drag any Webflow element (image, link block, div) into that slot to set
//    the navbar logo. The slot renders on the left side of the nav bar.
//
// 3. NAV ITEMS (CMS binding — pending)
//    navItems are not yet exposed as a Webflow prop. They will be bound to a
//    CMS Collection once the CMS integration is implemented. For now, pass
//    them programmatically or hardcode them in Menu.tsx for preview purposes.
//    Expected shape per item:
//      { name, slug, link, submenu?: 'products' | 'projects' | 'none' | null }
//
// 4. ANIMATION CSS VARIABLES
//    The component reads two CSS variables for transitions. Set these on the
//    <body> or a wrapper element in Webflow's Custom CSS panel:
//      --anim-duration: 300ms;
//      --anim-ease:     cubic-bezier(0.4, 0, 0.2, 1);
//
// 5. SSR
//    ssr: false — this component uses browser-only APIs (hover state, timers)
//    and must not be server-rendered.
//
// ─────────────────────────────────────────────────────────────────────────────

import { declareComponent } from '@webflow/react';
import { props } from '@webflow/data-types';
import { Menu } from './Menu';

export default declareComponent(Menu, {
  name: 'Menu',
  description: 'Main navigation menu with hover-triggered Proyectos and Productos submenus',
  group: 'Components',
  options: {
    ssr: false,
  },
  props: {
    logo: props.Slot({ name: 'Logo' }),
  },
});
