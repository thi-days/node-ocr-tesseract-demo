# Node OCR Tesseract Implementation
This project is a simplest implementation of [Tesseract.js](http://tesseract.projectnaptha.com/) library to transform image characters in text. This project is a server which receives a REST HTTP request with a image's path and transforms image's characters in text.

## How do I run this project?
First you have to **run the server and keep it listening to a local port** to be able to transform images via REST communication.
1. First you **MUST** have **Node.js and nodemon** installed on your computer.
2. If you don't have **nodemon** installed on your computer, please install it via npm: `npm i -g nodemon`. If you already have it, just ignore this step.
2. Clone or download this repository to your computer.
3. Open **Command Prompt (Windows)** or **Shell (Linux or Mac)** and run `npm install` to install all dependencies.
4. after installed, run `npm start` to start development server.
5. When the development server is running, it will output `OCR Server is listening at port ` (probably at port 3000).

Now the server is running and ready to receive REST calls and this is what we'll do now. You can install any REST HTTP tool. I used Postman to make HTTP requests.
1. Install [Postman](https://www.getpostman.com/) (or any preferred [HTTP request tool](https://www.google.com/search?q=http+request+tool&oq=http+request+tool&aqs=chrome..69i57j0l5.3419j0j4&sourceid=chrome&ie=UTF-8)).
2. Set the HTTP request to **POST**.
3. In the request body, put the `example_payload.json` file content in it.
4. Send the request and analyze the console output showing text data as text.
5. You can change the `imgUrl` token to another supported image path (remote path or local path in the server).

## How do I debug this application?
I'm using Visual Studio Code to debug this project. So here's the way I'm doing:
1. First of all, you must install Visual Studio Code if you don't have it yet.
2. After installed, check if you can run the server as mentioned in the last tutorial above (installing Node.js, nodemon, dependencites and etc).
3. Everything needed to debug in VSCode I already wrote! =)
4. So just press F5 key (or go to `Debug > Start debugging`) to run the server in **debug** mode =)

### Do you have any sugestion?
Send me a pull request! =)

**Thanks!**
