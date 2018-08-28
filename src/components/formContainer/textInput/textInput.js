import htmlToElement from 'html-to-element';

import './textInput.scss';

export default (input) => {
    const {
        type,
        id,
        placeholder,
        required
    } = input;

    return htmlToElement(`
    <${type} class="input" id="${id}" type="text" placeholder="${placeholder}" ${required ? 'required' : ''} autogrow></${type}>
    `);
};
