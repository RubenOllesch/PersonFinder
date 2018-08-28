import htmlToElement from 'html-to-element';

import './textInput.scss';

export default (input) => {
    const {
        type,
        id,
        placeholder,
        required
    } = input;

    const requiredString = required ? 'required' : '';

    return htmlToElement(`
    <${type} class="input" id="${id}" type="text" placeholder="${placeholder}" ${requiredString} autogrow></${type}>
    `);
};
