import Post from "@components/Post/Post";
import { useRouter } from "next/router";

export default function PostPage() {
    return (
        <>
            <div className="container post-page">
                <Post />
            </div>
        </>
    );
}
