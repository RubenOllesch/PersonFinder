import Form from './components/formContainer/formSetup';
import Search from './components/searchContainer/searchHandler';

import searchConfig from './constants/searchConfig';
import formConfig from './constants/formConfig';

const init = async () => {
    try {
        await chayns.ready;

        const tapp = document.querySelector('.tapp__content');
        tapp.appendChild(new Form(formConfig));
        tapp.appendChild(new Search(searchConfig));
    } catch (error) {
        console.error(error);
    }
};

init();
