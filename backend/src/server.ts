import dotenv from 'dotenv';
import app from './app';

// Cargar variables de entorno
dotenv.config();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`
  ╔════════════════════════════════════════╗
  ║                                        ║
  ║      🍕 CHARIS SHOP API 🍕            ║
  ║                                        ║
  ║  Server running on:                    ║
  ║  http://${HOST}:${PORT}                ║
  ║                                        ║
  ║  Environment: ${process.env.NODE_ENV}  ║
  ║                                        ║
  ╚════════════════════════════════════════╝
  `);
});