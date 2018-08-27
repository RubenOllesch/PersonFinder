'use strict';

// calls callback after input has not changed for ${delay} ms

export default class InputHandler {
    constructor(input, delay, callback) {
        this.lastTimeout = 0;
        input.addEventListener('input', () => {
            clearTimeout(this.lastTimeout);
            this.lastTimeout = setTimeout(callback, delay);
        });
    }
}
