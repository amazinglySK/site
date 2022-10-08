import Navbar from "@components/Navbar/Navbar";
import Post from "@components/Post/Post";

export default function PostPage() {
    return (
        <>
            <Navbar></Navbar>
            <div className="container">
                <Post />
            </div>
        </>
    );
}
