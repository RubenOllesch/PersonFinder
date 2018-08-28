import generateInput from './textInput/textInput';

export default class TextInputList {
    constructor(inputsConf) {
        this.inputs = [];

        inputsConf.forEach((inputConf) => {
            const input = generateInput(inputConf);
            this.inputs.push(input);
        });
    }

    // return only id's and values of the inputs
    getContent() {
        const values = this.inputs.map(input => (({ id, value }) => ({ id, value }))(input));
        return values;
    }

    render() {
        const element = document.createElement('div');
        this.inputs.forEach((input) => {
            element.appendChild(input);
        });
        return element;
    }
}
