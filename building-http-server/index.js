const http = require("http");
const fs = require("fs");
const url = require("url");
const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: New Request Added on the path ${req.url}\n`;
  const parsedUrl = url.parse(req.url, true);
  console.log(parsedUrl);
  fs.appendFile("./log.txt", log, () => {
    switch (req.url) {
      case "/":
        res.end("You are on the Home page");
        break;
      case "/about":
        res.end("I am Subhan Ali");
        break;
      case "/contact":
        res.end("Contact me on my gmail");
        break;
      default:
        res.end("404 Web Page not Found");
        break;
    }
  });
});
myServer.listen(8000, () => console.log("Server started"));
