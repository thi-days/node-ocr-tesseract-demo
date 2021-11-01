# Node OCR Tesseract Implementation
This project is a simplest implementation of [Tesseract.js](http://tesseract.projectnaptha.com/) library to transform image characters in text. This project is a server which receives a REST HTTP request with a image's path and transforms image's characters in text.

## How do I run this project?
First, **run the server and keep it listening to a local port** to be able to transform images via REST communication.
1. You **MUST** have **Node.js v14 or later** installed on your computer ([Download it here](https://nodejs.org/en/)).
2. Open **Command Prompt (Windows)** or **Shell (Linux or Mac)** and run `npm install` on this folder to install all dependencies.
3. After installed, run `npm start` to start development server.
4. When the server gets ready and running, it will output `OCR Server is listening at port ` (probably at port 3000).

Now the server is running and ready to receive REST calls and this is what we'll do now. I'm using Postman to make this Request:
1. Install [Postman](https://www.getpostman.com/).
2. Import the `node-ocr-tesseract-demo.postman_collection.json` Postman workspace file.
4. Send the request and analyze the console output showing text data as text.
5. You can change the `imageUrl` token to another supported image path (remote path or local path in the server).

## How do I debug this application?
I'm using Visual Studio Code to debug this project. So here's the way I'm doing:
1. First of all, you must install Visual Studio Code if you don't have it yet.
2. After installed, check if you can run the server as mentioned in the last tutorial above (installing Node.js, dependencies, etc).
3. Everything needed to debug in VSCode I already wrote in `.vscode/launch.json`! =)
4. So just press F5 key (or go to `Debug > Start debugging`) to run the server in **debug** mode =)

### Do you have any sugestion?
Send me a pull request! =)

**Thanks!**
