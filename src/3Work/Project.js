import React, { useState } from 'react';
import styles from './Work.module.css';
import arrow from '../Images/caret-right-solid.svg'
import dineIn from '../Images/dineIn.jpeg'
import dineInIphone from '../Images/iphone-11-mockup.png'


export default function Project({workDetail}){

     const [scrolled,setScrolled] = useState(false);

     function getImage(){
        if(workDetail.mockImage=='1'){
            return dineIn;
        }else return dineInIphone;
     }

    return(
        <div className={styles.mainContainer}>
            { !scrolled ? 
            <>
            <div className={styles.workContainer2}> 
            <h1>{workDetail.projectName}</h1>
            <p className={styles.description}>{workDetail.projectDesc}</p>
            </div>
            <div>
            <img src={arrow} className={styles.logo} onClick={()=> console.log('clicked')
                // setScrolled(!scrolled))
                }/>
            </div>
            </>
            : <div className={styles.mainContainer} style={{backgroundColor:'#E0D1A9'}}>
                 <div className={styles.workContainer2}> 
                 {/* <img src={dineIn} className={styles.img1}/> */}
                 <img src={getImage()} className={styles.img1}/>
                 </div>
            <div>
            <img src={arrow} className={styles.logo} onClick={()=> setScrolled(!scrolled)}/>
            </div>
                </div>}
        </div>
    )
}