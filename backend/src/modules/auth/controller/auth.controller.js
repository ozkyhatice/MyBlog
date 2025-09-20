import registerService from "../service/auth.service.js";

export async function registerController(request, reply) {
    try {
        const { username, email, password } = request.body;
        const user = await registerService( username, email, password );
        reply.code(201).send({message: "User registered successfully", user});
    } catch (error) {
        reply.code(500).send({message: "Internal Server Error", error: error.message});
    }
}