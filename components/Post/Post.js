import styles from "./Post.module.css";

export default function Post({ title, content, date }) {
    let format_date = new Date(date);
    return (
        <>
            <h1 className={styles.date}>
                {format_date.toLocaleDateString("en-gb")}
            </h1>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.content}>{content}</p>
        </>
    );
}
