import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';

const app: Application = express();

// Middlewares de seguridad
app.use(helmet());
app.use(cors());

// Middlewares de parseo
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Compresión de respuestas
app.use(compression());

// Logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Ruta de prueba
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Charis Shop API is running',
    timestamp: new Date().toISOString(),
  });
});

export default app;