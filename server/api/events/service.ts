import prisma from '../db/prisma';
import { Event } from '../db/types';

export async function getEvents(
  params: any = {
    limit: 5,
    offset: 0,
    q: '',
  }
): Promise<Event[]> {
  const { limit, offset, q } = params;

  return prisma.event.findMany({
    take: limit,
    skip: offset,
    where: {
      OR: [
        { actor_name: { contains: q } },
        { action_name: { contains: q } },
        { target_name: { contains: q } },
      ],
    },
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
