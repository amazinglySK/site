import styles from "./Know.module.css";

export default function Know() {
    return (
        <section>
            <h3 className={styles.know_line}>
                Few <span className="special">things</span> I know
            </h3>
            <div className={styles.langs}>
                <img
                    src="/golang.png"
                    alt="golang logo"
                    className={styles.image}
                    // height={150}
                />
                <img
                    src="/rust.png"
                    alt="rustlang logo"
                    className={styles.image}
                    // height={150}
                />
                <img
                    src="/python.png"
                    alt="python logo"
                    className={styles.image}
                    // height={150}
                />
                <img
                    src="/javascript.png"
                    alt="javascript logo"
                    className={styles.image}
                    // height={150}
                />
            </div>
        </section>
    );
}
