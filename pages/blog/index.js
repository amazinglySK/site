import Post from "@components/Post/Post";
import Navbar from "@components/Navbar/Navbar";
import { useEffect, useState } from "react";
// import styles from "@styles/blog.module.css";
import axios from "axios";

async function GetPosts() {
    return [
        {
            title: "Hello",
            desc: "Checkin' out",
            date: "23/02/2007",
            link: "1234",
            key: "abcd123",
        },
        {
            title: "Hello",
            desc: "Checkin' out",
            date: "23/02/2007",
            link: "1234",
            key: "320cd#",
        },
    ];
}

export default function Blog() {
    let [isLoaded, setLoaded] = useState(false);
    let [data, setData] = useState([]);

    useEffect(() => {
        GetPosts().then((posts) => {
            setData(posts);
            setLoaded(true);
        });
    }, []);

    return (
        <>
            <Navbar></Navbar>
            <div className="container">
                {isLoaded &&
                    data.map((post) => {
                        return (
                            <Post
                                title={post.title}
                                desc={post.desc}
                                date={post.date}
                                link={post.link}
                                key={post.key}
                            ></Post>
                        );
                    })}
            </div>
        </>
    );
}
