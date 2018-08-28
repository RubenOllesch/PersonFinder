import generateInput from './textInput/textInput';

export default class TextInputList {
    constructor(display, inputsConf) {
        this.display = display;
        this.inputs = [];

        inputsConf.forEach((inputConf) => {
            const input = generateInput(inputConf);
            this.inputs.push(input);
            this.display.appendChild(input);
        });
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
