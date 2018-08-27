import getSiteElement from '../site/site';

export default class siteList {
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
        if (this.sites.length > 0) {
            this.sites.forEach((site) => {
                this.display.appendChild(getSiteElement(site));
            });
        }
    }
}
