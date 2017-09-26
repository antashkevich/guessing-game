class GuessingGame {
    constructor() {
    	this.minValue = 0;
    	this.maxValue = 0; 
    	this.value = 0;    	
    }

    setRange(min, max) {
		this.minValue = min;
		this.maxValue = max;
    }

    guess() {
		this.value = Math.ceil((this.minValue + this.mamaxValueximum) / 2);
	        return this.value;
	}

    lower() {
		this.maxValue = this.value;
    }

    greater() {
		this.minValue = this.value;
    }
}

module.exports = GuessingGame;
