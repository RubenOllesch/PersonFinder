import htmlToElement from 'html-to-element';
import './showMoreButton.scss';

export default (text, callback) => {
    const element = htmlToElement(`
        <div class="right">
            <a href="#">${text}</a>
        </div>
    `);
    element.addEventListener('click', callback);
    return element;
};
