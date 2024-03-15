const swaggerJSDoc = require('swagger-jsdoc');

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Microservice match',
            description: 'Microservice s\'occupant des matchs, et des cotes',
            version: '1.0.0',
        },
    },
    apis: ['./routes/*.js'], // Spécifiez le chemin vers vos fichiers de routes
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

module.exports = swaggerSpec;
