'use strict';

/* eslint no-new: 0 */
/* eslint no-underscore-dangle: 0 */

import htmlToElement from 'html-to-element';
import SiteList from './siteList/siteList';
import SearchElement from './searchInput/searchInput';
import ButtonElement from './showMoreButton/showMoreButton';
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

        this.element = htmlToElement(`
            <div class="accordion accordion--open" style="overflow: hidden; margin-top: 30px;">
                <div class="accordion__head">
                    <div class="accordion--trigger accordion__head--search--wrapper" >
                        <div class="accordion--trigger accordion__head--search">
                            ${title}
                        </div>
                    </div>
                    <div id="searchInput"></div>
                </div>
                <div class="accordion__body">
                    <div id="siteList"></div>
                    <div id="searchMore"></div>
                </div>
            </div>
        `);

        const searchInputContainer = this.element.querySelector('#searchInput');
        this.searchInput = new SearchElement(searchInputContainer, placeholder, inputDelay, this._newSearch.bind(this));

        const listContainer = this.element.querySelector('#siteList');
        this.siteList = new SiteList(listContainer);

        const buttonContainer = this.element.querySelector('#searchMore');
        this.searchMoreButton = new ButtonElement(buttonContainer, showMoreText, this._searchMore.bind(this));


        this.searchString = '';
        this.skip = 0;
        this.take = take;


        this.render();
    }

    _newSearch(searchString) {
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
        if (this.searchString === '') {
            // would be like *
            return;
        }
        const url = `https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=${this.searchString}&Skip=${this.skip}&Take=${this.take}`;
        const data = await jsonFetcher(url);
        if (data.ResultCode === 1) {
            // no results
            return;
        }
        const results = data.Data;
        results.forEach((site) => {
            this.siteList.addSite(site);
        });
    }

    render() {
        this.display.innerHTML = '';
        this.display.appendChild(this.element);
    }
}
