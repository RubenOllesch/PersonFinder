'use strict';

/* eslint no-new: 0 */
/* eslint no-underscore-dangle: 0 */

import SiteList from './siteList/siteList';
import jsonFetcher from '../../utils/jsonFetcher';
import InputHandler from '../../utils/inputHandler';
import { TAKE, inputDelay } from '../../constants/searchParams';

export default class SearchHandler {
    constructor(display, searchInput, searchMore) {
        this.searchString = '';
        this.skip = 0;
        this.siteList = new SiteList(display);

        searchMore.addEventListener('click', () => {
            this._showMore();
        });

        new InputHandler(searchInput, inputDelay, () => {
            this._newSearch(searchInput.value);
        });
    }

    _newSearch(searchString) {
        this.searchString = searchString;
        this.skip = 0;
        this.siteList.clearSites();
        this._addResults();
    }

    _showMore() {
        this.skip += TAKE;
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
        return `https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=${this.searchString}&Skip=${this.skip}&take=${TAKE}`;
    }
}
