import generateInput from './textInput/textInput';

export default class TextInputList {
    constructor(display, inputsConf) {
        this.display = display;
        this.inputs = [];

        inputsConf.forEach((inputConf) => {
            const input = generateInput(inputConf);
            this.inputs.push(input);
        });

        this.element = document.createElement('div');
        this.inputs.forEach((input) => {
            this.element.appendChild(input);
        });
        this.render();
    }

    // returns only id's and values of the inputs
    getContent() {
        const values = this.inputs.map(input => (({ id, value }) => ({ id, value }))(input));
        return values;
    }

    render() {
        this.display.innerHTML = '';
        this.display.appendChild(this.element);
    }
}
