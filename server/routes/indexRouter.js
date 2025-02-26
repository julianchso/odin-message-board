import { Router } from 'express';
import fetchMessagesDB from '../database/messages.js';

const indexRouter = Router();

indexRouter.get('/messages', async (req, res) => {
  res.json({ messages: await fetchMessagesDB() });
});

indexRouter.post('/messages', (req, res) => {
  // const { message, username, dateTime, id } = req.body;

  // messages.unshift({ username: username, message: message, dateTime: dateTime, id: id });
  res.redirect('/');
});

export { indexRouter };
