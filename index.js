const button = document.getElementById('playBtn');

button.addEventListener('click', (event) => {
    document.getElementById("counterArea").innerHTML = `Click count: ${event.detail}`;
});