import PostCard from "@components/PostCard/PostCard";
import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { GetPosts } from "@contentful/postHandlers";

export default function Blog() {
    let [isLoaded, setLoaded] = useState(true);
    let [data, setData] = useState([]);

    useEffect(() => {
        setLoaded(false);
        GetPosts()
            .then((posts) => {
                setData(posts);
            })
            .finally(setLoaded(true));
    }, []);

    if (!isLoaded) return <div>Loading...</div>;
    return (
        <>
            <Head>
                <title>stylus | amazinglySK</title>
            </Head>
            <div className="container">
                <Link href="/">Back to the portfolio</Link>
                <h1 className="post-page-title">stylus (/ˈstʌɪləs/) : 🖋️</h1>
                {data.map((post) => {
                    return (
                        <PostCard
                            title={post.fields.title}
                            desc={post.fields.desc}
                            readingTime={post.fields.readingTime}
                            link={post.fields.slug}
                            tags={post.tags}
                            key={post.sys.id}
                        />
                    );
                })}
            </div>
        </>
    );
}
