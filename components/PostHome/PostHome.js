import { GetPosts } from "@contentful/postHandlers";
import PostCard from "@components/PostCard/PostCard";
import { useEffect, useState } from "react";

export default function PostHome() {
    let [isLoaded, setLoaded] = useState(true);
    let [data, setData] = useState([]);

    useEffect(() => {
        setLoaded(false);
        GetPosts().then((posts) => {
            setLoaded(true);
            setData(posts);
        });
    }, []);

    if (!isLoaded) return <div>Loading...</div>;
    return (
        <>
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
        </>
    );
}
