let data = sessionStorage.getItem('item');
let topBar = document.getElementById('imagen');
let title = document.getElementById('title');
title.innerText = 'Plot ' + data;
topBar.addEventListener('click', () => {
    location.href = './index.html';
});
let plot = document.getElementById('plot');
plot.src = `./images/${data}.png`;

console.log(plot.src);
for (let i = 0; i <= 75; i++) {
    let div = document.createElement('li');
    div.addEventListener('click', () => {
        sessionStorage.setItem('item', i);
        location.href = './plots.html';
    });
    div.innerText = 'Item ' + i;
    sidebar.appendChild(div);    
}
// Hamburger button functionality
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.createElement('button');
    hamburger.classList.add('hamburger');
    hamburger.innerHTML = '☰'; // Icono de hamburguesa
    document.querySelector('.topBar').appendChild(hamburger);

    const sidebar = document.querySelector('.sidebar');

    hamburger.addEventListener('click', () => {
        sidebar.style.display = (sidebar.style.display === 'block' || sidebar.style.display === '') ? 'none' : 'block';
    });
});

