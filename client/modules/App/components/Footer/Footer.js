import React from 'react';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Footer.css';



export function Footer() {
  return (
    <div className={styles.footer}>
      <p>Kanban app for Kodilla by Paweł Butra 2019</p>
    </div>
  );
}

export default Footer;
