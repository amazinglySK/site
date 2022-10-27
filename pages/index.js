import HomePage from "@components/Home/Home";
import Footer from "@components/Footer/Footer";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>amazinglySK</title>
            </Head>
            <div className="container">
                <HomePage />
            </div>
            <Footer></Footer>
        </>
    );
}
