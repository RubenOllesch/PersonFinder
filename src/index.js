/* eslint no-new: 0 */

import Form from './components/formContainer/formElement';
import { textInputs, buttonText } from './constants/formConfig';
import Search from './components/searchContainer/searchHandler';

import './main.scss';

const formField = document.querySelector('#form');
const searchInput = document.querySelector('#searchInput');
const searchField = document.querySelector('#searchResultBox');
const searchMore = document.querySelector('#showMoreButton');

const init = async () => {
    await chayns.ready;
    new Search(searchField, searchInput, searchMore);
    new Form(formField, textInputs, buttonText);
};

init();
