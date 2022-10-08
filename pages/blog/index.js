import PostCard from "@components/PostCard/PostCard";
import Navbar from "@components/Navbar/Navbar";
import { useEffect, useState } from "react";
import { GetPosts } from "@contentful/postHandlers";
import Loader from "@components/Loader/Loader";

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

    if (!isLoaded) return <Loader />;
    return (
        <>
            <Navbar></Navbar>
            <div className="container">
                {data.map((post) => {
                    let date = new Date(post.fields.createdAt);
                    return (
                        <PostCard
                            title={post.fields.title}
                            desc={post.fields.desc}
                            date={date.toLocaleDateString("en-gb")}
                            link={post.fields.slug}
                            id={post.sys.id}
                        />
                    );
                })}
            </div>
        </>
    );
}
