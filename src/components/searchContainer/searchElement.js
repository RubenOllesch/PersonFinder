'use strict';

/* eslint no-new: 0 */
/* eslint no-underscore-dangle: 0 */

import htmlToElement from 'html-to-element';
import SiteList from './siteList/siteList';
import jsonFetcher from '../../utils/jsonFetcher';
import InputHandler from '../../utils/inputHandler';

export default class SearchHandler {
    constructor(target, config) {
        const {
            title,
            placeholder,
            showMoreText,
            take,
            inputDelay
        } = config;

        const search = this._generateSearch(title, placeholder, showMoreText);
        target.appendChild(search);

        const searchInput = document.querySelector('#searchInput');
        InputHandler.addInput(searchInput, inputDelay, () => {
            this._newSearch(searchInput.value);
        });

        const searchMoreButton = document.querySelector('#searchMoreButton');
        searchMoreButton.addEventListener('click', () => {
            this._showMore();
        });

        const searchResultBox = document.querySelector('#searchResultBox');
        this.siteList = new SiteList(searchResultBox);
        this.searchString = '';
        this.skip = 0;
        this.take = take;
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

    _generateSearch(title, placeholder, searchMoreText) {
        this.search = htmlToElement(`
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
        return this.search;
    }
}
