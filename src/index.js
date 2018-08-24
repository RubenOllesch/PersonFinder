/* eslint-disable no-console */
import personFinderInit from './components/personFinder/personFinder';
import SearchHandlerInit from './components/searchInputHandler/searchInputHandler';
import { searchInput, searchResultBox, showMoreButton } from './constants/siteElements';

import './main.scss';


const init = async () => {
    await chayns.ready;

    /* eslint-disable no-new */
    new SearchHandlerInit(searchInput, 300, () => {
        console.log('input');
    });

    // start Personfinder
    personFinderInit();
};

init();
