'use strict';

/* eslint no-new: 0 */
/* eslint no-underscore-dangle: 0 */

import htmlToElement from 'html-to-element';
import SiteList from './siteList/siteList';
import SearchElement from './searchInput/searchInput';
import getButtonElement from './showMoreButton/showMoreButton';
import jsonFetcher from '../../utils/jsonFetcher';

export default class SearchSetup {
    constructor(display, config) {
        this.display = display;
        const {
            title,
            placeholder,
            showMoreText,
            take,
            inputDelay
        } = config;

        this.title = title;


        this.siteList = new SiteList();

        const newSearch = this._newSearch.bind(this);
        this.searchInput = new SearchElement(placeholder, inputDelay, newSearch);

        const searchMore = this._searchMore.bind(this);
        this.searchMoreButton = getButtonElement(showMoreText, searchMore);


        this.searchString = '';
        this.skip = 0;
        this.take = take;

        this.render();
    }

    _newSearch(searchString) {
        this.siteList.clearSites();
        if (searchString === '') {
            return;
        }
        this.searchString = searchString;
        this.skip = 0;
        this.siteList.clearSites();
        this._searchHandler();
    }

    _searchMore() {
        this.skip += this.take;
        this._searchHandler();
    }

    async _searchHandler() {
        const url = this._searchURL();
        const data = await jsonFetcher(url);
        const results = data.Data;
        results.forEach((site) => {
            this.siteList.addSite(site);
        });
        this.render();
    }

    _searchURL() {
        return `https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=${this.searchString}&Skip=${this.skip}&Take=${this.take}`;
    }

    render() {
        this.display.innerHTML = '';

        const element = htmlToElement(`
            <div class="accordion accordion--open" style="overflow: hidden; margin-top: 30px;">
                <div class="accordion__head">
                    <div class="accordion--trigger accordion__head--search--wrapper" >
                        <div class="accordion--trigger accordion__head--search">
                            ${this.title}
                        </div>
                    </div>
                </div>
                <div class="accordion__body">
                </div>
            </div>
        `);
        const elementHead = element.querySelector('.accordion__head');
        elementHead.appendChild(this.searchInput.render());

        const elementBody = element.querySelector('.accordion__body');
        elementBody.appendChild(this.siteList.render());
        elementBody.appendChild(this.searchMoreButton);

        this.display.appendChild(element);
    }
}
