'use strict';

/* eslint no-underscore-dangle: 0 */

import SiteList from './siteList/siteList';
import searchFetcher from './searchFetcher/searchFetcher';
import { TAKE } from '../../constants/searchParams';

export default class searchHandler {
    constructor() {
        this.searchString = '';
        this.skip = 0;
        this.siteList = new SiteList();
    }

    newSearch(searchString) {
        this.searchString = searchString;
        this.skip = 0;
        this._search();
    }

    showMore() {
        this.skip += TAKE;
        this._search();
    }

    async _search() {
        const url = this._generateURL();
        const data = await searchFetcher(url);
        const results = data.Data;
        for (const site of results) {
            this.siteList.addSite(site);
        }
    }

    _generateURL() {
        return `https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=${this.searchString}&Skip=${this.skip}&take=${TAKE}`;
    }
}
