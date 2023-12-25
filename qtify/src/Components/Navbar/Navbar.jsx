import React from "react";
import Logo from "../Logo/Logo";
import SearchBar from "../Search/Search";
import ButtonComponent from "../Button/Button";
import styles from "./Navbar.module.css";

const Navbar = (searchData) => {
    return(
        <div className={styles.navbar}>
            <Logo/>
            <SearchBar placeholder="Search a album of your choice"/>
            <ButtonComponent>Give Feedback</ButtonComponent>
            </div>
    )
}

export default Navbar