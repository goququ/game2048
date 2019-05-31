/**
 *
 * Controls
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectControls from './selectors';
import { onKeydown } from './actions';
import reducer from './reducer';
import saga from './saga';

export function Controls({ onKeyDownHandler }) {
  useInjectReducer({ key: 'playground', reducer });
  useInjectSaga({ key: 'playground', saga });

  useEffect(() => {
    document.addEventListener('keydown', onKeyDownHandler, true);

    return () =>
      document.removeEventListener('keydown', onKeyDownHandler, false);
  });

  return null;
}

Controls.propTypes = {
  onKeyDownHandler: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  controls: makeSelectControls(),
});

function mapDispatchToProps(dispatch) {
  return {
    onKeyDownHandler: e => dispatch(onKeydown(e)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Controls);
