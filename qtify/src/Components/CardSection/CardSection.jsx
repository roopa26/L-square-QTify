import React, { useState } from "react";
import Card from '../Card/Card';
import styles from './CardSection.module.css';
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";

const CardSection = ({data, sectionTitle, type}) => {
    const [onToggle, setOnToggle] = useState(true);

    const handleClick = () => {
        setOnToggle((prevState) => !prevState);
    }

    return(
        <div>
            <div className={styles.header}>
                <h3>{sectionTitle}</h3>
                <h4 onClick={handleClick} className={styles.toggleText}>{!onToggle? "Collapse" : "Show all"}</h4>
            </div>
            {data && data.length === 0 ? (
                <CircularProgress/>
            ) : (
                <div className={styles.cardWrapper}>
                    {!onToggle ? (
                      <div className={styles.wrapper}>
                        {data && data.map((element) => (<Card key={element.id} data={element} type={type}/>))}
                      </div>  
                    ): (
                        <Carousel data={data} renderComponent={(element) => (<Card key={element.id} data={element} type={type}/>)} />
                    )}
                </div>
            )}
        </div>
    )
}

export default CardSection;