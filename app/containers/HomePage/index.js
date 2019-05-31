/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Controls from '../Controls';
import Playground from '../Playground';

export default function HomePage() {
  return (
    <>
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
      <Playground />
      <Controls />
    </>
  );
}
