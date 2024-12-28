import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';

const indexRouter = Router();

const messages = [
  {
    username: 'Amando',
    message: 'Hi there!',
    time: new Date(),
    id: uuidv4(),
  },
  {
    username: 'Charles',
    message: 'Hello World!',
    time: new Date(),
    id: uuidv4(),
  },
];

indexRouter.get('/', (req, res) => {
  res.json({ messages: messages });
});

indexRouter.get('/messages', (req, res) => {
  res.json({ messages: messages });
});

indexRouter.post('/messages', (req, res) => {
  const { message, username, time, id } = req.body;

  messages.unshift({ username: username, message: message, time: time, id: id });
  res.redirect('/');
});

export { messages, indexRouter };
