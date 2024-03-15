import express, { Request, Response } from 'express';
export const app = express();
const port = 3000;
import { app as routes } from './routes';
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
app.use(routes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
