import React from 'react';
import styles from './Work.module.css';
import Project from './Project';

import data from './../data.json';

export default function Work() {
 
  function scrollToSection(link) {
    const anchor = document.querySelector(link);
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  function ProjectsList() {
    const listItems = data.work.map((number) =>
      <h2 key={number.projectId} onClick={() => scrollToSection(`#${number.projectId}`)}>{number.projectName}</h2>
    );
    return (
      <div className={styles.header2}>{listItems}</div>
    );
  }

  return (
    <div>
      <main>
        <div className={styles.workContainer}>
          <h1 className={styles.title}>
            work
          </h1>
          <ProjectsList />
        </div>
      </main>
      {/* <ul className={styles.listStyle}>
        {data.work.map((workDetail) =>
          <div id={workDetail.projectId} key={workDetail.projectId} data-anchor={workDetail.projectId}>
            <Project workDetail={workDetail} />
          </div>)
        }
      </ul> */}
    </div>
  )
}
