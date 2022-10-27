import styles from "./Home.module.css";
import Link from "next/link";
import Footer from "../Footer/Footer";

export default function HomePage() {
    return (
        <div className={styles.split_container}>
            <div className={styles.left_container}>
                <h1>
                    Hey I am <span className="special">Shashwat</span> !
                </h1>
                <p>Who am I ?</p>
                <ul className={styles.list}>
                    <li>📍 Sharjah, UAE (Indian from 💖)</li>
                    <li>🧑‍🎓 High school student (a tech & science nerd)</li>
                    <li>🧑‍💻 Coding enthusiast</li>
                    <li>🏓 Table tennis player</li>
                    <li>🤝 Freelance coder</li>
                </ul>
                <p>
                    Checkout my blog : <Link href="/blog">stylus</Link>
                </p>
                <p>Feel free to contact me for any project ideas/discussion</p>
                <p>
                    Email me at :{" "}
                    <a href="mailto:amazinglyskbiz@gmail.com">
                        amazinglyskbiz@gmail.com
                    </a>
                </p>
            </div>
            <div className={styles.right_container}>
                <img className={styles.pfp_image} src="/pfp.png" />
                <div className={styles.link_container}>
                    <a
                        href="https://www.polywork.com/amazinglysk"
                        target={"_blank"}
                    >
                        POLYWORK
                    </a>
                    <a href="https://github.com/amazinglySK" target={"_blank"}>
                        GITHUB
                    </a>
                </div>
            </div>
        </div>
    );
}
