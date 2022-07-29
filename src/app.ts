import express from 'express';
import routes from './routes/export.routes';

const app = express();

app.use(express.json());

app.use('/products', routes.products);

export default app;
