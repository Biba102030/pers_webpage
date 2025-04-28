document.addEventListener('DOMContentLoaded', () => {
    fetch('gallery.json')
        .then(response => response.json())
        .then(data => {
            const carousel = document.getElementById('carousel');
            carousel.innerHTML = ''; // Очищаем контейнер перед добавлением

            // Добавляем слайды
            data.forEach(item => {
                const slide = document.createElement('div');
                slide.classList.add('swiper-slide');
                slide.innerHTML = `
                    <img src="${item.fullsize}" alt="${item.caption}">
                    <p>${item.caption}</p>
                `;
                carousel.appendChild(slide);
            });

            // Инициализация Swiper
            const swiper = new Swiper('.swiper', {
                loop: true, // Зацикливание слайдов
                slidesPerView: 1, // Один слайд за раз
                spaceBetween: 20, // Отступ между слайдами
                centeredSlides: true, // Центрирование текущего слайда
                autoplay: {
                    delay: 3000, // Авто-пролистывание каждые 3 секунды
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            });
        })
        .catch(error => console.error('Ошибка загрузки JSON:', error));
});