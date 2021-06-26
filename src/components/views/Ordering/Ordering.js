import React from 'react';
import styles from './Ordering.scss';
import {Link} from 'react-router-dom';

const Ordering = () => (
  <div className={styles.component}>
    <Link to={`${process.env.PUBLIC_URL}/Ordering/order/new`} activeClassName='active'>New order</Link>
    <Link to={`${process.env.PUBLIC_URL}/ordering/order/123abc`} activeClassName='active'>Orders</Link>
    <h2>Ordering view</h2>
  </div>
);
export default Ordering;