var http = require("http");

const httpServer = http.createServer(handleServer);

const obj = {
    phone: '18602100000',
    email: 'guestcaredominos@jublfood.com'
};
function handleServer(req, res) {
    if (req.url === "/welcome") {
        res.setHeader('Content-Type', 'text/plain');
        res.statusCode = 200;
        res.end('Welcome to Dominos!');
    } else if (req.url === "/contact") {
        res.setHeader('Content-Type', 'application/json');
        res.statusCode = 200;
        const objStr = JSON.stringify(obj);
        res.end(objStr); //json
    } else {
        res.statusCode = 404;
        res.end('404 Not Found');
    }
}

httpServer.listen(8081);

//module.exports = httpServer;