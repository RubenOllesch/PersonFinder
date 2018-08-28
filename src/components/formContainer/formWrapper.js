import htmlToElement from 'html-to-element';

export default title => htmlToElement(`
    <div class="accordion">
        <div class="accordion__head">${title}</div>
        <div class="accordion__body">
            <div class="accordion__content" id="formContent"></div>
        </div>
    </div>
`);
