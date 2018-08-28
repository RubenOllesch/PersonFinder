/* eslint-disable no-unused-vars */

import Form from './components/formContainer/form';
import Search from './components/searchContainer/search';

import searchConfig from './constants/searchConfig';
import formConfig from './constants/formConfig';

const init = async () => {
    await chayns.ready;

    const formDisplay = document.body.querySelector('#form');
    const form = new Form(formDisplay, formConfig);

    const searchDisplay = document.body.querySelector('#search');
    const search = new Search(searchDisplay, searchConfig);
};

init();
