const EventEmitter = require('events');

class School extends EventEmitter {
	startPeriod() {
		console.log('Start 1st Period');

		setTimeout(() => {
			//Calling Event from here
			this.emit('bellRingEvent', {
				period: '2nd',
				text: '2nd Period'
			});
		}, 2000);
	}
}

module.exports = School;
