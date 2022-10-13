const contentful = require("contentful");

const client = contentful.createClient({
    space: process.env["NEXT_PUBLIC_CONTENTFUL_SPACE_ID"],
    accessToken: process.env["NEXT_PUBLIC_CONTENTFUL_API_TOKEN"],
});

export let GetPosts = async () => {
    const lim = 5;
    let res = await client.getEntries({
        content_type: "post",
        select: "sys.id,fields.title,fields.desc,fields.createdAt,fields.slug,fields.readingTime",
        limit: lim,
    });
    return res.items;
};

export let GetAPost = async (slug) => {
    let res = await client.getEntries({
        content_type: "post",
        select: "fields.title,fields.content,fields.createdAt,fields.slug",
        "fields.slug": slug,
    });
    for (const i of res.items) {
        if (i.fields.slug === slug) {
            return i;
        }
    }
    return res.items[0];
};

export let GetAllPosts = async () => {
    let res = await client.getEntries({
        content_type: "post",
        select: "sys.id,fields.title,fields.desc,fields.createdAt,fields.slug,fields.readingTime",
    });
    return res.items;
};
