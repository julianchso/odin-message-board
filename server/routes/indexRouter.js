import { Router } from 'express';
import { fetchMessagesDB, postMessagesDB } from '../database/messages.js';

const indexRouter = Router();

indexRouter.get('/messages', async (req, res) => {
  res.json({ messages: await fetchMessagesDB() });
});

indexRouter.post('/messages', async (req, res) => {
  const { id, created_at, author, message } = req.body;
  console.log(`id ${id}`);
  console.log(`created_at ${created_at}`);
  console.log(`author ${author}`);
  console.log(`message ${message}`);
  // res.send({ id: id, created_at: created_at, author: author, message: message });
  res.json({ messages: await postMessagesDB(id, created_at, author, message) });
  console.log('post message');
  // res.redirect('/');
});

export { indexRouter };
