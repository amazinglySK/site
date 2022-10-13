import Post from "@components/Post/Post";
import { useRouter } from "next/router";

export default function PostPage() {
    return (
        <>
            <div className="container post-page">
                <a href="/blog/">Back to the blog</a>
                <Post />
            </div>
        </>
    );
}
