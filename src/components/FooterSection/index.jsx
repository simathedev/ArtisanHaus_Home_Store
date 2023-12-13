import React from 'react';
import Links from './Links';
import styles from './style.module.scss';

export default function index() {
  return (
    <div className={`${styles.footer}`}>
    <Links/>  
    </div>
  )
}
