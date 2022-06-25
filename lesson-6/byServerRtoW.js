const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);
	ourReadStream.pipe(res);
});

server.listen(4000);
console.log('Server is running at PORT 4000.....');
