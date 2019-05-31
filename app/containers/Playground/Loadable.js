/**
 *
 * Asynchronously loads the component for Playground
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
