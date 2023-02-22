var http = require("http");

const httpServer = http.createServer(handleServer);

const obj = {
    phone: '18602100000',
    email: 'guestcaredominos@jublfood.com'
};
function handleServer(req, res) {
    if (req.url === "/welcome") {
        res.end("Welcome to Dominos!");
    } else if (req.url === "/contact") {
        const objStr = JSON.stringify(obj);
        res.end(objStr); //json
    } else {
        res.end("bed request");
        //res.sendStatus(404);
    }
}

httpServer.listen(8081);

//module.exports = httpServer;