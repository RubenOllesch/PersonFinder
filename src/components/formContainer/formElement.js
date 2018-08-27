// shows a form in an accordion, whose contents can be sent via Intercom to the page with the press of a button

'use strict';

/* eslint no-underscore-dangle: 0 */

import htmlToElement from 'html-to-element';

export default class Form {
    constructor(target, inputs, buttonText) {
        const form = document.createElement('div');

        inputs.forEach((element) => {
            const { type, name, placeholder, required } = element;
            form.appendChild(this._generateInput(type, name, placeholder, required));
        });

        form.appendChild(this._generateButton(buttonText));

        target.appendChild(form);
    }

    _generateInput(type, name, placeholder, required) {
        this.$autogrow = '';
        switch (type) {
            case 'simpleInput':
                break;

            case 'textarea':
                this.$autogrow = 'autogrow';
                break;

            default:
                return '';
        }

        return htmlToElement(`
            <${type} class="input" id="${name}" type="text" placeholder="${placeholder}" ${required ? 'required' : ''} ${this.$autogrow}></${type}>
        `);
    }

    _generateButton(name, text) {
        this.button = htmlToElement(`
            <div class="center">
                <div class="button" id="${name}">${text}</div>
            </div>
        `);

        return this.button;
        }
}
