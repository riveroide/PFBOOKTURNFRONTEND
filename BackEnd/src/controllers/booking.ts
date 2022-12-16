import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllBookings = async () => {
    try {
        const result = await prisma.booking.findMany()
        return result
    } catch (error) {
        return error
    }
    
    
}