import "@styles/global.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
                <meta name="description" content="amazinglysk's website 🌐!"/>
                <meta property="og:url" content="https://amazinglysk.netlify.app"/>
                <meta property="og:type" content="website"/>
                <meta property="og:title" content="amazinglySK"/>
                <meta property="og:description" content="amazinglysk's website 🌐!"/>
                <meta property="og:image" content="/og_img.png"/>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta property="twitter:domain" content="amazisnglysk.netlify.app"/>
                <meta property="twitter:url" content="https://amazinglysk.netlify.app"/>
                <meta name="twitter:title" content="amazinglySK"/>
                <meta name="twitter:description" content="amazinglysk's website 🌐!"/>
                <meta name="google-site-verification" content="3rvFdWCNXsKUzbaP0vAkBdaZPdkdIzO_PKry2ElJBW8" />
                <meta name="twitter:image" content="/og_img.png"/>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
