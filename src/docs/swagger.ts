import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Minha API REST',
      version: '1.0.0',
      description: 'Documentação com Swagger',
    },
  },
  apis: ['./src/routes/*.ts', './src/dtos/*.ts'], // onde estão suas rotas e schemas
};

export const swaggerSpec = swaggerJsdoc(options);
