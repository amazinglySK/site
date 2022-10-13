import styles from "./PostCard.module.css";

export default function PostCard({ readingTime, title, desc, link }) {
    return (
        <>
            <a href={`/blog/${link}`}>
                <div className={styles.card}>
                    <p className={styles.reading_time}>{readingTime} min</p>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.description}>{desc}</p>
                </div>
                <hr />
            </a>
        </>
    );
}
