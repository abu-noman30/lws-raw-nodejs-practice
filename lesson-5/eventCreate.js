const School = require('./eventCall');
const school = new School();

//Create Event Listener for the event(bellRingEvent)....
school.on('bellRingEvent', ({ period, text }) => {
	console.log('We need to run ' + period + ' and ... ' + text);
});
//Call the Event....
//Event.emit('bellRingEvent');
//Calling the Class Method
school.startPeriod();
