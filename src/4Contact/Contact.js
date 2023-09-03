import React from 'react';
import styles from './Contact.module.css';
import data from './../data.json';

export default function Contact() {
  return (
    <div data-anchor="page-contact">
      <main>
        <div className={styles.workContainer}>
          <h1 className={styles.title}>
            contact
          </h1>
         <div className={styles.imageContainer}>
          <a href={data.contact.mail} target="_blank" >
            <img src="./gmail.svg" alt='gmail' className={styles.logo}/>
            </a>
            <a href={data.contact.github} target="_blank" >
            <img src="./github.svg" alt='github' className={styles.logo}/>
            </a>
            <a href={data.contact.linkedin} target="_blank" >
            <img src="./linkedin.svg" alt='linkedin' className={styles.logo}/>
            </a>
         </div>
        </div>
      </main>
    </div>
  )
}
