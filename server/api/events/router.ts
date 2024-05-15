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
  const limit = parseInt(req.query.limit as string) || 5;
  const offset = parseInt(req.query.offset as string) || 0;
  const events = await getEvents({ limit, offset });

  // sleep
  await new Promise((resolve) => setTimeout(resolve, 2000));
  
  res.json(events);
});

export default router;