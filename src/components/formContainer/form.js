// shows a form in an accordion, whose contents can be sent via Intercom to the page with the press of a button

'use strict';

/* eslint no-underscore-dangle: 0 */

import htmlToElement from 'html-to-element';
import TextInputList from './textInputList/textInputList';
import Button from './centerButton/centerButton';
import sendFormToSite from '../../utils/jsonSender';

export default class Form {
    constructor(display, config) {
        this.display = display;

        const {
            title,
            textInputs,
            buttonText
        } = config;

        this.title = title;

        this.textInputList = new TextInputList(textInputs);
        this.sendButton = new Button(buttonText, () => {
            sendFormToSite(this.textInputList.getContent());
        });

        this.render();
    }

    render() {
        this.display.innerHTML = '';

        const element = htmlToElement(`
            <div class="accordion">
                <div class="accordion__head">${this.title}</div>
                <div class="accordion__body">
                    <div class="accordion__content">
                    </div>
                </div>
            </div>
        `);
        const elementContent = element.querySelector('.accordion__content');
        elementContent.appendChild(this.textInputList.render());
        elementContent.appendChild(this.sendButton);

        this.display.appendChild(element);
    }
}
