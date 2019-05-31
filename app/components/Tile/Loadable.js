/**
 *
 * Asynchronously loads the component for Tile
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
