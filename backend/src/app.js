import authRoutes from "./modules/auth/routes/auth.routes.js";
import {postRoutes} from "./modules/posts/routes/post.routes.js";
import jwt from "./plugins/jwt.js";
import security from "./plugins/security.js";

export default async function app(fastify) {
    //PLUGINS
    fastify.register(security);
    fastify.register(jwt);

    //ROUTES
    fastify.register(authRoutes, {prefix: "/api/auth"});
    fastify.register(postRoutes, {prefix: "/api/posts"});
}