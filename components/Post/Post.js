import styles from "./Post.module.css";
import { useEffect, useState } from "react";
import { GetAPost } from "@contentful/postHandlers";
import { remark } from "remark";
import html from "remark-html";

export default function Post() {
    let [isLoaded, setLoaded] = useState(true);
    let [data, setData] = useState({ fields: {} });
    let [content, setContent] = useState("");
    useEffect(() => {
        setLoaded(false);
        let slug = window.location.pathname.match(/[^\/]+/g).at(-1);
        GetAPost(slug).then((d) => {
            setLoaded(true);
            setData(d);
            remark()
                .use(html)
                .process(d.fields.content)
                .then((result) => {
                    setContent(result.toString());
                });
        });
    }, []);

    let format_date = new Date(data.fields.createdAt);

    if (!isLoaded || !content) return <div>Loading...</div>;

    return (
        <>
            <h1 className={styles.date}>
                {format_date.toLocaleDateString("en-gb")}
            </h1>
            <h1 className={styles.title}>{data.fields.title}</h1>
            <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: content }}
            ></div>
        </>
    );
}
