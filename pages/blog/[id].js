import Navbar from "@components/Navbar/Navbar";
import { useEffect, useState } from "react";
import styles from "@styles/blog.module.css";
import Loader from "@components/Loader/Loader";
import { GetAPost } from "lib/Contentful";
import Post from "@components/Post/Post";

export default function PostPage() {
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

    if (!isLoaded) return <Loader />;

    return (
        <>
            <Navbar></Navbar>
            <div className={`container ${styles.post}`}>
                <Post
                    title={data.fields.title}
                    content={data.fields.content}
                    date={data.fields.createdAt}
                />
            </div>
        </>
    );
}
