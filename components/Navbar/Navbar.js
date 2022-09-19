import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <div className={styles.nav}>
            <h1>
                amazingly<span className="special">SK</span>
            </h1>
        </div>
    );
}
