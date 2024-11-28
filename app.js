import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

import { messages, indexRouter } from './routes/indexRouter.js';

const app = express();
const PORT = process.env.PORT || 3000;

// app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);
// app.use('/new', indexRouter);

app.get('/', (req, res) => {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

app.listen(PORT, () => {
  console.log(`Running messaging app on PORT ${PORT}`);
});
