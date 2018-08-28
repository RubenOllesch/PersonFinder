/* eslint no-new: 0 */

import Form from './components/formContainer/formHandler';
import Search from './components/searchContainer/searchHandler';

import searchConfig from './constants/searchConfig';
import formConfig from './constants/formConfig';

const init = async () => {
    await chayns.ready;

    const tapp = document.querySelector('.tapp__content');
    tapp.appendChild(new Form(formConfig));
    tapp.appendChild(new Search(searchConfig));
};

init();
