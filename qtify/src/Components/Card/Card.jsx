import React from "react";
import styles from "./Card.module.css";
import Chip from '@mui/material/Chip';
import { Tooltip } from "@mui/material";

function Card({data, type}){
    const getCard = () => {
        switch(type){
            case "album" : 
            const {follows, image: albumImage, title: albumTitle, slug, songs} = data;
            return (   
                <Tooltip title={`${songs.length} songs`} placement="top" arrow> 
                <div className={styles.wrapper}>
                <a href={`/album/${slug}`}>  
                <div className={styles.card}>
                    <img src={albumImage} alt="song" loading="lazy"/>
                    <div className={styles.banner}>
                        <div className={styles.pill}>
                            <Chip label={`${follows} Follows`} size="small" className={styles.chip} />
                        </div>
                    </div>
                </div>
                </a>
                <div className={styles.titleWrapper}>
                    <p>{albumTitle}</p>
                </div>
                </div>
                </Tooltip> 
            )
            case "songs" : const {likes, image: songImage, title: songTitle} = data;
            return (
                <div className={styles.wrapper}>
                <div className={styles.card}>
                    <img src={songImage} alt="song" loading="lazy"/>
                    <div className={styles.banner}>
                        <div className={styles.pill}>
                            <Chip label={`${likes} Likes`} size="small" className={styles.chip} />
                        </div>
                    </div>
                </div>
                <div className={styles.titleWrapper}>
                    <p>{songTitle}</p>
                </div>
            </div>
            )
            default : return <></>
        }
    }

    return getCard();
}

export default Card;