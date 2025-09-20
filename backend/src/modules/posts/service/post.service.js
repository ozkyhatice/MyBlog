import prisma from "../../../plugins/db.js";

export async function createPostService(title, content, authorId) {
    if (!title || !content || !authorId) {
        return null;
    }
    return prisma.post.create({
        data: {
            title,
            content,
            authorId
        }
    });
}