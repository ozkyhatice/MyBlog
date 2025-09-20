import fp from "fastify-plugin";
import jwt from "@fastify/jwt";

export default fp (async (fastify) => {
    fastify.register(jwt, {
        secret: "supersecret",
        sign: {expiresIn: "1d"}
    });

    fastify.decorate("authenticate", async (request, reply) => {
        try {
            await request.jwtVerify();
        } catch (err) {
            reply.code(401).send({message: "Unauthorized"});
        }
    });
});

export const verifyToken = async (request, reply) => {
    try {
        await request.jwtVerify();
    } catch (err) {
        reply.code(401).send({message: "Unauthorized"});
    }
};

