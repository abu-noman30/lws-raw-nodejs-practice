/*
 * Title: Basic Node Example.
 * Description:Simple Nodejs application that print "Random Quote per second interval"
 * Author: Md. Abu Noman
 * Date: 22-May-2022
 */

// Dependendencies
const mathLibrary = require('./lib/math');
const quotesLibrary = require('./lib/quotes/quote.js');

//App Object-Module Scaffolding ||const app = {}|| blank app Object
const app = {
	/*  config = { timeBetweenQuotes }
        printAQuote();
        indefiniteLoop()
    */
};

// Configuration
app.config = {
	timeBetweenQuotes: 1000
};

//Function that prints a random quote
app.printAQuote = () => {
	// Get all the quotes
	const allQuotes = quotesLibrary.allQuotes();

	// Get the length of the quotes
	const numberOfQuotes = allQuotes.length;

	// Pick a random number between 1 and the number of quotes
	const randomNumber = mathLibrary.getRandomNumber(1, numberOfQuotes);

	// Get the quote at that position in the array (minus one)
	const selectedQuote = allQuotes[randomNumber - 1];

	// Print the quote to the console
	console.log(selectedQuote);
};
// Function that loops indefinitely, calling the printAQuote function as it goes
app.indefiniteLoop = () => {
	// Create the interval, using the config variable defined above
	setInterval(app.printAQuote, app.config.timeBetweenQuotes);
};
// Calling the loop function
app.indefiniteLoop();
