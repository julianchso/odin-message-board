import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';

const indexRouter = Router();

const messages = [
  {
    username: 'Amando',
    message: 'Hi there!',
    dateTime: new Date(),
    id: uuidv4(),
  },
  {
    username: 'Charles',
    message: 'Hello World!',
    dateTime: new Date(),
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
  const { message, username, dateTime, id } = req.body;

  messages.unshift({ username: username, message: message, dateTime: dateTime, id: id });
  res.redirect('/');
});

export { messages, indexRouter };
