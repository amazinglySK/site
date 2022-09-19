import Image from "next/image";
import styles from "./Intro.module.css";

export default function Intro() {
    return (
        <section>
            <div className={styles.left}>
                <h3>
                    Hey there 👋 ! I am Shashwat Krishna. A high school student,
                    ping pong player, and a coding enthusiast.{" "}
                </h3>
            </div>
            <div className={styles.right}>
                <Image src="/vercel.svg" width={200} height={200}></Image>
            </div>
        </section>
    );
}
