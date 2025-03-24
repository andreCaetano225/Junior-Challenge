import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Minha API Express',
      version: '1.0.0',
      description: 'Documentação da API usando Swagger',
    },
    components: {
      schemas: {
        Ring: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              example: 'Narya, o anel do agua'
            },
            power: {
              type: 'string',
              example: 'Seu portador ganha resistência ao agua'
            },
            carrier: {
              type: 'string',
              example: 'Andre'
            },
            forgedBy: {
              type: 'string',
              example: 'Anões'
            },
            imagem: {
              type: 'string',
              format: 'uri',
              example: 'https://static.wikia.nocookie.net/terramedia/images/0/00/Ring_02.png/revision/latest?cb=20141212214327'
            }
          }
        }
      }
    }
  },
  apis: ['./src/routes/rings.routes.ts'], // Arquivo onde estão as rotas documentadas
};


const specs = swaggerJsdoc(options);

function setupSwagger(app: Express) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
}

export default setupSwagger;
