import PostCard from "@components/PostCard/PostCard";
import { useEffect, useState } from "react";
import { GetPosts } from "@contentful/postHandlers";

export default function Blog() {
    let [isLoaded, setLoaded] = useState(true);
    let [data, setData] = useState([]);

    useEffect(() => {
        setLoaded(false);
        GetPosts(0)
            .then((posts) => {
                console.log(posts);
                setData(posts);
            })
            .finally(setLoaded(true));
    }, []);

    if (!isLoaded) return <div>Loading...</div>;
    return (
        <>
            <div className="container">
                <h1 className="post-page-title">stylus (/ˈstʌɪləs/) : 🖋️</h1>
                {data.map((post) => {
                    return (
                        <PostCard
                            title={post.fields.title}
                            desc={post.fields.desc}
                            readingTime={post.fields.readingTime}
                            link={post.fields.slug}
                            id={post.sys.id}
                        />
                    );
                })}
            </div>
        </>
    );
}
