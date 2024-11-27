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

indexRouter.post('/new', (req, res) => {});

export { messages };
