// background.js
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  // here get the tab url and check if its a phishing thing
  // chrome.tabs.create({
  //     url: chrome.extension.getURL("background.html")
  // });
  //   if (tab.url.includes("google")) {
  //     chrome.tabs.update(tabId, {
  //       url: chrome.extension.getURL("background.html")
  //     });
  //   }
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

function checkIfPhish(url) {
  // send request to azure thing
  // fetch('https://tangler.cognitiveservices.azure.com/')
  //   .then(function (response) {
  //     return response.json();
  //   })
  //   .then(function (myJson) {
  //     console.log(JSON.stringify(myJson));
  //   });
  return true
}

function displayWarning(url, tabId) {
  chrome.tabs.update(tabId, {
    url: chrome.extension.getURL("../html/redirect.html") + "?url=" + url
  });
}