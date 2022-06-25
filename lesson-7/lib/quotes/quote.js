/*
 * Title: Quotes Library
 * Description: Utility library for getting a list of Quotes
 * Author: Md. Abu Noman
 * Date: 23-May-2020
 *
 */

// Dependencies
const fs = require('fs');

// Quotes object - Module scaffolding ||const quote = {}|| blank quote Object
const quote = {
	// allQuotes()
};

// Get all the quotes and return them to the user
quote.allQuotes = () => {
	// Read the text file containing the quotes
	const ReadfileContents = fs.readFileSync(`${__dirname}/quore.txt`, 'utf8');

	// Turn the string into an array
	const arrayOfQuotes = ReadfileContents.split(/\r?\n/);

	// Return the array
	return arrayOfQuotes;
};

// Export the library
module.exports = quote;
