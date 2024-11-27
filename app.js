import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

import { messages } from './routes/indexRouter.js';
import { newMsgRouter } from './routes/newMsgRouter.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/new', newMsgRouter);

app.get('/', (req, res) => {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

app.listen(PORT, () => {
  console.log(`Running messaging app on PORT ${PORT}`);
});
