import express, { Request, Response } from 'express';
export const app = express();
const port = 3000;
//const swaggerUi = require('swagger-ui-express');
//const swaggerSpec = require('./swagger');

app.get('/', (req, res) => {
    res.send('Hello World!');
});

/**
 * @swagger
 * /json:
 *   get:
 *     summary: Récupérer des données
 *     description: Récupérer des données à partir de l'API
 *     responses:
 *       200:
 *         description: Succès, renvoie les données demandées
 *       500:
 *         description: Erreur du serveur
 */
app.get('/json', (req: Request, res: Response) => {
    const jsonData = {
        message: 'Ceci est un exemple de JSON',
        data: [1, 2, 3, 4, 5]
    };

    // Utilisation de res.json() pour retourner le JSON
    res.json(jsonData);
});

//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

