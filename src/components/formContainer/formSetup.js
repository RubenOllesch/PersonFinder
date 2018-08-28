// shows a form in an accordion, whose contents can be sent via Intercom to the page with the press of a button

'use strict';

/* eslint no-underscore-dangle: 0 */

import generateForm from './formWrapper';
import generateButton from './sendButton/sendButton';
import TextInputList from './textInputList';
import sendMessage from '../../utils/jsonSender';

export default class Form {
    constructor(config) {
        const {
            title,
            textInputs,
            buttonText
        } = config;

        const form = generateForm(title);
        const formContent = form.querySelector('#formContent');

        const inputList = new TextInputList(textInputs);

        const confirmButton = generateButton(buttonText);
        confirmButton.addEventListener('click', () => {
            sendMessage(inputList.getValues());
        });

        formContent.appendChild(inputList);
        formContent.appendChild(confirmButton);

        return form;
    }
}
