
import Search from './components/searchContainer/searchSetup';
import Form from './components/formContainer/form';
import searchConfig from './constants/searchConfig';
import formConfig from './constants/formConfig';

const init = async () => {
    try {
        await chayns.ready;

    const tapp = document.querySelector('.tapp__content');

    const form = new Form(formConfig);
    tapp.appendChild(form.render());
    const search = new Search(searchConfig);
    tapp.appendChild(search);

};

init();
