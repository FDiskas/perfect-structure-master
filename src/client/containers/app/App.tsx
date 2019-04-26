import * as React from 'react';

import styles from './App.scss';

import { ButtonComponent } from '~components/button/ButtonComponent';

export const App = () => (
  <div className={styles.app}>
    Hello React.<ButtonComponent>This is button</ButtonComponent>
  </div>
);
