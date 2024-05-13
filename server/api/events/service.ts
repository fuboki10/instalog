import prisma from '../db/prisma';
import { Event } from '../db/types';

export async function getEvents(params: any = {
  limit: 5,
  offset: 0,
}): Promise<Event[]> {
  const { limit, offset } = params;
  
  return prisma.event.findMany({
    take: limit,
    skip: offset,
    orderBy: {
      occurred_at: 'desc',
    },
  });
}

export async function createEvent(event: Event): Promise<Event> {
  return prisma.event.create({ data: event });
}

export async function deleteEvent(id: string): Promise<Event> {
  return prisma.event.delete({ where: { id } });
}