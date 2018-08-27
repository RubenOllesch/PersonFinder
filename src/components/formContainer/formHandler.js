// shows a form in an accordion, whose contents can be sent via Intercom to the page with the press of a button

'use strict';

/* eslint no-underscore-dangle: 0 */

import htmlToElement from 'html-to-element';

import generateForm from './formElement/formElement';
import TextInputList from './formInputList';
import sendJSON from '../../utils/jsonSender';

export default class Form {
    constructor(target, config) {
        const {
            title,
            textInputs,
            buttonText
        } = config;

        const form = generateForm(title);
        target.appendChild(form);

        const formContent = document.querySelector('#formContent');

        this.inputList = new TextInputList(formContent);

        textInputs.forEach((element) => {
            this.inputList.addInput(element);
        });

        const confirmButton = this._generateButton(buttonText);
        confirmButton.addEventListener('click', () => {            
            sendJSON(this.inputList.getValues());
        });
        formContent.appendChild(confirmButton);
    }

    _generateButton(text) {
        this.button = htmlToElement(`
            <div class="center">
                <div class="button" id="sendButton">${text}</div>
            </div>
        `);
        return this.button;
    }
}
