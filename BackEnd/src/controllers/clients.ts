import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllClients = async () => {
    try {
        const result = await prisma.client.findMany()
        return result
    } catch (error) {
        return error
    }
    
    
}