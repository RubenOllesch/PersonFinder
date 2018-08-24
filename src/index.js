/* eslint-disable no-console */
import personFinderInit from './components/personFinder/personFinder';
import searchHandlerInit from './components/searchInputHandler/searchInputHandler';
import searchInput from './constants/siteElements';
import searchResultBox from './constants/siteElements';

import './main.scss';


const init = async () => {
    await chayns.ready;
    searchHandlerInit(searchInput, 300, newSearch());

    // start Personfinder
    personFinderInit();
};

init();
