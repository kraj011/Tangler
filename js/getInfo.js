function getCreatedAge(url) {

}

function getExpiryAge(url) {

}

function getUpdateAge(url) {

}

function isSecure(url) {
    if (url.includes("https")) {
        return true;
    }

    return false;
}

function getExtensionType(url) {
    if (url.includes(".com")) {
        return "com";
    }

    if (url.includes(".gov")) {
        return "gov";
    }

    if (url.includes(".net")) {
        return "net";
    }

    if (url.includes(".edu")) {
        return "edu";
    }

    if (url.includes(".org")) {
        return "org";
    }

    if (url.includes(".html") || url.includes(".htm")) {
        return "html";
    }

    if (url.includes("&amp")) {
        return "amp";
    }
    
    return "other";
}

function getLongestString() {
    let url = "";
    let urlSplit = url.split("/");
    var sequence = urlSplit[0];

    for (let i = 1; i < urlSplit.length; i++) {
        for (let j = i; j < urlSplit.length; j++) {
            if (urlSplit[j].length > urlSplit[i].length) {
                sequence = urlSplit[j];
            }
    }
}