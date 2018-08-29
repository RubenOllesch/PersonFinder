/* eslint no-underscore-dangle: 0 */

import getSiteElement from '../siteList/site/site';

export default class SiteList {
    constructor(display) {
        this.display = display;
        this.sites = [];
    }

    addSite(site) {
        this.sites.push(site);
        this.render();
    }

    clearSites() {
        this.sites = [];
        this.render();
    }

    render() {
        this.display.innerHTML = '';

        const element = document.createElement('div');
        this.sites.forEach((site) => {
            element.appendChild(getSiteElement(site));
        });

        this.display.appendChild(element);
    }
}
