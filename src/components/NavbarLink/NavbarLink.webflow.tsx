// Navbar link with optional dropdown indicator dot.
// Prop types reference: https://developers.webflow.com/code-components/reference/prop-types
//
// ─── WEBFLOW DESIGNER USAGE ──────────────────────────────────────────────────
//
// 1. Drag NavbarLink into each Collection Item inside the "Nav Links" slot of Menu.
//
// 2. Set props on each NavbarLink instance:
//    - Label:         link text (e.g. PRODUCTOS)
//    - Href:          link URL
//    - Dropdown Data: bind to the same CMS field used for dropdown detection.
//                     When the value is "products" or "projects" the indicator
//                     dot appears and the component sets dropdown-data on the
//                     parent Collection Item automatically.
//                     Use "none" or leave empty for regular links.
//
// ─────────────────────────────────────────────────────────────────────────────

import { declareComponent } from '@webflow/react';
import { props } from '@webflow/data-types';
import { NavbarLink } from './NavbarLink';

export default declareComponent(NavbarLink, {
  name: 'NavbarLink',
  description: 'Navbar link with an optional dropdown indicator dot. Sets dropdown-data on its parent Collection Item automatically.',
  group: 'Components',
  options: {
    ssr: false,
  },
  props: {
    label: props.Text({ name: 'Label', defaultValue: 'LINK' }),
    href: props.Text({ name: 'Href', defaultValue: '#' }),
    dropdownData: props.Text({ name: 'Dropdown Data', defaultValue: 'none' }),
  },
});
