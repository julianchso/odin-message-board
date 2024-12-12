import { Router } from 'express';

const newMsgRouter = Router();

newMsgRouter.get('/', (req, res) => {
  res.send('form');
});

export { newMsgRouter };
