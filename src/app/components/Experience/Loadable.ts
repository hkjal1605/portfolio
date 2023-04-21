/**
 *
 * Asynchronously loads the component for Experience
 *
 */

import { lazyLoad } from 'utils/loadable';

export const Experience = lazyLoad(
  () => import('./index'),
  module => module.Experience,
);
