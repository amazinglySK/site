import styles from "./Intro.module.css";

export default function Intro() {
    return (
        <section className={styles.intro}>
            <img src="/pfp.png" alt="" className={styles.pfp} />
            <h3 className={styles.intro_line}>
                Hey there 👋 ! I am Shashwat Krishna. A{" "}
                <span className="special">high school </span> student,{" "}
                <span className="special">ping pong</span> player, and a{" "}
                <span className="special">coding</span> enthusiast.
            </h3>
        </section>
    );
}
