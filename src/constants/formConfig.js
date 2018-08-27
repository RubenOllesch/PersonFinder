export default {
    title: 'Mache deine chayns®-Site für andere sichtbar',
    textInputs: [
        {
            type: 'input',
            name: 'name',
            placeholder: 'Name der Site',
            required: true
        },
        {
            type: 'input',
            name: 'address',
            placeholder: 'Web-Adresse',
            required: true
        },
        {
            type: 'input',
            name: 'mail',
            placeholder: 'E-Mail',
            required: true
        },
        {
            type: 'textarea',
            name: 'comment',
            placeholder: 'Kommentar (optional)',
            required: false
        }
    ],
    buttonText: 'Hinzufügen'
};
