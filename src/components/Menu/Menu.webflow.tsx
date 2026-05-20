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
// 3. NAV LINKS SLOT (Collection List)
//    Drag a Collection List into the "Nav Links" slot. On each Collection Item
//    add a custom attribute named "dropdown-data" and bind it to a CMS Option field:
//      "projects" / "Projects"  → opens the Proyectos dropdown + shows indicator dot
//      "products" / "Products"  → opens the Productos dropdown + shows indicator dot
//      "none" or (absent)       → regular link, no dropdown, no indicator dot
//    Values are case-insensitive. The component uses native DOM listeners so
//    it works reliably with Webflow-rendered slot content.
//    The indicator dot (11×11px square, animates filter on hover) is injected
//    automatically — no extra setup needed.
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
    navLinks: props.Slot({ name: 'Nav Links' }),
    navColor: props.Text({ name: 'Nav Color', defaultValue: '#0e0e0e' }),
    navOpacity: props.Number({ name: 'Nav Opacity', defaultValue: 90 }),
    proyectosContent: props.Slot({ name: 'Proyectos Content' }),
    productosContent: props.Slot({ name: 'Productos Content' }),
  },
});
