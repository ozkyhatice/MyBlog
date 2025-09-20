import prisma from "../../../plugins/db.js";
import bycrypt from "bcrypt"

export async function isUniqueUser(email, username) {
    const user = await prisma.user.findUnique({
        where: { email }
    });
    const userName = await prisma.user.findUnique({
        where: { username }
    });
    if (user || userName) {
        return false;
    }
    return true;
}

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

