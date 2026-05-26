// ДОБАВЛЕНИЕ HTML-кода ДЛЯ ИНТЕГРИРОВАНИЯ КАРТОЧЕК

function renderMovies(moviesArray, slider) {
    
    moviesArray.forEach(movie => {

        slider.innerHTML += `
        
            <div class="movies__slider-img">
                <img src="${movie.img}" alt="">
            </div>

        `;

    });

}

// ДРАМЫ--------------------------------------

const dramaMovies = [
    {
        img: "images/films/drama/Реквием по мечте.jpg"
    },

    {
        img: "images/films/drama/1+1.jpg"
    },

    {
        img: "images/films/drama/Вавилон.jpg"
    },

    {
        img: "images/films/drama/Звук металла.jpg"
    },

    {
        img: "images/films/drama/Нефть.jpg"
    },

    {
        img: "images/films/drama/Манчестер у моря.jpg"
    },

    {
        img: "images/films/drama/Учитель на замену.jpg"
    }
];

const dramaSlider = document.querySelector('.drama-slider');
renderMovies(dramaMovies, dramaSlider);

// БОЕВИКИ--------------------------------------

const actionMovies = [
    {
        img: "images/films/action/Эквилибриум.webp"
    },

    {
        img: "images/films/action/Джон Уик.jpg"
    },

    {
        img: "images/films/action/Патруль По законам улиц.jpg"
    },

    {
        img: "images/films/action/Риддик.jpg"
    },

    {
        img: "images/films/action/Миссия Невыполнима.jpeg"
    },

    {
        img: "images/films/action/300 спартанцев.jpg"
    },

    {
        img: "images/films/action/Убийца.jpg"
    }
];

const actionSlider = document.querySelector('.action-slider');
renderMovies(actionMovies, actionSlider);

// ТРИЛЛЕРЫ---------------------------------------

const thrillerMovies = [
    {
        img: "images/films/thriller/Черный лебедь.jpg"
    },

    {
        img: "images/films/thriller/Семь.jpg"
    },

    {
        img: "images/films/thriller/Перелом.jpg"
    },

    {
        img: "images/films/thriller/Неистовый.jpg"
    },

    {
        img: "images/films/thriller/Выстрел в пустоту.jpg"
    },

    {
        img: "images/films/thriller/Помни.jpg"
    },

    {
        img: "images/films/thriller/Враг.webp"
    }
];

const thrillerSlider = document.querySelector('.thriller-slider');
renderMovies(thrillerMovies, thrillerSlider);

// ДЕТЕКТИВЫ--------------------------------------

const detectiveMovies = [
    {
        img: "images/films/detective/Возмездие.jpg"
    },

    {
        img: "images/films/detective/Достать Ножи.jpg"
    },

    {
        img: "images/films/detective/Зодиак.jpg"
    },

    {
        img: "images/films/detective/Иллюзия Обмана.jpg"
    },

    {
        img: "images/films/detective/Начало.jpg"
    },

    {
        img: "images/films/detective/Престиж.jpg"
    },

    {
        img: "images/films/detective/Шерлок Холмс.jpg"
    }
];

const detectiveSlider = document.querySelector('.detective-slider');
renderMovies(detectiveMovies, detectiveSlider);

// КОМЕДИЯ----------------------------------------

const comedyMovies = [
    {
        img: "images/films/comedy/Большой Лебовски.jpg"
    },

    {
        img: "images/films/comedy/Джанго.jpg"
    },

    {
        img: "images/films/comedy/Джентльмены.jpg"
    },

    {
        img: "images/films/comedy/Зеленая Книга.jpg"
    },

    {
        img: "images/films/comedy/Один Дома.jpg"
    },

    {
        img: "images/films/comedy/Мальчишник.jpg"
    },

    {
        img: "images/films/comedy/Однажды в Голливуде.jpg"
    }
];

const comedySlider = document.querySelector('.comedy-slider');
renderMovies(comedyMovies, comedySlider);

// ПРИКЛЮЧЕНИЯ------------------------------------

const adventureMovies = [
    {
        img: "images/films/adventures/Джон Картер.jpg"
    },

    {
        img: "images/films/adventures/Круиз по Джунглям.jpg"
    },

    {
        img: "images/films/adventures/Недруги.jpg"
    },

    {
        img: "images/films/adventures/Пираты Карибского Моря.jpg"
    },

    {
        img: "images/films/adventures/Приключения Паддингтона.jpg"
    },

    {
        img: "images/films/adventures/Путешествие 2.jpg"
    },

    {
        img: "images/films/adventures/Удивительное путешествие доктора Дулиттла.jpg"
    }
];

const adventureSlider = document.querySelector('.adventure-slider');
renderMovies(adventureMovies, adventureSlider);

// ФЕНТЕЗИ----------------------------------------

const fantasyMovies = [
    {
        img: "images/films/fantasy/Аквамен.jpg"
    },

    {
        img: "images/films/fantasy/Бегущий По Лезвию.jpg"
    },

    {
        img: "images/films/fantasy/Гарри Поттер и Принц Полукровка.jpg"
    },

    {
        img: "images/films/fantasy/Фантастические Твари.jpg"
    },

    {
        img: "images/films/fantasy/Сумерки.jpg"
    },

    {
        img: "images/films/fantasy/Властелин Колец.jpg"
    },

    {
        img: "images/films/fantasy/Малифисента.jpg"
    }
];

const fantasySlider = document.querySelector('.fantasy-slider');
renderMovies(fantasyMovies, fantasySlider);

// ИСТОРИЧЕСКИЕ-----------------------------------

const historicalMovies = [
    {
        img: "images/films/historical/Царство Небесное.jpg"
    },

    {
        img: "images/films/historical/Титаник.jpg"
    },

    {
        img: "images/films/historical/Список Шиндлера.jpg"
    },

    {
        img: "images/films/historical/Оппенгеймер.jpg"
    },

    {
        img: "images/films/historical/Дюнкерк.jpg"
    },

    {
        img: "images/films/historical/Гладиатор.jpg"
    },

    {
        img: "images/films/historical/Выживший.jpg"
    }
];

const historicalSlider = document.querySelector('.historical-slider');
renderMovies(historicalMovies, historicalSlider);


// ДОБАВЛЕНИЕ АТРИБУТА ПО УСЛОВИЮ ДЛЯ ШАПКИ

let links = document.querySelectorAll('.menu__item > a');
for (let i = 0; i < links.length; i++) {
    let link = links[i];

    if (link.href !== window.location.href) {
        link.classList.add('non-active')
    }
}


// АНИМАЦИЯ СЛАЙДЕРА

const slider = document.querySelector('.slider');

const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

const cards = document.querySelectorAll('.slider__card');

let currentIndex = 0;
const cardWidth = cards[0].offsetWidth + 24;

nextBtn.addEventListener('click', () => {
    if (currentIndex < cards.length - 3) {
        currentIndex++;
        slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
});
