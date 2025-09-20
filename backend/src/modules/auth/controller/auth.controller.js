import { registerService, loginService } from "../service/auth.service.js";
import { isUniqueUser } from "../service/auth.service.js";


export async function registerController(request, reply) {
    try {
        const { username, email, password } = request.body;
        if (!(await isUniqueUser(email, username))) {
            return reply.code(400).send({message: "Email or username already in use"});
        }
        else {
            const user = await registerService( username, email, password );
            // Generate JWT token
            const token = await reply.jwtSign({ id: user.id, username: user.username, email: user.email });
            reply.code(201).send({message: "User registered successfully", user, token});
        }
    } catch (error) {
        reply.code(500).send({message: "Internal Server Error", error: error.message});
    }
}

export async function loginController(request, reply) {
    try {
        const { email, password } = request.body;
        if (!email || !password) {
            return reply.code(400).send({message: "Email and password are required"});
        }
        else {
            const user = await loginService(email, password);
            if (!user) {
                return reply.code(401).send({message: "Invalid email or password"});
            }
            // Generate JWT token
            const token = await reply.jwtSign({ id: user.id, username: user.username, email: user.email });
            reply.code(200).send({message: "Login successful", user, token});
        }
    } catch (error) {
        reply.code(500).send({message: "Internal Server Error", error: error.message});
    }
}