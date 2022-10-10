const contentful = require("contentful");

const client = contentful.createClient({
    space: process.env["NEXT_PUBLIC_CONTENTFUL_SPACE_ID"],
    accessToken: process.env["NEXT_PUBLIC_CONTENTFUL_API_TOKEN"],
});

export let GetPosts = async (current_iter) => {
    const lim = 5;
    let skipCount = Number(lim * current_iter);
    let res = await client.getEntries({
        content_type: "post",
        select: "sys.id,fields.title,fields.desc,fields.createdAt,fields.slug,fields.readingTime",
        skip: skipCount,
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
