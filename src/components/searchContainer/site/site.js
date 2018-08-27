import htmlToElement from 'html-to-element';

import './site.scss';

const site = (siteData) => {
    const siteURL = `https://chayns.net/${siteData.siteId}/aboutus`;
    const iconURL = `https://sub60.tobit.com/l/${siteData.siteId}`;
    const siteName = siteData.appstoreName;

    // Create an Individual Child of the Userlist. Now you Can Write the actual HTML-Code in here
    const element = htmlToElement(`
        <div class="ListItem ListItem--clickable"  onclick="chayns.openUrlInBrowser('${siteURL}');">
            <div class="ListItem__head">
                <div class="ListItem__Image">
                    <img style="background-image: url(${iconURL})">
                </div>
                <div class="ListItem__Title">
                    <p class="ListItem__Title--headline">
                        ${siteName}
                    </p>
                    <p class="ListItem__Title--description">
                        
                    </p>
                </div>
            </div>
        </div>`);

    // return the created Element
    return element;
};

export default site;
