import styles from "./Post.module.css";
import { useEffect, useState } from "react";
import { GetAPost } from "@contentful/postHandlers";

export default function Post() {
    let [isLoaded, setLoaded] = useState(true);
    let [data, setData] = useState({ fields: {} });

    useEffect(() => {
        let slug = window.location.pathname.match(/[^\/]+/g).at(-1);
        setLoaded(false);
        console.log(slug);
        GetAPost(slug).then((d) => {
            setLoaded(true);
            setData(d);
        });
    }, []);

    let format_date = new Date(data.fields.createdAt);

    if (!isLoaded) return <div>Loading...</div>;

    return (
        <>
            <h1 className={styles.date}>
                {format_date.toLocaleDateString("en-gb")}
            </h1>
            <h1 className={styles.title}>{data.fields.title}</h1>
            <p className={styles.content}>{data.fields.content}</p>
        </>
    );
}
