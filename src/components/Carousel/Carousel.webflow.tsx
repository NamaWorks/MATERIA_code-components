// Carousel to be used on galleries that will autoplay and carousel of logos or similar
// Prop types reference: https://developers.webflow.com/code-components/reference/prop-types

import { declareComponent, slots } from '@webflow/react';
import { props } from '@webflow/data-types';
import { Carousel } from './Carousel';

export default declareComponent(Carousel, {
  name: 'Carousel',
  description: 'Carousel to be used on galleries that will autoplay and carousel of logos or similar',
  group: 'Components',
  options: {
    ssr: true,
  },
  props: {
    arrows: props.Boolean({
      name: 'Show Arrows',
      defaultValue: false,
    }),
    speed: props.Number({
      name: 'Speed',
      defaultValue: 1,
    }),
  },
  slots: {
    children: slots.Children(),
  },
});
