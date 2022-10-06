import styles from "./PostCard.module.css";

export default function PostCard({ title, desc, date, link }) {
    return (
        <>
            <a href={`/blog/${link}`} target="_blank">
                <div className={styles.post}>
                    <h2 className={styles.date}>{date}</h2>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.desc}>{desc}</p>
                </div>
            </a>
        </>
    );
}
