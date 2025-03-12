import { Router } from 'express';
import { fetchMessagesDB, postMessagesDB } from '../database/messages.js';

const indexRouter = Router();

indexRouter.get('/messages', async (req, res) => {
  res.json({ messages: await fetchMessagesDB() });
});

indexRouter.post('/messages', async (req, res) => {
  const { id, created_at, author, message } = req.body;
  res.json(await postMessagesDB(id, created_at, author, message));
});

export { indexRouter };
