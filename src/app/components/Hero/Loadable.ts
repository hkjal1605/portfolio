/**
 *
 * Asynchronously loads the component for Hero
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Hero = lazyLoad(
  () => import('./index'),
  module => module.Hero,
);
