import dotenv from 'dotenv';
import express from 'express';
import { tesseractApi, welcomeApi } from './api';

const app = express();

// Setup express application
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize environment config
dotenv.config();

// Setup routes
app.use('', welcomeApi);
app.use('/tesseract', tesseractApi);

// Start server
app.listen(process.env.SERVER_PORT, () => {
  // tslint:disable-next-line: no-console
  console.log(`OCR Server is listening at port ${process.env.SERVER_PORT}`);
});

export default app;
