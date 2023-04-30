import Post from "@components/Post/Post";
import { GetAllPostSlugs, GetAPost } from "@contentful/postHandlers";
import Head from "next/head";
import Link from "next/link";
import { remark } from "remark";
import html from "remark-html";

export default function PostPage(props) {
    return (
        <>
            <Head>
                <title>{props.title}</title>
            </Head>
            <div className="container post-page">
                <Link href="/blog/">Back to the blog</Link>
                <Post
                    content={props.content}
                    updated={props.updated}
                    created={props.created}
                    title={props.title}
                />
            </div>
        </>
    );
}

export async function getStaticPaths() {
    let slugs = await GetAllPostSlugs();
    const paths = slugs.map(({ fields }) => {
        return { params: { id: fields.slug } };
    });
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    let slug = params.id;
    let data = await GetAPost(slug);
    let { title, content } = data.fields;
    let { createdAt, updatedAt } = data.sys;
    let parsed = await remark().use(html).process(content);
    let str_content = parsed.toString();
    return {
        props: {
            title,
            created: createdAt.toDateString(),
            updated: updatedAt.toDateString(),
            content: str_content,
        },
    };
}
