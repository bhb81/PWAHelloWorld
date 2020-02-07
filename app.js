async function fetchHome() {
    var theDiv = document.getElementById("container");
    var content = "Now Online";
    document.getElementById(theDiv).innerHTML = content;
}

window.addEventListener('load', async e => {
    await fetchHome();

    if ('serviceWorker' in navigator) {
        try {
            navigator.serviceWorker.register('serviceworker.js');
            console.log('SW registered');

        } catch (error) {
            console.log('SW failed');

        }
    }
});