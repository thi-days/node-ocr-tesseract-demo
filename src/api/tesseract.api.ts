import { Request, Response, Router } from 'express';
import { body } from 'express-validator';
import { StatusCodes } from 'http-status-codes';
import { validationHandler } from '../handler';
import { ReadImageRequest } from '../interfaces/read-image.request';
import { TesseractService } from '../services/tesseract.service';

export const tesseractApi: Router = Router();

tesseractApi.post(
  '/read-image',
  body('imageUrl').exists(),
  validationHandler,
  (req: Request<{}, {}, ReadImageRequest>, res: Response) => {
    TesseractService.readImage(req.body.imageUrl)
      .then((result: string) => {
        res.status(200).send(result);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  }
);

tesseractApi.post(
  '/read-images',
  body('images').isArray(),
  validationHandler,
  (req: Request, res: Response) => {
    res.status(StatusCodes.NOT_IMPLEMENTED).send('Coming soon! =)');
  }
);
