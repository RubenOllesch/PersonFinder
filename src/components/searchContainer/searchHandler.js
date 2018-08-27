'use strict';

/* eslint no-underscore-dangle: 0 */

import SiteList from './siteList/siteList';
import searchFetcher from '../../utils/searchFetcher';
import { TAKE } from '../../constants/searchParams';

export default class SearchHandler {
    constructor(display) {
        this.searchString = '';
        this.skip = 0;
        this.siteList = new SiteList(display);
    }

    newSearch(searchString) {
        this.searchString = searchString;
        this.skip = 0;
        this.siteList.clearSites();
        this._addResults();
    }

    showMore() {
        this.skip += TAKE;
        this._addResults();
    }

    async _addResults() {
        const url = this._generateURL();
        const data = await searchFetcher(url);
        const results = data.Data;
        results.forEach((site) => {
            this.siteList.addSite(site);
        });
    }

    _generateURL() {
        return `https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=${this.searchString}&Skip=${this.skip}&take=${TAKE}`;
    }
}
