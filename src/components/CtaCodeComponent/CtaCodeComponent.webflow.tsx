// CTA prepared using code in order to add more dynamism and make it more appealing to the eye, making easier the attention grabbing function of it
// Prop types reference: https://developers.webflow.com/code-components/reference/prop-types

import { declareComponent } from '@webflow/react';
import { props } from '@webflow/data-types';
import { CtaCodeComponent } from './CtaCodeComponent';

export default declareComponent(CtaCodeComponent, {
  name: 'CtaCodeComponent',
  description:
    'CTA prepared using code in order to add more dynamism and make it more appealing to the eye, making easier the attention grabbing function of it',
  group: 'Components',
  options: {
    ssr: true,
  },
  props: {
    title: props.Text({
      name: 'Title',
      defaultValue: 'Contacta ahora',
    }),
    variant: props.Variant({
      name: 'Variant',
      defaultValue: 'black',
      options: ['black', 'light', 'white'],
    }),
  },
});
