// shows a form in an accordion, whose contents can be sent via Intercom to the page with the press of a button

'use strict';

/* eslint no-underscore-dangle: 0 */

import generateForm from './formWrapper';
import generateButton from './sendButton/sendButton';
import TextInputList from './textInputList';
import sendMessage from '../../utils/jsonSender';

export default class Form {
    constructor(display, config) {
        const {
            title,
            textInputs,
            buttonText
        } = config;

        const form = generateForm(title);
        display.appendChild(form);

        const formContent = form.querySelector('#formContent');

        this.inputList = new TextInputList(formContent);

        textInputs.forEach((element) => {
            this.inputList.addInput(element);
        });

        const confirmButton = generateButton(buttonText);
        confirmButton.addEventListener('click', () => {
            sendMessage(this.inputList.getValues());
        });
        formContent.appendChild(confirmButton);
    }
}
