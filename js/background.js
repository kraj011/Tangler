// background.js
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  // here get the tab url and check if its a phishing thing
  if (tab.url.includes(chrome.extension.getURL("../html/redirect.html")) || tab.url.includes("?c=t") || tab.url.includes("?c=f")) {
    return
  }
  chrome.storage.local.get('isDisabled', function (result) {
    if (result.isDisabled === true) {
      return
    }
    if (changeInfo.status === "loading") {
      if (checkIfPhish(tab.url)) {
        // display the warning page
        displayWarning(tab.url, tabId);
      } else {
        // continue
      }
    }
  })

});

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    return {
      redirectUrl: chrome.runtime.getURL("redirect.html")
    };
  }, {
    urls: ["https://greatxkey.com/"],
    types: ["main_frame", "sub_frame"]
  },
  ["blocking"]
);

function checkIfPhish(url) {
  // first 3 are 1 1 1 1
  const json = [1, 1, 1, url, isSecure(url), getExtensionType(url), getLongestString(url), getDividerCount(url)]



  if (url.includes("google") || url.includes("yahoo") || url.includes("bing") || url.includes("gmail") || url.includes("shellhacks") || url.includes("facebook")) {
    return false
  }
  return true
}

function displayWarning(url, tabId) {
  chrome.tabs.update(tabId, {
    url: chrome.extension.getURL("../html/redirect.html") + "?url=" + url
  });
}

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
}