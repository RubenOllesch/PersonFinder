/* eslint no-new: 0 */
import Form from './components/formContainer/formElement';
import formConfig from './constants/formConfig';
import InputHandler from './utils/inputHandler';
import { inputDelay } from './constants/searchParams';
import SearchHandler from './components/searchContainer/searchHandler';
import './main.scss';

const formField = document.querySelector('#form');
const searchInput = document.querySelector('#searchInput');
const searchField = document.querySelector('#searchResultBox');
const showMoreButton = document.querySelector('#showMoreButton');

const init = async () => {
    await chayns.ready;
    new Form(formField, formConfig, 'Absenden');

    const searchHandler = new SearchHandler(searchField);

    new InputHandler(searchInput, inputDelay, () => {
        searchHandler.newSearch(searchInput.value);
    });

    showMoreButton.addEventListener('click', () => {
        searchHandler.showMore();
    });
};

init();
