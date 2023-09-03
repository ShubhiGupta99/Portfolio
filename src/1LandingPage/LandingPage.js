import styles from './LandingPage.module.css';
import data from './../data.json';

export default function LandingPage() {
  return (
    <div className={styles.landing_page_container}>
      <div className={styles.titleName}>
        <h1 className={styles.name}>{data.firstName} {data.lastName}</h1>
      </div>
      <div className={styles.titleDesc}>
        <h4>{data.home_desc_1} <br />
          {data.home_desc_2}<br />
          {data.home_desc_3}</h4>
      </div>
    </div>
  )
}
