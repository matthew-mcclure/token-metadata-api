require('dotenv').config()

const http = require("http");
const mongoose = require('mongoose');

const Controller = require("./controller");
const { getReqBody } = require("./utilities");

const PORT = process.env.PORT;
const mongodbUriString = process.env.MONGODB_URI;

mongoose.Promise = global.Promise;
mongoose.connect(mongodbUriString, (err, res) => {
  if (err) console.log (`ERROR connecting to: ${mongodbUriString}. Error: ${err}`);
  else console.log (`Successfully connected to: ${mongodbUriString}`);
});

const server = http.createServer(async (req, res) => {
  if (req.method === "GET" && req.url.match(/\/metadata\/([0-9]+)/)) {
    try {
      const id = req.url.split("/")[2];
      const todo = await new Controller().getTokenMetadata(id);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(todo));
    } catch (error) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: error }));
    }
  } else if (req.method === "POST" && req.url.match(/\/metadata/)) {
    try {
      const metadata = await getReqBody(req);
      const todo = await new Controller().createTokenMetadata(metadata);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(todo));
    } catch (error) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: error }));
    }
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
});
