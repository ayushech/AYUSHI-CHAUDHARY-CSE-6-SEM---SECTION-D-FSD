const http = require ("http");

//Create a server
const server = http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader("Content-Type","text/plain");
    res.end("Welcome to Node.js Tutorial");
});
//Listen to port 3000
server.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000");
});