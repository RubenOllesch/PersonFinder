export default {
    title: 'Mache deine chayns®-Site für andere sichtbar',
    textInputs: [
        {
            type: 'input',
            id: 'name',
            placeholder: 'Name der Site',
            required: true
        },
        {
            type: 'input',
            id: 'address',
            placeholder: 'Web-Adresse',
            required: true
        },
        {
            type: 'input',
            id: 'mail',
            placeholder: 'E-Mail',
            required: true
        },
        {
            type: 'textarea',
            id: 'comment',
            placeholder: 'Kommentar (optional)',
            required: false
        }
    ],
    buttonText: 'Hinzufügen'
};
