const http = require('http');
const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {

	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Kristena First App');
});

server.listen(port, () => {
	console.log(`Sever running at http://${hostname}:${port}/`);
});

