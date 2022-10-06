const contentful = require("contentful");

const client = contentful.createClient({
    space: process.env["NEXT_PUBLIC_CONTENTFUL_SPACE_ID"],
    accessToken: process.env["NEXT_PUBLIC_CONTENTFUL_API_TOKEN"],
});

export let GetPosts = async (current_iter) => {
    const skip = 5;
    let skipCount = Number(skip * current_iter);
    let res = await client.getEntries({
        content_type: "post",
        select: "sys.id,fields.title,fields.desc,fields.createdAt,fields.slug",
        skip: skipCount,
        limit: skip,
    });
    return res.items;
};

export let GetAPost = async (slug) => {
    let res = await client.getEntries({
        content_type: "post",
        select: "fields.title,fields.content,fields.createdAt",
        "fields.slug": slug,
    });
    return res.items[0];
};
