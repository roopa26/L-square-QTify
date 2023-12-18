import styles from "./Button.module.css";
const ButtonComponent = ({children}) => {
    return (
        <button className={styles.button}>{children}</button>
    )
}

export default ButtonComponent;