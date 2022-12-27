import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getAllClients = async () => {
  try {
    const result = await prisma.client.findMany();
    return result;
  } catch (error) {
    return error;
  }
};

export const getClientByEmail = async (email: string) => {
    //Ejemplo de ruta email
    //http://localhost:3000/clients?email=email@gmail.com

  try {
    const result = await prisma.client.findFirst({ where: { email } });
    if(!result) throw new Error("No se encontro el usuario asociado al email provisto")
    return result;
  } catch (error) {
    throw error;
  }
};

// export const getClientById = async () => {

//     try {

//     } catch (error) {
//         return error
//     }
// }
