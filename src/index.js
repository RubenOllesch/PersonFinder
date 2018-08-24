/* eslint-disable no-console */
import SearchInput from './components/searchInputHandler/searchInputHandler';
import searchInputDelay from './constants/searchInputDelay';
import { searchInput, showMoreButton } from './constants/siteElements';
import SiteList from './components/siteList/siteList';

import './main.scss';


const init = async () => {
    await chayns.ready;

    /* eslint-disable no-new */
    new SearchInput(searchInput, searchInputDelay, () => {
        const siteList = new SiteList();
        siteList.addSite({});
    });

    showMoreButton.addEventListener('click', () => {
        console.log('showMore');
    });
};

init();
