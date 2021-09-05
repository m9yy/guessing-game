class GuessingGame {
    constructor() {
        this.start = 0;
        this.end = 0;
        this.result = 0;

        this.setRange = this.setRange.bind(this);
        this.guess = this.guess.bind(this)
        this.lower = this.lower.bind(this);
        this.greater = this.greater.bind(this);
    }

    setRange(min, max) {
        this.start = min
        this.end = max
    }

    guess() {
        this.result =Math.round ((this.start + this.end) / 2);
        return this.result;
    }

    lower() {
        this.end = this.result
        return this.end
    }

    greater() {
        this.start = this.result
        return this.start
    }
}

module.exports = GuessingGame;
