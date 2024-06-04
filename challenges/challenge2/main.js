
// Function to generate QR Code
function generateQRCode() {
    const currentUrl = window.location.href;
    const qrText = 'Welcome to our restaurant! Scan the QR code to see the results live. URL: ' + currentUrl;

    // Generate the QR Code
    const container = document.getElementById('qrContainer');
    container.innerHTML = '';  // Clear previous content
    new QRCode(container, {
        text: qrText,
        width: 160,
        height: 160,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}

// Function to download the QR code with a custom design
function downloadQR() {
    const qrContainer = document.getElementById('qrContainer');
    const canvas = qrContainer.querySelector('canvas');
    const image = canvas.toDataURL('image/png');

    // Create an image element for download
    let link = document.createElement('a');
    link.download = 'Welcome_QR.png';
    link.href = image;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Generate QR on page load
document.addEventListener('DOMContentLoaded', generateQRCode);
