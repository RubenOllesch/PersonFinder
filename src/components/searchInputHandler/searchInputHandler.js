'use strict';

export default class inputHandler {
    constructor(input, delay, callback) {
        this.lastTimeout = 0;
        input.addEventListener('input', () => {
            clearTimeout(this.lastTimeout);
            this.lastTimeout = setTimeout(callback, delay);
        });
    }
}
