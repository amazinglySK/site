import styles from "./Home.module.css";
import Link from "next/link";

export default function HomePage() {
    return (
        <div className={styles.split_container}>
            <div className={styles.left_container}>
                <h1>
                    Hey I am <span className="special">Shashwat</span> !
                </h1>
                <ul className={styles.list}>
                    <li>📍 East Lansing, MI</li>
                    <li>
                        🧑‍🎓 CS & Math major at{" "}
                        <Link href="https://msu.edu" target="_blank">
                            MSU
                        </Link>{" "}
                        (Go Green!)
                    </li>
                    <li>🤝 Freelance developer</li>
                </ul>
                <blockquote className={styles.quote}>
                    "First part of your life you <strong>learn</strong>; second part of your life you <strong>earn</strong>; third part of your life you <strong>return</strong>."
                    <br />
                    — Denzel Washington
                </blockquote>
                <p>
                    Checkout my blog: <Link href="/blog">stylus</Link>
                    {" "}
                    (I write; sometimes...)
                </p>
				
                <p>Feel free to contact me for any project ideas/discussion</p>
                <p>
                    Email me at:{" "}
                    <a href="mailto:krish183@msu.edu">
                        krish183@msu.edu
                    </a>
                </p>
            </div>
            <div className={styles.right_container}>
                <img className={styles.pfp_image} src="/pfp.jpg" />
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
