import styles from "./Post.module.css";
import { useEffect, useState } from "react";
import { GetAPost } from "@contentful/postHandlers";
import { remark } from "remark";
import Footer from "../Footer/Footer";
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

    if (!isLoaded || !content) return <div>Loading...</div>;

    return (
        <>
            <h2 className={styles.date}>{data.sys.createdAt.toDateString()}</h2>
            <h1 className={styles.title}>{data.fields.title}</h1>
            <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: content }}
            ></div>
            <p className = {styles.update}>Last updated on {data.sys.updatedAt.toDateString()}</p>
            <Footer></Footer>
        </>
    );
}
