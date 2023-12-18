import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assests/search-icon.svg";

const SearchBar = ({placeholder}) => {
    const onSubmit = (e) => {
        e.preventDefault();
    }

    return(
            <form className={styles.wrap} onSubmit={onSubmit}>
                <input type="text" placeholder={placeholder} className={styles.searchBar}/>
                <button type="submit" className={styles.button}>
                    <SearchIcon/>
                </button>
            </form>
    )
}

export default SearchBar;