/* eslint no-underscore-dangle: 0 */

import getSiteElement from '../site/site';

export default class SiteList {
    constructor(display) {
        this.display = display;
        this.sites = [];
    }

    addSite(site) {
        this.sites.push(site);
        this._render();
    }

    clearSites() {
        this.sites = [];
        this._render();
    }

    _render() {
        this.display.innerHTML = '';
        this.sites.forEach((site) => {
            this.display.appendChild(getSiteElement(site));
        });
    }
}
