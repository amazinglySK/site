import Navbar from "@components/Navbar/Navbar";
import Intro from "@components/Intro/Intro";
import Know from "@components/Know/Know";
import Invite from "@components/Invite/Invite";

export default function Home() {
    return (
        <div className="container">
            <Navbar />
            <main>
                <Intro />
                <Know />
                <Invite></Invite>
            </main>
        </div>
    );
}
