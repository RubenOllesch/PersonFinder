/* eslint no-underscore-dangle: 0 */

import generateTextInput from './textInput/textInput';

export default class TextInputList {
    constructor(display) {
        this.display = display;
        this.inputs = [];
    }

    addInput(input) {
        this.inputs.push(input);
        this._addToDisplay(input);
    }

    getValues() {
        const values = [];
        this.inputs.forEach((input) => {
            const value = document.querySelector(`#${input.id}`);

            const newInput = {};
            newInput.id = input.id;
            newInput.value = value.value;

            values.push(newInput);
        });
        return values;
    }

    _addToDisplay(input) {
        this.display.appendChild(generateTextInput(input));
    }
}
