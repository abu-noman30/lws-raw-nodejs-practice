const fs = require('fs');

const ourReadStream = fs.createReadStream(`${__dirname}/bigdata.txt`);

ourReadStream.on('data', (chunk) => {
	const body = [];
	body.push(chunk);
	console.log(body);
	console.log('Body: ', body.toString());
});
