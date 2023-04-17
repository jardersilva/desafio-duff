import * as dotenv from 'dotenv';

export const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Documentation Duff API',
      version: '1.0.0',
      description: 'A simple documentation API of end-poins of Duff API',
      termsOfService: 'http://example.com/terms/',
      contact: {
        name: 'API Support',
        url: 'http://www.exmaple.com/support',
        email: 'support@example.com',
      },
    },

    servers: [
      {
        url: 'https://desafio-4.jardersilva.com.br',
        description: 'API Documentation',
      },
      {
        url: 'http://localhost:3333',
        description: 'API Documentation',
      },
    ],
  },
  apis: ['./dist/routes/v1/swagger/*.js'],
};
