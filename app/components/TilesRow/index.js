/**
 *
 * TilesRow
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTilesRow = styled.div`
  display: flex;
  justify-content: center;
`;

function TilesRow(props) {
  return <StyledTilesRow {...props} />;
}

TilesRow.propTypes = {};

export default memo(TilesRow);
