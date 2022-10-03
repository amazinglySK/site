import axios from "axios";
import Navbar from "@components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "@styles/blog.module.css";

async function GetContents(slug) {
    setTimeout(() => {}, 3000);
    return {
        title: "Hello",
        content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque numquam recusandae veritatis molestiae facere amet, nulla hic quis nisi laborum fugit nostrum debitis! Sapiente iusto eos quo magni reprehenderit voluptas ab optio sed, vitae possimus non, a explicabo asperiores iste inventore, pariatur ex nobis? Quibusdam non nam ducimus excepturi et.",
        date: "23/02/2007",
        link: slug,
        key: "abcd123",
    };
}

export default function PostPage() {
    let slug = useRouter().pathname;
    let [isLoaded, setLoaded] = useState(true);
    let [data, setData] = useState({});

    useEffect(() => {
        setLoaded(false);
        GetContents(slug).then((d) => {
            setLoaded(true);
            setData(d);
        });
    }, []);

    if (!isLoaded) return <div>Loading...</div>;

    return (
        <>
            <Navbar></Navbar>
            <div className={`container ${styles.post}`}>
                <h1 className={styles.date}>{data.date}</h1>
                <h1 className={styles.title}>{data.title}</h1>
                <p className={styles.content}>{data.content}</p>
            </div>
        </>
    );
}
