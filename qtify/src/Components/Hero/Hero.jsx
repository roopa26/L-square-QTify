import React from "react";
import HeadPhoneImage from "../../assests/vibrating-headphone.png"
import styles from "./Hero.module.css";

const HeroSection = () =>{
    return(
        <div className={styles.headerWrapper}>
            <div className={styles.contentWrapper}>
                <div className={styles.content}>100 Thousand Songs, ad-free</div>
                <div className={styles.content}>Over thousands podcast episodes</div>
            </div>
            <div className={styles.imageStyle}>
                <img src={HeadPhoneImage} alt='Head Phone'/>
            </div>
        </div>
    )
}
export default HeroSection;