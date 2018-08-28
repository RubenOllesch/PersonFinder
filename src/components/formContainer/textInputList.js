/* eslint no-underscore-dangle: 0 */

import generateTextInput from './textInput/textInput';

export default class TextInputList {
    constructor(display) {
        this.display = display;
        this.inputs = [];
    }

    addInput(inputConf) {
        const input = generateTextInput(inputConf);
        this.inputs.push(input);
        this.display.appendChild(input);
    }

    getValues() {
        const values = [];
        this.inputs.forEach((input) => {
            const newInput = {};
            newInput.id = input.id;
            newInput.value = input.value;

            values.push(newInput);
        });
        return values;
    }
}
