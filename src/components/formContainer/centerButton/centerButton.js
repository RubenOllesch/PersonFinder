import htmlToElement from 'html-to-element';

import './centerButton.scss';

export default (text, callback) => {
    const element = htmlToElement(`
        <div class="center">
            <div class="button" id="sendButton">${text}</div>
        </div>
    `);
    element.addEventListener('click', callback);
    return element;
};
