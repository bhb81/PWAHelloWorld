async function fetchHome() {
    var theDiv = document.getElementById("main_container");
    var content = document.createTextNode("<br/>This text was added by the fetchHome function: Hello World!");
    theDiv.appendChild(content);
}

window.addEventListener('load', async e => {
    await fetchHome();

    if ('serviceWorker' in navigator) {
        try {
            navigator.serviceWorker.register('scripts/serviceWorker.js');
            console.log('SW registered');

        } catch (error) {
            console.log('SW failed');

        }
    }
});