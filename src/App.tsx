import React from 'react';
import './reset.css';

import Bot from './components/Bot';
import { mockData } from './constants/questions';
import styles from "./style.module.scss";

const App = () => (
  <div className={styles['wrapper']}>
    <Bot data={mockData}/>
  </div>
);

export default App;
