import { Router } from 'express';

const newMsgRouter = Router();

newMsgRouter.get('/', (req, res) => {
  res.render('form');
});

export { newMsgRouter };
