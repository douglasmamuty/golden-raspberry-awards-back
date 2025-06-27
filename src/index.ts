/* eslint-disable no-undef */
import express from 'express';
import routes from './routes';
import { initDb } from './database/db';

import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './docs/swagger';
import { errorHandler } from './errors/errorHandler';
import { seedMoviesFromCSV } from './seed/movies';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(routes);
app.use(errorHandler);

const start = async () => {
  await seedMoviesFromCSV();
  await initDb();
  app.listen(3000, () => {
    console.log('Server running on port 3000');
    console.log('Documentation available at http://localhost:3000/api-docs');
  });
};

start().catch((err) => {
  console.error('❌ Failed to start app:', err);
  process.exit(1);
});
