import styles from "./Post.module.css";
import Footer from "../Footer/Footer";

export default function Post({ content, created, updated, title }) {
    return (
        <>
            <h2 className={styles.date}>{created}</h2>
            <h1 className={styles.title}>{title}</h1>
            <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: content }}
            ></div>
            <p className={styles.update}>Last updated on {updated}</p>
            <Footer></Footer>
        </>
    );
}
