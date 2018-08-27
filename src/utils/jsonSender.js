export default async (jsonMessage) => {
    chayns.showWaitCursor();
    const data = await chayns.intercom.sendMessageToPage(jsonMessage);
    chayns.hideWaitCursor();
    if (data.status === 200) {
        chayns.dialog.alert('Danke für deine Beantragung');
    }
};

