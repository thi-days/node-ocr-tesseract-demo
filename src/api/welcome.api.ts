import { Request, Response, Router } from 'express';

export const welcomeApi: Router = Router();

welcomeApi.all('', (req: Request, res: Response) => {
  res.send(
    'Welcome to Node OCR Tesseract Demo. =)\nSend a POST request to /tesseract/read-image. For more information, read the readme.md file at this project. =)'
  );
});
