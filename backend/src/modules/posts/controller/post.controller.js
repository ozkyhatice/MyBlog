import { createPostService } from "../service/post.service.js";
import { isValidId } from "../../auth/service/auth.service.js";
export async function createPostController(request, reply) {
    try {
        const { title, content } = request.body;
        const authorId = request.user.id;
        if (!await isValidId(authorId)) {
            return reply.code(400).send({ message: "Invalid author ID" });
        }
        if (!title || !content) {
            return reply.code(400).send({ message: "Title and content are required" });
        }
        
        const post = await createPostService(title, content, authorId);
        if (!post) {
            return reply.code(400).send({ message: "Failed to create post" });
        }
        return reply.code(201).send({messsage: "Post created successfully", post});
    } catch (error) {
        reply.code(500).send({ message: "Internal Server Error", error: error.message });
    }
}