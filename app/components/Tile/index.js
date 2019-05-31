/**
 *
 * Tile
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTile = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  background: orange;
  margin: 2px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 22px;

  &:empty {
    background: grey;
  }
`;

function Tile({ value }) {
  return <StyledTile>{value}</StyledTile>;
}

Tile.propTypes = {
  value: PropTypes.number,
};

export default memo(Tile);
