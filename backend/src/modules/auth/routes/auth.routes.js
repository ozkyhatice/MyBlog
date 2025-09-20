import { registerSchema, loginSchema } from "../schema/auth.schema.js";
import { registerController, loginController } from "../controller/auth.controller.js";
import { zodToJsonSchema } from "zod-to-json-schema";


export default async function authRoutes(fastify) {
    //REGISTER
    fastify.post('/register',
        {
            schema: {
                body: zodToJsonSchema(registerSchema)
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