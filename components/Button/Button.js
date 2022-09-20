import styles from "./Button.module.css";

export default function Button({ link, text }) {
    return (
        <a href={link} className={styles.button}>
            {text}
        </a>
    );
}
