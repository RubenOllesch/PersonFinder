import htmlToElement from 'html-to-element';

import './searchInput.scss';

export default class SearchInput {
    constructor(display, placeholder, delay, callback) {
        this.display = display;
        this.timeout = undefined;
        this.delay = delay;
        this.callback = callback;

        this.element = htmlToElement(`
            <div class="Suche Suche--accordion">
                <input class="input" id="searchInput" placeholder="${placeholder}" type="text">
                <label>
                    <i class="fa fa-search"></i>
                </label>
            </div>
        `);
        const input = this.element.querySelector('.input');
        input.addEventListener('input', this.eventDelayer.bind(this));

        this.render();
    }

    eventDelayer(event) {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => this.callback(event.target.value), this.delay);
    }

    render() {
        this.display.innerHTML = '';
        this.display.appendChild(this.element);
    }
}
