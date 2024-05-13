import express, { Request, Response } from 'express';
import { createEvent, getEvents } from './service';

export const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  const body = req.body;

  try {
    const event = await createEvent(body);
    
    res.status(201).json({
      message: 'Event created successfully',
      event,
    });
  } catch (error: any) {
    res.status(500).json({
      message: 'Error creating event',
      error: error.message,
    });
  }
});


router.get('/', async (req: Request, res: Response) => {
  const events = await getEvents();
  res.json(events);
});

export default router;