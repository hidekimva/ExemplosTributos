const express = require('express');

const app = express();

import routes from './Routes/index';
import cors from 'cors';

app.use(cors());
app.use(express.json());
app.use(routes);
const porta = process.env.PORT
app.listen(porta || 3333, () => {
  if (porta != '3333'){
    console.log('🚀 Server started on port '+porta+'!')
  }else{
    console.log('🚀 Server started on port 3333!')
  }
  
  
});