import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';

const indexRouter = Router();

const messages = [
  {
    username: 'Amando',
    message: 'Hi there!',
    added: new Date(),
    id: uuidv4(),
  },
  {
    username: 'Charles',
    message: 'Hello World!',
    added: new Date(),
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
  const { message, user, added, id } = req.body;
  console.log(`request body: ${req.body}`);

  console.log(`message: ${message}`);
  console.log(`user: ${user}`);

  messages.push({ username: user, message: message, added: added, id: id });
  res.redirect('/');
});

export { messages, indexRouter };
