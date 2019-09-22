const $ = require('jquery');
const requests = require('request');
var request = requests.defaults();
var fs = require("fs");

// $.ajax({
//     type: "GET",
//     url: "FIU_Phishing_Mitre_Dataset.csv",
//     dataType: "text",
//     success: function(data) {processData(data);}
//  });

 fs.readFile("phish.txt", "utf8", function (err, data) {
    processData(data);
 })

function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);

    allTextLines[0] += ",is_secure,extension_type,longest_string,divider_count";
    var headers = allTextLines[0].split(',');
    var lines = [];

    for (var i = 1; i < allTextLines.length - 1; i++) {
        var data = allTextLines[i].split(',');

        addData(data);

        if (data.length == headers.length) {
            var tarr = [];
            for (var j=0; j<headers.length; j++) {
                tarr.push(data[j]);
            }
            lines.push(tarr);
        }
    }

    var text = allTextLines[0] + "\n";
    for (var i = 0; i < lines.length; i++) {
        for (var j = 0; j < lines[0].length; j++) {
            text += lines[i][j] + ",";
        }

        text += "\n";
    }
   
    fs.writeFile('FIU_Phishing_Mitre_Dataset_New_2.csv', text, function (err) {
        if (err) throw err;
    });
}

function addData(data) {
    var url = data[4];
    var secure = isSecure(url);
    var extensionType = getExtensionType(url);
    var longestString = getLongestString(url);
    var dividerCount = getDividerCount(url);

    data.push(secure);
    data.push(extensionType);
    data.push(longestString);
    data.push(dividerCount);
}

function getCreatedAge(url) {

}

function getExpiryAge(url) {

}

function getUpdateAge(url) {

}

function isSecure(url) {
    if (url.includes("https")) {
        return 1;
    }

    return 0;
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

function getLongestString(url) {
    let urlSplit = url.split("/");
    var sequence = urlSplit[0];

    for (let i = 1; i < urlSplit.length; i++) {
        for (let j = i; j < urlSplit.length; j++) {
            if (urlSplit[j].length > urlSplit[i].length) {
                sequence = urlSplit[j];
            }
    }

    return sequence.length;
}
}

function getDividerCount(url) {
    var count = (url.match(/\//g) || []).length;
    return count;
}