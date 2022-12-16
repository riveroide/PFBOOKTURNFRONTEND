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

export const putOneBooking = async (id: number, state: string, date: string, idClient: number, idBusiness: number, idServices: number) => {

    const actualBooking = await prisma.booking.update({
        where: {
            id: id
        },
         data: {
            state: state,
            date: date,
            idClient: idClient,
            idBusiness: idBusiness, 
            idServices: idServices
         },
    })

    return actualBooking;
}