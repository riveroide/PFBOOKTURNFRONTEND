import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllBusiness = async () => {
    try {
        const result = await prisma.business.findMany()
        return result
    } catch (error) {
        return error
    }
    
    
}