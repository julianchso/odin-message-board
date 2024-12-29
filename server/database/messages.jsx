import { v4 as uuidv4 } from 'uuid';

export const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    dateTime: new Date(),
    id: uuidv4(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    dateTime: new Date(),
    id: uuidv4(),
  },
];
