/* eslint no-underscore-dangle: 0 */

import getSiteElement from '../siteList/site/site';

export default class SiteList {
    constructor() {
        this.sites = [];
    }

    addSite(site) {
        this.sites.push(site);
    }

    clearSites() {
        this.sites = [];
    }

    render() {
        const element = document.createElement('div');
        this.sites.forEach((site) => {
            element.appendChild(getSiteElement(site));
        });
        return element;
    }
}
