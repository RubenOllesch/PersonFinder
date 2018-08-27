// shows a form in an accordion, whose contents can be sent via Intercom to the page with the press of a button

'use strict';

/* eslint no-underscore-dangle: 0 */

import htmlToElement from 'html-to-element';

export default class Form {
    constructor(target, inputs, buttonText) {
        const form = document.createElement('div');

        for (let i = 0; i < inputs.length; i++) {
            const { type, name, placeholder, required } = inputs[i];
            form.appendChild(this._generateInput(type, name, placeholder, required));
        }

        form.appendChild(this._generateButton(buttonText));

        target.appendChild(form);
    }

    _generateInput(type, name, placeholder, required) {
        let $autogrow = '';
        switch (type) {
            case 'simpleInput':
                break;

            case 'textarea':
                $autogrow = 'autogrow';
                break;

            default:
                return;
        }

        return htmlToElement(`
            <${type} class="input" id="${name}" type="text" placeholder="${placeholder}" ${required ? 'required' : ''} ${$autogrow}></${type}>
        `);
    }

    _generateButton(name, text) {
        const button = htmlToElement(`
            <div class="center">
                <div class="button" id="${name}">${text}</div>
            </div>
        `);

        return button;
        }
}
