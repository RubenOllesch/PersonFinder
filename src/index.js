/* eslint-disable no-console */
import personFinderInit from './components/personFinder/personFinder';
import SearchHandlerInit from './components/searchInputHandler/searchInputHandler';
import { searchInput, searchResultBoxfrom } from './constants/siteElements';

import './main.scss';


const init = async () => {
    await chayns.ready;
    console.log('test');
    new SearchHandlerInit(searchInput, 300, () => {
        console.log('input');
    });

    // start Personfinder
    personFinderInit();
};

init();
