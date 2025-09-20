import {z} from "zod";

const UserSchema = z.object( {
    username:   z.string().min(3),
    email:      z.string().email(),
    password:   z.string()
                .min(6)
                .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
                .regex(/[a-z]/, "Password must contain at least one lowercase letter")
                .regex(/[0-9]/, "Password must contain at least one number")
                .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character")
})

export const registerSchema = UserSchema;

export const loginSchema = UserSchema.pick(
    {
        email: true,
        password: true
    }
)