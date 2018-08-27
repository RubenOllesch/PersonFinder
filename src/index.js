/* eslint no-new: 0 */

import './main.scss';

import Form from './components/formContainer/formElement';
import formConfig from './constants/formConfig';

import Search from './components/searchContainer/searchElement';
import searchConfig from './constants/searchConfig';

const formField = document.querySelector('#form');
const searchField = document.querySelector('#search');

const init = async () => {
    await chayns.ready;
    new Form(formField, formConfig);
    new Search(searchField, searchConfig);
};

init();
