import { environment } from '../../environments/environment';

function getConstatnts() {
    const baseImagePath = environment.baseImagesPath + "assets/images/";
    const baseApiUrl = environment.baseApiUrl;

    const imageUrls = {
        projectInsightImageUrl: baseImagePath + "project_insight.png",
        pyramidLogoImageUrl: baseImagePath + "pyd_logo.png",

        marvelChatImageUrl: baseImagePath + "bot.png",
        userChatImageUrl: baseImagePath + "user.png",
        marvelImageUrl: baseImagePath + "assistant.gif",

        maleImageUrl: baseImagePath + "male.png",
        femaleImageUrl: baseImagePath + "female.png",
    }

    const apiUrls = {
        getUserInfoUrl: baseApiUrl + "quote/getUserInfo/",
        sendQuotesUrl: baseApiUrl +"quote/sendQuotes/"
    }

    const dataTypes = {
        dataTypeString: "string",
        dataTypeNumber: "number",
        dataTypeBoolean: "boolean"
    }

    const cssClass = {
        cssClassCardHidden: "quote-card-hidden",
        cssClassCardVisible: "quote-card-visible"
    }

    const matchPattern = {
        emailPattern: "^[A-Za-z0-9_\+-]+(\.[A-Za-z0-9_\+-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.([A-Za-z]{2,4})$"
    }

    const notificationMessage = {
        notificationDisplayDuration: 10000,
        errorNotification: "There is some problem. Please contact to administrator",
        emailSuccessNotification: "Thank you! Your message has been sent successfully."
    }

    const applicationConstants = {
        applicationTitle: "Pyramid Project Insight",
        imageUrls: imageUrls,
        apiUrls: apiUrls,
        cssClass: cssClass,
        dataTypes: dataTypes,
        matchPattern: matchPattern,
        notificationMessage: notificationMessage
    }

    return applicationConstants;
}

export const Constants = getConstatnts();
