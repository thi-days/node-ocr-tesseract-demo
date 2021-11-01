import { TesseractService } from './src/services';

const onProgress = (myValue: any) => {
  console.log(myValue);
};

TesseractService.readImage(
  'https://jeroen.github.io/images/testocr.png',
  // onProgress
).then((text) => console.log(text));
