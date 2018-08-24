/* eslint-disable no-console */
import SearchInputInit from './components/searchInputHandler/searchInputHandler';
import searchInputDelay from './constants/searchInputDelay';
import { searchInput, showMoreButton } from './constants/siteElements';

import './main.scss';


const init = async () => {
    await chayns.ready;

    /* eslint-disable no-new */
    new SearchInputInit(searchInput, searchInputDelay, () => {
        console.log('newSearch');
    });

    showMoreButton.addEventListener('click', () => {
        console.log('showMore');
    });
};

init();
