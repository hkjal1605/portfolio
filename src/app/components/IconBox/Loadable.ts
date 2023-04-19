/**
 *
 * Asynchronously loads the component for IconBox
 *
 */

import { lazyLoad } from 'utils/loadable';

export const IconBox = lazyLoad(
  () => import('./index'),
  module => module.IconBox,
);
