document.addEventListener('DOMContentLoaded', () => {
    fetch('gallery.json')
        .then(response => response.json())
        .then(data => {
            const gallery = document.getElementById('gallery');
            data.forEach(item => {
                const galleryItem = document.createElement('div');
                galleryItem.classList.add('gallery-item');
                galleryItem.innerHTML = `
                    <a href="${item.fullsize}" target="_blank">
                        <img src="${item.thumbnail}" alt="${item.caption}">
                        <p>${item.caption}</p>
                    </a>
                `;
                gallery.appendChild(galleryItem);
            });
        })
        .catch(error => console.error('Ошибка загрузки JSON:', error));
});