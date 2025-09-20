import prisma from "../../../plugins/db.js";
import bycrypt from "bcrypt"


export default async function registerService(username, email, password) {
    const hashedPassword = await bycrypt.hash(password, 10);
    return prisma.user.create({
        data: {
            username,
            email,
            password: hashedPassword
        }
    });
}

