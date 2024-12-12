import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';

const indexRouter = Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
    id: uuidv4(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
    id: uuidv4(),
  },
];

indexRouter.get('/messages', (req, res) => {
  res.json({ messages: messages });
});

indexRouter.get('/new', (req, res) => {
  res.send('form');
});

indexRouter.post('/new', (req, res) => {
  const { message, user } = req.body;

  console.log(req.body);

  messages.push({ text: message, user: user, added: new Date(), id: uuidv4() });
  res.redirect('/');
});

export { messages, indexRouter };
