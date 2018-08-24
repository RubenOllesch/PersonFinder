/* eslint-disable no-console */
import SearchInput from './components/searchContainer/searchInput/searchInput';
import searchInputDelay from './constants/searchInputDelay';
import SearchHandler from './components/searchContainer/searchHandler';

import './main.scss';

const showMoreButton = document.querySelector('#showMoreButton');
const searchInput = document.querySelector('#searchInput');

const init = async () => {
    await chayns.ready;
    const searchHandler = new SearchHandler();

    /* eslint-disable no-new */
    new SearchInput(searchInput, searchInputDelay, () => {
        searchHandler.newSearch(searchInput.nodeValue);
    });

    showMoreButton.addEventListener('click', () => {
        console.log('showMore');
        searchHandler.showMore();
    });
};

init();
