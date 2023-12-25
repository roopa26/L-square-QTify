import React, { useState } from "react";
import Card from '../Card/Card';
import styles from './CardSection.module.css';
import { CircularProgress } from "@mui/material";

const CardSection = ({data, sectionTitle, type}) => {
    console.log(data);
    debugger;
    const [onToggle, setOnToggle] = useState(false);

    const handleClick = () => {
        setOnToggle((prevState) => !prevState);
    }

    return(
        <div>
            <div className={styles.header}>
                <h3>{sectionTitle}</h3>
                <h4 onClick={handleClick} className={styles.toggleText}>{!onToggle? "Collapse All" : "Show All"}</h4>
            </div>
            {data && data.length === 0 ? (
                <CircularProgress/>
            ) : (
                <div className={styles.cardWrapper}>
                    {!onToggle ? (
                      <div className={styles.wrapper}>
                        {data && data.map((element) => (<Card key={element.id} data={element} type={type}/>))}
                      </div>  
                    ): (null)}
                </div>
            )}
        </div>
    //     <div className={styles.topAlbumsWrapper}>
    //     <div className={styles.topAlbumsHeader}>
    //         <h1 className={styles.albumHeading}>
    //             {sectionTitle}
    //         </h1>
    //         <button className={`${styles.albumHeading} ${styles.buttonStyles}`} onClick={handleClick}>{onToggle?"Show All":"Collapse"}</button>
    //     </div>
    //   <div className={styles.cardGrouper}>
    //     {data.map((element, index) => (
    //       <Card key={element.id} data={element} type={type}/>
    //     ))}
    //   </div>
    //     </div>
    )
}

export default CardSection;