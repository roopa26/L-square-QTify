import React from 'react';
import styles from "./HomePage.module.css";
import { useOutletContext } from 'react-router-dom';
import HeroSection from '../../Components/Hero/Hero';
import CardSection from '../../Components/CardSection/CardSection';

const HomePage = () => {
    const {data} = useOutletContext();
    const {topAlbum, newAlbum, songs} = data;

    return(
        <>
        <HeroSection/>
        <div className={styles.wrapper}>
            <CardSection data = {topAlbum.data} sectionTitle="Top Albums" type="album" />
            <CardSection data = {newAlbum.data} sectionTitle="New Albums" type="album" />
            {/* <CardSection data = {songs} sectionTitle="Songs" type="songs" /> */}
        </div>
        </>
    )
}

export default HomePage;