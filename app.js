const http = require("http");
const Controller = require("./controller");

const PORT = process.env.PORT || 5000;

const server = http.createServer(async (req, res) => {
    if (req.url.match(/\/api\/([0-9]+)/) && req.method === "GET") {
      try {
        const id = req.url.split("/")[2];
        const todo = await new Controller().getTokenMetadata(id);

        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(todo));
      } catch (error) {
        res.writeHead(404, { "Content-Type": "application/json" });
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
