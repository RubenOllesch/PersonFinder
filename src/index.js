import InputHandler from './utils/inputHandler';
import { inputDelay } from './constants/searchParams';
import SearchHandler from './components/searchContainer/searchHandler';
import './main.scss';

const showMoreButton = document.querySelector('#showMoreButton');
const searchInput = document.querySelector('#searchInput');

const init = async () => {
    await chayns.ready;
    const searchHandler = new SearchHandler();

    /* eslint-disable no-new */
    new InputHandler(searchInput, inputDelay, () => {
        searchHandler.newSearch(searchInput.value);
    });

    showMoreButton.addEventListener('click', () => {
        searchHandler.showMore();
    });
};

init();
