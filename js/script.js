'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const img = document.querySelectorAll('.promo__adv img'), // img - рекламы
        genre = document.querySelector('.promo__genre'), // жанры
        backgroundSize = document.querySelector('.promo__bg'), // фон
        bgFilms = document.querySelector('.promo__interactive-list'), //блок с фильмами
        formAdd = document.querySelector('.add'),
        addInput = document.querySelector('.adding__input'),
        checkbox = document.querySelector('[type="checkbox"]');

    formAdd.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log("Добавляем любимый фильм");
            }

            movieDB.movies.push(newFilm); // + фильм в массив
            sortArr(movieDB.movies); // Сортировка фильмов в алфавитном порядке

            addNewFilm(movieDB.movies, bgFilms);

        }
        event.target.reset();
    });

    const deleteAdv = (arr) => {
        arr.forEach(item =>
            item.remove());
    };
    deleteAdv(img); // Удаление рекламы с сайта 

    const makeSomeChanges = () => {
        genre.textContent = 'ДРАМА';
        backgroundSize.style.cssText =
            "background: url('img/bg.jpg'); background-size: cover; background-position: top;";
    };

    makeSomeChanges(); // Нек. изменени на сайте (в д.с.: жанр и фон)

    const sortArr = (arr) => {
        arr.sort();
    };

    function addNewFilm(film, parent) {
        sortArr(movieDB.movies);
        parent.innerHTML = '';

        film.forEach((film, i) => {
            parent.innerHTML += `
    <li class="promo__interactive-item">${i + 1}. ${film}
    <div class="delete"></div>
    </li>
    `;
        });
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                addNewFilm(movieDB.movies, bgFilms);
            });
        });
    }

    addNewFilm(movieDB.movies, bgFilms);
});