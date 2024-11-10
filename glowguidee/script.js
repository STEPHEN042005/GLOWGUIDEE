// script.js

function uploadImage(file) {
    const formData = new FormData();
    formData.append('file', file);

    fetch('http://127.0.0.1:5000/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('output').innerHTML = `
            <p>Detected: ${data.label}</p>
            <p>Confidence: ${(data.confidence * 100).toFixed(2)}%</p>
        `;
    })
    .catch(error => console.error('Error:', error));
}

// Event listener for file input
document.getElementById('imageUpload').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        uploadImage(file);
    }
});
