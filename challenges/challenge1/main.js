
function storeUserInfo() {
    const language = navigator.language;
    document.cookie = `userLanguage=${language};max-age=${60 * 60 * 24 * 7};path=/`;

    // Assuming getLocalCurrency function is defined elsewhere
    getLocalCurrency().then(currency => {
        document.cookie = `userCurrency=${currency};max-age=${60 * 60 * 24 * 7};path=/`;
    }).catch(error => {
        console.error("Failed to get currency:", error);
    });

    const localTime = new Date().toLocaleTimeString();
    document.cookie = `userLocalTime=${localTime};max-age=${60 * 60 * 24 * 7};path=/`;
}
