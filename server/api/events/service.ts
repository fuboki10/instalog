import prisma from '../db/prisma';
import { Event } from '../db/types';

export async function getEvents(): Promise<Event[]> {
  return prisma.event.findMany();
}

export async function createEvent(event: Event): Promise<Event> {
  return prisma.event.create({ data: event });
}

export async function deleteEvent(id: string): Promise<Event> {
  return prisma.event.delete({ where: { id } });
}