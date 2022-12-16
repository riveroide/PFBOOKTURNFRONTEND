import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export interface service {
  name: string;
  category: string;
  price: number;
  time: string;
  businessid: number;
}

export async function addService(body: service) {
  try {
    const service = await prisma.services.create({
      data: body,
    });
    return service;
  } catch (error) {
    throw error;
  }
}
