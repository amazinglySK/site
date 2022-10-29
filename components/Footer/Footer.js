import styles from "./Footer.module.css";

export default function Footer() {
    let year = new Date().getFullYear();
    return (
        <div className={styles.footer}>
            <span>
                Made with 💖 by{" "}
                <a href="https://github.com/amazinglysk">amazinglysk</a>
            </span>
            <span>&copy; Shashwat Krishna {year}</span>
        </div>
    );
}
