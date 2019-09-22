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

    if (url.includes(".html") || url.includes(".htm")) {
        return "html";
    }

    if (url.includes(".net")) {
        return "net";
    }

    if (url.includes(".org")) {
        return "org";
    }

    return "other";
}

function getDividerCount(url) {
    var count = (url.match(/\//g) || []).length;
    return count;
}