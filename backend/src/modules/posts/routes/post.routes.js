import { createPostSchema } from "../schema/post.schema.js";
import { createPostController } from "../controller/post.controller.js";
//CRUD operations for posts
export async function postRoutes(fastify) {
    // CREATE POST
    fastify.post('/create', 
        {
            preValidation: [fastify.authenticate],
            schema: createPostSchema
        }, createPostController
    );
    // READ POSTS
    // UPDATE POST
    // DELETE POST
}