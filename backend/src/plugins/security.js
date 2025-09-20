import fp from "fastify-plugin";
import helmet from "@fastify/helmet";
import cors from "@fastify/cors";
import rateLimit from "@fastify/rate-limit";
import formbody from "@fastify/formbody";

export default fp (async (fastify) => {
    fastify.register(helmet);
    fastify.register(cors, {
        origin: "http://localhost:3000"
    });
    fastify.register(rateLimit, {
        max: 100,
        timeWindow: "1 minute"
    });
    fastify.register(formbody);
});