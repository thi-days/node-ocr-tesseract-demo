import { createWorker } from 'tesseract.js';
import { ReadingImageProgress } from '../interfaces/reading-image-progress';

export class TesseractService {
  static async readImage(imagePath: string, onProgress?: (status: ReadingImageProgress) => void): Promise<string> {
    const worker = createWorker({
      logger: onProgress ? onProgress : () => null,
    });

    await worker.load();
    await worker.loadLanguage('eng');
    await worker.initialize('eng');

    return worker.recognize(imagePath).then(value => value.data.text);
  }

  static async readSeveralImages(imageList: string[]): Promise<string[]> {
    return [];
  }
}
