import htmlToElement from 'html-to-element';

import './centerButton.scss';

export default class CenterButton {
    constructor(display, text, callback) {
        this.display = display;

        this.element = htmlToElement(`
            <div class="center">
                <div class="button" id="sendButton">${text}</div>
            </div>
        `);
        this.element.addEventListener('click', callback);

        this.render();
    }

    render() {
        this.display.innerHTML = '';
        this.display.appendChild(this.element);
    }
}
