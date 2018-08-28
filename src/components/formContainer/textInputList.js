import generateInput from './textInput/textInput';

export default class TextInputList {
    constructor(inputsConf) {
        const inputList = document.createElement('div');

        this.inputs = [];

        inputsConf.forEach((inputConf) => {
            const input = generateInput(inputConf);
            this.inputs.push(input);
            inputList.appendChild(input);
        });
        return inputList;
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
