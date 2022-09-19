import Image from "next/image";
import styles from "./Know.module.css";

export default function Know() {
    return (
        <section>
            <h3>Few things I know</h3>
            <div className={styles.langs}>
                <Image></Image>
                <Image></Image>
                <Image></Image>
                <Image></Image>
            </div>
        </section>
    );
}
