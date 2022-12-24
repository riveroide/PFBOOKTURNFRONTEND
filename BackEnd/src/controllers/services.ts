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

export const deleteService = async (id: number) => {
    try {
        const deletedService = await prisma.services.delete({where: {
            id: id
        }})
        return deletedService.name
    } catch (error) {
        return error
    }
}