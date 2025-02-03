function copyToClipboard() {
    const textToCopy = "MeZq2GZrV3dvzQckgUBdRDGwBgeAdpNQR54DoaEhope"; 

    navigator.clipboard.writeText(textToCopy).then(() => {
        alert("Address copied to clipboard: " + textToCopy);
    }).catch(err => {
        console.error("Failed to copy text: ", err);
        alert("Failed to copy the address. Please try again!");
    });
}