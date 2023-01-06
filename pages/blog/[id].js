import Post from "@components/Post/Post";
import Head from "next/head";
import Link from "next/link";

export default function PostPage() {
    return (
        <>
            <Head>
                <title>post | amazinglySK</title>
            </Head>
            <div className="container post-page">
                <Link href = "/blog/">Back to the blog</Link>
                <Post />
            </div>
        </>
    );
}
