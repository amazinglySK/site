import styles from "./Home.module.css";
import Link from "next/link";

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
                    <li>
                        🧑‍🎓 CS Freshman at{" "}
                        <Link href="https://msu.edu" target="_blank">
                            MSU
                        </Link>{" "}
                        (Go Green!)
                    </li>
                    <li>🧑‍💻 Coding enthusiast</li>
                    <li>🏓🏸 Plays badminton and table tennis</li>
                    <li>🎾 Loves watching tennis</li>
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
                    </a>{" "}
                    (That's my spam. I might not respond)
                </p>
            </div>
            <div className={styles.right_container}>
                <img className={styles.pfp_image} src="/pfp.png" />
                <div className={styles.link_container}>
                    <a href="https://github.com/amazinglySK" target={"_blank"}>
                        GITHUB
                    </a>
                    <a href="/resume.pdf" target={"_blank"}>
                        RESUME
                    </a>
                </div>
            </div>
        </div>
    );
}
