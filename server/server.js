import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

import { messages, indexRouter } from './routes/indexRouter.js';
import { newMsgRouter } from './routes/newMsgRouter.js';

const app = express();
const PORT = process.env.PORT || 3000;

const corsOptions = {
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use('/new', newMsgRouter);

const assetsPath = path.join(__dirname, 'public');
app.use(express.static(assetsPath));

app.get('/new', (req, res) => {
  res.send('type your message');
});

app.listen(PORT, () => {
  console.log(`Running messaging app on PORT ${PORT}`);
});
