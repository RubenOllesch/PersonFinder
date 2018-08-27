// shows a form in an accordion, whose contents can be sent via Intercom to the page with the press of a button

'use strict';

/* eslint no-underscore-dangle: 0 */

import htmlToElement from 'html-to-element';

export default class Form {
    constructor(target, inputs, buttonText) {
        const form = document.createElement('div');

        inputs.forEach((element) => {
            const {
                type, name, placeholder, required
            } = element;
            form.appendChild(this._generateInput(type, name, placeholder, required));
        });

        form.appendChild(this._generateButton(buttonText));

        target.appendChild(form);
    }

    _generateInput(type, name, placeholder, required) {
        this.$autogrow = '';

        return htmlToElement(`
            <${type} class="input" id="${name}" type="text" placeholder="${placeholder}" ${required ? 'required' : ''} ${this.$autogrow}></${type}>
        `);
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
