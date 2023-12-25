import React from "react";
import HeadPhoneImage from "../../assests/vibrating-headphone.png"
import styles from "./Hero.module.css";

const HeroSection = () =>{
    return(
        <div className={styles.headerWrapper}>
            <div>
                <h1>100 Thousand Songs, ad-free</h1>
                <h1>Over thousands podcast episodes</h1>
            </div>
            <div>
                <img src={HeadPhoneImage} alt='Head Phone'/>
            </div>
        </div>
    )
}
export default HeroSection;