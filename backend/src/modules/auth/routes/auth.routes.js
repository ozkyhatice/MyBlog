import { registerSchema, loginSchema } from "../schema/auth.schema.js";
import { registerController, loginController } from "../controller/auth.controller.js";
import { zodToJsonSchema } from "zod-to-json-schema";

const registerBodySchema = zodToJsonSchema(registerSchema);

export default async function authRoutes(fastify) {
    //REGISTER
    fastify.post('/register',
        {
            schema: {
                body: registerBodySchema
            }
        }, registerController
    );

    //LOGIN
    fastify.post('/login', {
        schema: {
            body: zodToJsonSchema(loginSchema)
        }
    }, loginController
    );
};