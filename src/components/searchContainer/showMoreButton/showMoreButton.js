import htmlToElement from 'html-to-element';
import './showMoreButton.scss';

export default class ShowMoreButton {
    constructor(display, text, callback) {
        this.display = display;

        this.element = htmlToElement(`
            <div class="right">
                <a href="#">${text}</a>
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
