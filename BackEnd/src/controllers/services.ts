import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getService = async () => {
    try {
        const getServices = prisma.services.findMany()
        return getServices
    } catch (error) {
        return "error getService controller"
    }
}
