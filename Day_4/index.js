const server = require("http");
const fs = require("fs");
const myServer = server.createServer((req, res) => {
  if (req.url.includes("/favicon")) return;
  const log = `${Date.now()}: ${req.url}/n`;
  fs.appendFile("./log.txt", log, () => {
    switch (req.url) {
      case "/":
        res.end("You are on the Home Page.");
        break;
      case "/about":
        res.end("I am Subhan Ali. I am a Junior Developer at upvave.");
        break;
      case "/contact":
        res.end("You are on the Contact Page");
        break;
      default:
        res.end("404 Page not found");
        break;
    }
  });
});
myServer.listen(8000, console.log("Server is Started."));
