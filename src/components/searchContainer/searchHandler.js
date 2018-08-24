'use strict';

import SiteList from './siteList/siteList';
import searchFetcher from './searchFetcher/searchFetcher';
import TAKE from '../../constants/searchParams';

export default class searchHandler {
    constructor() {
        this.searchString = '';
        this.skip = 0;
        this.siteList = new SiteList();
    }

    newSearch(searchString) {
        this.searchString = searchString;
        _search();
    }

    showMore() {
        this.skip += TAKE;
        _search();
    }

    _search() {
        const url = _generateURL();
        const data = await searchFetcher(url);
        const results = data.Data;
        for (const site of results) {
            this.siteList.add(site);
        }
    }

    _generateURL() {
        return `https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=${this.searchString}&Skip=${this.skip}&Take=${TAKE}`;
    }
}
