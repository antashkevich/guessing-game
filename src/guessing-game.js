class GuessingGame {
    constructor() {
    	minValue = 0;
    	maxValue = 0; 
    	value = 0;    	
    }

    setRange(min, max) {
	minValue = min;
	maxValue = max;
    }

    guess() {
	value = Math.ceil(minValue + ((maxValue-minValue) / 2));
	return value;
    }

    lower() {
	maxValue = value;
    }

    greater() {
	minValue = value;
    }
}

module.exports = GuessingGame;
