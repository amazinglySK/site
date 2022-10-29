import Head from "next/head";
import PostHome from "@components/PostHome/PostHome";
import Footer from "@components/Footer/Footer";
import Link from "next/link";

export default function Blog() {
    return (
        <>
            <Head>
                <title>stylus | amazinglySK</title>
            </Head>
            <main>
                <div className="container">
                    <Link href="/">Back to the portfolio</Link>
                    <h1 className="post-page-title">
                        stylus (/ˈstʌɪləs/) : 🖋️
                    </h1>
                    <PostHome />
                </div>
            </main>
            <Footer></Footer>
        </>
    );
}
