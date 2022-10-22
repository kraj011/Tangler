chrome.storage.local.get('isDisabled', (result) => {

    if (result.isDisabled === true) {
        // pop it up as disabled
        let button = document.createElement("button");
        button.innerHTML = "Enable for all sites"
        button.addEventListener('click', toggleEnabled)
        button.id = "enableButton";

        document.getElementsByTagName("body")[0].appendChild(button);
    } else {
        // pop it up as enabled
        let button = document.createElement("button");
        button.innerHTML = "Disable for all sites"
        button.addEventListener('click', toggleEnabled)
        button.id = "enableButton";
        document.getElementsByTagName("body")[0].appendChild(button);
    }
});

const toggleEnabled = () => {
    let button = document.getElementById("enableButton");
    if (button.innerHTML.includes("Disable")) {
        chrome.storage.local.set({
            'isDisabled': true
        });
        button.innerHTML = "Enable for all sites"
    } else {
        chrome.storage.local.set({
            'isDisabled': false
        });
        button.innerHTML = "Disable for all sites"
    }
}
