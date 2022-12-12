const http = require('http');
const url = require('url');
const PORT = process.argv[2];

const server = http.createServer((request, response) => {
    if (request.method === 'GET') {
        // create JSON object to be served
        const jsonData = {};

        // parse the query string and extract the value of the 'iso' key
        const query = url.parse(request.url, true).query;
        const isoTime = query.iso;

        // create a date object from the ISO time
        const date = new Date(isoTime);

        // create the JSON data to be served, depending on request route
        if (request.url.startsWith('/api/parsetime')) {
            jsonData.hour = date.getHours();
            jsonData.minute = date.getMinutes();
            jsonData.second = date.getSeconds();
        } else if (request.url.startsWith('/api/unixtime')) {
            jsonData.unixtime = date.getTime()
        }

        // set the response headers and status code
        response.writeHead(200, { 'Content-Type': 'application/json' });

        // serve the JSON data
        response.end(JSON.stringify(jsonData));
    }
});

// listen for connections
server.listen(PORT);