import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllBookings = async () => {
  try {
    const result = await prisma.booking.findMany();
    return result;
  } catch (error) {
    return error;
  }
};

export const getAllByBusinessId = async (id: number) => {
  if(isNaN(id))throw Error("El id proveido no es un numero")
  try {
    const result = await prisma.booking.findMany({
      where: {
        idBusiness: id,
      },
      select: {
        Services: {
          select: {
            id: true,
            name: true,
          },
        },
        Client: {
          select: {
            id: true,
            name: true,
            lastName: true,
            email: true,
          },
        },
        Business: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });
    if (result.length) return result;
    else throw Error("No se encontraron turnos con el id provisto");
  } catch (error) {
    throw error;
  }
};

export const putOneBooking = async (
  id: number,
  state: string,
  date: string,
  idClient: number,
  idBusiness: number,
  idServices: number
) => {
  const actualBooking = await prisma.booking.update({
    where: {
      id: id,
    },
    data: {
      state: state,
      date: date,
      idClient: idClient,
      idBusiness: idBusiness,
      idServices: idServices,
    },
  });

  return actualBooking;
};
