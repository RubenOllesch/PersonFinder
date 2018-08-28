'use strict';

// calls callback after input has not changed for ${delay} ms

export default class InputHandler {
    static addInput(input, delay, callback) {
        this.lastTimeout = undefined;
        input.addEventListener('input', () => {
            clearTimeout(this.lastTimeout);
            this.lastTimeout = setTimeout(callback, delay);
        });
    }
}
