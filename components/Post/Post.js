import styles from "./Post.module.css";

export default function Post({ title, desc, date, link }) {
    return (
        <>
            <a href={`/blog/${link}`} target="_blank">
                <div className={styles.post}>
                    <h1 className={styles.date}>{date}</h1>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.desc}>{desc}</p>
                </div>
            </a>
        </>
    );
}
