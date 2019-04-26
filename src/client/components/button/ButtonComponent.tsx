import React, { PureComponent } from 'react';

import styles from './ButtonComponent.scss';

interface ButtonComponentProps {
  /** String of pizza name */
  pizza?: string;
}

export class ButtonComponent extends PureComponent<ButtonComponentProps> {
  render() {
    const { children, pizza } = this.props;
    return (
      <button type="submit" className={styles.button}>
        {children} {pizza}
      </button>
    );
  }
}

export default ButtonComponent;
