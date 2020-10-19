import expres from 'express';
import { router } from './routes';

const app = expres();

app.use(expres.json());
app.use(router);

export { app };