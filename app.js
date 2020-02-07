async function fetchHome() {
    document.getElementById("container").innerHTML = "Now Online";
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