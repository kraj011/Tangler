let backButton = document.createElement("a");
// backButton.addEventListener('click', goBack);
backButton.href = document.referrer + "?c=f"
backButton.innerHTML = "Back"
document.getElementsByTagName('body')[0].appendChild(backButton);

let br = document.createElement("br");
document.getElementsByTagName('body')[0].appendChild(br);
document.getElementsByTagName('body')[0].appendChild(br);



var urlParams = new URLSearchParams(window.location.search);
let url = urlParams.get('url');
let proceedButton = document.createElement("a");
proceedButton.href = url + "?c=t";
proceedButton.innerHTML = "Proceed"
document.getElementsByTagName('body')[0].appendChild(proceedButton);



function goBack() {
    window.history.back();
}