/**
 *
 * Playground
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import Tile from '../../components/Tile';
import TilesRow from '../../components/TilesRow';

export function Playground({ playground }) {
  if (!playground) {
    return null;
  }
  const renderRow = (tiles, rowIndex) => (
    <TilesRow key={`row-${rowIndex}`} className="Playground__row">
      {tiles.map((value, index) => (
        // eslint-disable-next-line
        <Tile key={`tile-${index}`} value={value} />
      ))}
    </TilesRow>
  );
  return <div>{playground.map(renderRow)}</div>;
}

Playground.propTypes = {
  playground: PropTypes.arrayOf(PropTypes.array),
};

const withConnect = connect(({ playground }) => ({ playground }));

export default compose(withConnect)(Playground);
