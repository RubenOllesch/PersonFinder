import htmlToElement from 'html-to-element';

import './sendButton.scss';

export default text => htmlToElement(`
    <div class="center">
        <div class="button" id="sendButton">${text}</div>
    </div>
`);
