// Item of a dropdown group with its animations already integrated and to be used in coordination with the Webflow CMS data
// Prop types reference: https://developers.webflow.com/code-components/reference/prop-types

import { declareComponent } from '@webflow/react';
import { props } from '@webflow/data-types';
import { DropdownItem } from './DropdownItem';

export default declareComponent(DropdownItem, {
  name: 'DropdownItem',
  description:
    'Item of a dropdown group with its animations already integrated and to be used in coordination with the Webflow CMS data',
  group: 'Components',
  options: {
    ssr: true,
  },
  props: {
    index: props.Text({
      name: 'Index',
      defaultValue: '001.',
    }),
    label: props.Text({
      name: 'Label',
      defaultValue: 'Lorem ipsum dolor sit',
    }),
    description: props.RichText({
      name: 'Description',
      defaultValue:
        'Natural materials and refined craftsmanship come together to create spaces that are both timeless and contemporary.',
    }),
  },
});
