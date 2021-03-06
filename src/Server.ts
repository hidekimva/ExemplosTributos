const express = require('express');

const app = express();

import cors from 'cors';
import routes from './Routes/index';

//app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333!')
});