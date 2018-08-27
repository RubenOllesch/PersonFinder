// shows a form in an accordion, whose contents can be sent via Intercom to the page with the press of a button

'use strict';

/* eslint no-underscore-dangle: 0 */

import htmlToElement from 'html-to-element';
import './formElement.scss';

export default class Form {
    constructor(target, config) {
        const {
            title,
            textInputs,
            buttonText
        } = config;

        const form = this._generateForm(title);
        target.appendChild(form);

        const formContent = document.querySelector('#formContent');

        textInputs.forEach((element) => {
            const {
                type, name, placeholder, required
            } = element;
            formContent.appendChild(this._generateInput(type, name, placeholder, required));
        });

        formContent.appendChild(this._generateButton(buttonText));
    }

    _generateInput(type, name, placeholder, required) {
        this.input = htmlToElement(`
            <${type} class="input" id="${name}" type="text" placeholder="${placeholder}" ${required ? 'required' : ''} autogrow></${type}>
        `);
        return this.input;
    }

    _generateButton(text) {
        this.button = htmlToElement(`
            <div class="center">
                <div class="button" id="sendButton">${text}</div>
            </div>
        `);
        return this.button;
    }

    _generateForm(title) {
        this.form = htmlToElement(`
            <div class="accordion">
                <div class="accordion__head">${title}</div>
                <div class="accordion__body">
                    <div class="accordion__content" id="formContent"></div>
                </div>
            </div>
        `);
        return this.form;
    }
}
