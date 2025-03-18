erInput = document.getElementById("input");
let urlOutput = document.getElementById("output");
let toggleButton = document.getElementById("toggleButton");
let searchGenerated = false;

function generateUrl() {
    if (userInput.value == "") {
        alert("Search something, you can't leave it empty...")
    } else {
        if (!searchGenerated) {
            let baseUrl = "https://www.google.com/search?q="; //This is the base url of google 
            let safeQuery = encodeURIComponent(userInput.value);
            let finalUrl = baseUrl + safeQuery;
            urlOutput.value = finalUrl;
            toggleButton.innerText = "Copy URL";
            searchGenerated = true;
        } else {
            navigator.clipboard.writeText(urlOutput.value).then(() => {
                alert("URL copied to clipboard!");
            });
            toggleButton.innerText = "Search";
            searchGenerated = false;
        }
    }
}