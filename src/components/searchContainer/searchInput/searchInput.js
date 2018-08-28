import htmlToElement from 'html-to-element';

import './searchInput.scss';

export default class searchInput {
    constructor(placeholder, delay, callback) {
        this.timeout = undefined;
        this.placeholder = placeholder;
        this.delay = delay;
        this.callback = callback;
    }

    eventDelayer(event) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => this.callback(event.target.value), this.delay);
    }

    render() {
        const element = htmlToElement(`
            <div class="Suche Suche--accordion">
                <input class="input" id="searchInput" placeholder="${this.placeholder}" type="text">
                <label>
                    <i class="fa fa-search"></i>
                </label>
            </div>
        `);
        const input = element.querySelector('.input');
        input.addEventListener('input', this.eventDelayer.bind(this));
        return element;
    }
}
