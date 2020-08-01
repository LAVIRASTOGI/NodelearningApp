const https = require('http');
const fs = require('fs');
const server = https.createServer((req, res) => {
    let url = req.url;

    if (url == '/') {
        res.write('<html><body><form action="/message" method="POST"><input name="message" id="message1"  type="text" value=""><button type="submit">SEND</button></form></body></html>')
        return res.end()
    }
    if (url == "/message" && req.method == "POST") {
        fs.writeFileSync("message.txt", "value Hello");
        //res.write("LOgin successfull") -- after writing you cant set status code or set header ;
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.write("LOgin success");
        return res.end();
    }
    // console.log("request url" + req.url)
    // console.log(req.headers)
    // console.log(req.method)
    //setting response came
    res.setHeader("Content-Type", "text/html");
    res.write('<html><head><title>MY first Page</title></head><body><h1>Hello page</h1></body></html>');
    res.end(); // tell browser we have finished writing
});

server.listen(3000)