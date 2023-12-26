import React, { useEffect, useState } from "react";
import Card from '../Card/Card';
import styles from './CardSection.module.css';
import { CircularProgress } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import Filter from "../Filter/Filter";

const CardSection = ({data, sectionTitle, type, fetchFilter}) => {
    debugger;
    const [onToggle, setOnToggle] = useState(true);
    const [filter, setFilter] = useState([{key:"all",label:"All"}]);
    const [selectedFilterIndex, setSelectedFilterIndex] = useState(0);

    const showFilters = (filter.length > 1 && type === "songs");

    useEffect(()=>{
        if(fetchFilter){
            fetchFilter().then((response) => {
                const {data} = response;
                setFilter([...filter, ...data.data])
            });
        }
    },[])

    const cardToRender = data && data.filter((card) => (showFilters && selectedFilterIndex != 0 ? card.genre.key === filter[selectedFilterIndex].key:card))

    const handleClick = () => {
        setOnToggle((prevState) => !prevState);
    }

    return(
        <div>
            <div className={styles.header}>
                <h3>{sectionTitle}</h3>
                {type !== "songs" ?(<h4 onClick={handleClick} className={styles.toggleText}>{!onToggle? "Collapse" : "Show all"}</h4>) : null}
            </div>
            {showFilters && (<div className={styles.titleWrapper}><Filter filter={filter} selectedFilterIndex={selectedFilterIndex} setSelectedFilterIndex={setSelectedFilterIndex}/></div>)}
            {cardToRender && cardToRender.length === 0 ? (
                <CircularProgress/>
            ) : (
                <div className={styles.cardWrapper}>
                    {!onToggle ? (
                      <div className={styles.wrapper}>
                        {cardToRender && cardToRender.map((element) => (<Card key={element.id} data={element} type={type}/>))}
                      </div>  
                    ): (
                        <Carousel data={cardToRender} renderComponent={(element) => (<Card key={element.id} data={element} type={type}/>)} />
                    )}
                </div>
            )}
        </div>
    )
}

export default CardSection;