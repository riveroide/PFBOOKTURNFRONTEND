import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllBusiness = async () => {
  try {
    const result = await prisma.business.findMany();
    return result;
  } catch (error) {
    return error;
  }
};


export const getBusinessById = async (id: number) => {
  try {
    const business = await prisma.business.findFirst({
      where: {
        id,
      },
    });
    if (business !== null) return business;
    throw new Error("No se encontro el negocio");
  } catch (error) {
  throw error;
}

export const upDateBusiness = async (body: any, id: number) => {
  try {
    const business = await prisma.business.update({
      where: { id },
      data: body,
    });
    return business;
  } catch (error) {
    throw error;
  }
};
