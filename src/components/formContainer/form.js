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

        this.element = htmlToElement(`
            <div class="accordion">
                <div class="accordion__head">${title}</div>
                <div class="accordion__body">
                    <div class="accordion__content">
                        <div id="inputList"></div>
                        <div id="sendButton"></div>
                    </div>
                </div>
            </div>
        `);

        const listContainer = this.element.querySelector('#inputList');
        const buttonContainer = this.element.querySelector('#sendButton');

        this.textInputList = new TextInputList(listContainer, textInputs);
        this.sendButton = new Button(buttonContainer, buttonText, () => {
            sendFormToSite(this.textInputList.getContent());
        });

        this.render();
    }

    render() {
        this.display.innerHTML = '';
        this.display.appendChild(this.element);
    }
}
