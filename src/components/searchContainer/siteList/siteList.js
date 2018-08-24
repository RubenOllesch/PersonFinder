import getSiteElement from '../site/site';
// import searchResultDisplay from '../../constants/siteElements';

const searchResultDisplay = document.querySelector('#searchResultBox');

export default class siteList {
    constructor() {
        // Each time you Call `new siteList()` an Array is initialised.
        // With the `this` in front the array is not bound to the function anymore, but to the whole Class. Because `this` referes to the Class
        this.sites = [];
    }

    // function to add a site to the sites-array
    addSite(site) {
        this.sites.push(site);
        this.render();
    }

    // function to clear the sites-array
    clearSites() {
        this.sites = [];
        this.render();
    }

    // function to show the actual Content
    render() {
        // locally save the array in a variable
        const sites = this.sites;

        searchResultDisplay.innerHTML = '';
        console.log(sites.length, sites);
        if (sites.length > 0) {
            // Add the Results to the sitelist
            for (const site of sites) {
                searchResultDisplay.appendChild(getSiteElement(site));
            }
        } else {
            searchResultDisplay.innerHTML = 'Keine Seiten gefunden';
        }
    }
}