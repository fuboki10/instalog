import express, { Request, Response } from 'express';
import { createEvent, deleteEvent, getEventById, getEvents } from './service';
import { body, validationResult, query } from 'express-validator';

export const router = express.Router();

router.post(
  '/',
  body('id').isString().notEmpty(),
  body('object').isString().notEmpty(),
  body('actor_id').isString().notEmpty(),
  body('actor_name').isString().notEmpty(),
  body('group').isString().notEmpty(),
  body('action_id').isString().notEmpty(),
  body('action_object').isString().notEmpty(),
  body('action_name').isString().notEmpty(),
  body('target_id').isString().notEmpty(),
  body('target_name').isString().notEmpty(),
  body('location').isString().notEmpty(),
  body('metadata_redirect').isString().notEmpty(),
  body('metadata_description').isString().notEmpty(),
  body('metadata_x_request_id').isString().notEmpty(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

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
  }
);

router.get(
  '/',
  query('limit').isInt().optional(),
  query('offset').isInt().optional(),
  query('q').isString().optional(),
  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const limit = parseInt(req.query.limit as string) || 5;
    const offset = parseInt(req.query.offset as string) || 0;
    const q = (req.query.q as string) || '';
    const events = await getEvents({ limit, offset, q });

    res.json(events);
  }
);

router.get('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const event = await getEventById(id);

    if (!event) {
      return res.status(404).json({
        message: 'Event not found',
      });
    }

    res.json(event);
  } catch (error: any) {
    res.status(500).json({
      message: 'Error fetching event',
      error: error.message,
    });
  }
});

router.delete('/:id', async (req: Request, res: Response) => {
  const id = req.params.id;

  try {
    const event = await deleteEvent(id);

    res.json({
      message: 'Event deleted successfully',
      event,
    });
  } catch (error: any) {
    res.status(500).json({
      message: 'Error deleting event',
      error: error.message,
    });
  }
});

export default router;
