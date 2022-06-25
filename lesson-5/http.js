const http = require('http');

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		res.write('Hello World ');
		res.end();
	} else if (req.url === '/about') {
		res.write('Hello About us Page');
		res.end();
	} else {
		res.write('Not Found');
		res.end();
	}
});

server.listen(3000);
console.log('Server is running at Port 3000...');
