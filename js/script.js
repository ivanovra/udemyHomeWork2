'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const img = document.querySelectorAll('.promo__adv img'),
      genre = document.querySelector('.promo__genre'),
      bg = document.querySelector('.promo__bg'),
      films = document.querySelectorAll('.promo__interactive-list .promo__interactive-item'),
      bgFilms = document.querySelector('.promo__interactive-list');
    
img.forEach(item => 
    item.remove());

genre.textContent = 'ДРАМА';

bg.style.cssText = "background: url('img/bg.jpg'); background-size: cover; background-position: top;";

films.forEach(item => 
    item.remove());

movieDB.movies.sort();  
    
movieDB.movies.forEach((film, i) =>
    bgFilms.innerHTML += `
    <li class="promo__interactive-item">${i + 1}. ${film}
    <div class="delete"></div>
    </li>
    `);