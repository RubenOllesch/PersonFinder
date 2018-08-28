'use strict';

/* eslint no-new: 0 */
/* eslint no-underscore-dangle: 0 */

import generateSearch from './searchWrapper/searchWrapper';
import SiteList from './siteList';
import jsonFetcher from '../../utils/jsonFetcher';
import InputHandler from '../../utils/inputHandler';

export default class SearchSetup {
    constructor(config) {
        const {
            title,
            placeholder,
            showMoreText,
            take,
            inputDelay
        } = config;

        const search = generateSearch(title, placeholder, showMoreText);

        const searchInput = search.querySelector('#searchInput');
        InputHandler.addInput(searchInput, inputDelay, () => {
            this._newSearch(searchInput.value);
        });

        const searchMoreButton = search.querySelector('#searchMoreButton');
        searchMoreButton.addEventListener('click', () => {
            this._showMore();
        });

        const searchResultBox = search.querySelector('#searchResultBox');
        this.siteList = new SiteList(searchResultBox);

        this.searchString = '';
        this.skip = 0;
        this.take = take;

        return search;
    }

    _newSearch(searchString) {
        this.searchString = searchString;
        this.skip = 0;
        this.siteList.clearSites();
        this._addResults();
    }

    _showMore() {
        this.skip += this.take;
        this._addResults();
    }

    async _addResults() {
        const url = this._generateURL();
        const data = await jsonFetcher(url);
        const results = data.Data;
        results.forEach((site) => {
            this.siteList.addSite(site);
        });
    }

    _generateURL() {
        return `https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=${this.searchString}&Skip=${this.skip}&take=${this.take}`;
    }
}
