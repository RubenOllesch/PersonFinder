import htmlToElement from 'html-to-element';

import './searchElement.scss';

export default (title, placeholder, searchMoreText) => htmlToElement(`
    <div class="accordion accordion--open" style="overflow: hidden; margin-top: 30px;">
        <div class="accordion__head">
            <div class="accordion--trigger accordion__head--search--wrapper" >
                <div class="accordion--trigger accordion__head--search">
                    ${title}
                </div>
            </div>
            <div class="Suche Suche--accordion">
                <input class="input" id="searchInput" placeholder="${placeholder}" type="text">
                <label>
                    <i class="fa fa-search"></i>
                </label>
            </div>
        </div>
        <div class="accordion__body">
            <div id="searchResultBox"></div>
            <div class="right">
                <a id="searchMoreButton" href="#">${searchMoreText}</a>
            </div>
        </div>
    </div>
`);
