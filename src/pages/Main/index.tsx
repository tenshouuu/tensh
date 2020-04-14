import React, { FunctionComponent } from 'react'

import styles from './styles.module.css'

export interface OwnProps {}

type Props = OwnProps;

const Main: FunctionComponent<Props> = (props) => {

  return (<div>
    hello world
  </div>);
};

export default React.memo(Main);
