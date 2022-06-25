/*
 * Title: Math Library
 * Description: Utility library for math-related functions
 * Author: Md. Abu Noman
 * Date: 23-May-2022
 *
 */

// Math object - Module scaffolding ||const math = {}||  blank math Object
const math = {
	//getRandomNumber()
};

// Get a random integer between two integers
// Inspired by: http://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript

math.getRandomNumber = (min, max) => {
	let minimum = min;
	let maximum = max;
	minimum = typeof minimum === 'number' ? minimum : 0;
	maximum = typeof maximum === 'number' ? maximum : 0;
	return Math.floor(Math.random() * (maximum - minimum + 1) + min);
};
// Export the library-(math Object)
module.exports = math;
