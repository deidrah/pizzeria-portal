import React from 'react';
import styles from '../Dashboard/Dashboard.scss';
import { Link } from 'react-router-dom';

const Dashboard = () => (
  <div className={styles.component}>
    <h2>Dashboard view</h2>
    <Link to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen</Link>
    <Link to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables</Link>
    <Link to={`${process.env.PUBLIC_URL}/ordering`} activeClassName='active'>Ordering</Link>
  </div>
);

export default Dashboard;