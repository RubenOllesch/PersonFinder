/* eslint no-new: 0 */

import Form from './components/formContainer/formElement';
import formConfig from './constants/formConfig';
import SearchHandler from './components/searchContainer/searchHandler';
import './main.scss';

const formField = document.querySelector('#form');
const searchInput = document.querySelector('#searchInput');
const searchField = document.querySelector('#searchResultBox');
const searchMore = document.querySelector('#showMoreButton');

const init = async () => {
    await chayns.ready;

    new Form(formField, formConfig, 'Absenden');
    new SearchHandler(searchField, searchInput, searchMore);
};

init();
