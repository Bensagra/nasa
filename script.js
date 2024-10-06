let sidebar = document.getElementById('sidebar');
sessionStorage.setItem('item', '0');

for (let i = 0; i <= 63; i++) {
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

