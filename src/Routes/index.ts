import { Router } from 'express';

import nfe from './tributos.nfe';

const routes = Router();

routes.use('/nfe', nfe);


export default routes;