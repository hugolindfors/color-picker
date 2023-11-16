function randomColor() {
    return `#${Math.floor(Math.random() * 16777216).toString(16).padStart(6, "0")}`;
}

function colorPicker() {
    let randomColorStr = randomColor();
    document.querySelector("body").style.backgroundColor = randomColorStr;
    document.querySelector("#hex-code-container").innerText = randomColorStr;
}

async function copyToClipboard() {
    let text = document.getElementById("hex-code-container").innerHTML.toLocaleUpperCase();
    try {
        await navigator.clipboard.writeText(text);
        console.log('Content copied to clipboard');
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}

document.addEventListener("DOMContentLoaded", colorPicker());
document.querySelector("#new-hex-code-btn").addEventListener("click", () => colorPicker());
document.querySelector("#hex-code-container").addEventListener("click", () => copyToClipboard());