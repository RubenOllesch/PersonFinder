export default async (jsonMessage) => {
    chayns.showWaitCursor();
    const data = await chayns.intercom.sendMessageToPage({
        text: jsonMessage
    });
    chayns.hideWaitCursor();
    if (data.status === 200) {
        chayns.dialog.alert('Danke für deine Nachricht');
    } else {
        chayns.dialog.alert('Leider gab es einen Fehler');
    }
};
