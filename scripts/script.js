// Поиск по жанру

const searchForm = document.querySelector('.search');
const searchInput = document.querySelector('.search__input');

const genres = {
    'драма': 'drama',
    'боевик': 'action',
    'триллер': 'thriller',
    'комедия': 'comedy',
    'детектив': 'detective',
    'фентези': 'fantasy',
    'исторические': 'historical',
    'приключения': 'adventure'
};

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const value = searchInput.value.toLowerCase().trim();

    if (genres[value]) {
        const section = document.querySelector(`#${genres[value]}`);
        section.scrollIntoView({
            behavior: 'smooth'
        });
    } else {
        alert('Введите корректный жанр');
    }

});

searchForm.addEventListener('submit', (event) => {

})

// Добавление HTML-кода для интегрирования карточек

function renderMovies(moviesArray, slider) {
   
    moviesArray.forEach(movie => {
        slider.innerHTML += `

            <div class="movies__card">
                <img src="${movie.img}" alt="">

                <div class="movies__info">
                    <h4>${movie.title}</h4>
                    <span>${movie.year}</span>
                </div>
            </div>
            
        `;

    });

}

// ДРАМЫ--------------------------------------

const dramaMovies = [

    {
        img: "images/films/drama/Реквием по мечте.jpg",
        year: 2000,
        title: "Реквием по мечте"
    },

    {
        img: "images/films/drama/1+1.jpg",
        year: 2011,
        title: "1+1"
    },

    {
        img: "images/films/drama/Вавилон.jpg",
        year: 2022,
        title: "Вавилон"
    },

    {
        img: "images/films/drama/Звук металла.jpg",
        year: 2019,
        title: "Звук металла"
    },

    {
        img: "images/films/drama/Нефть.jpg",
        year: 2007,
        title: "Нефть"
    },

    {
        img: "images/films/drama/Манчестер у моря.jpg",
        year: 2016,
        title: "Манчестер у моря"
    },

    {
        img: "images/films/drama/Учитель на замену.jpg",
        year: 2011,
        title: "Учитель на замену"
    }

];

const dramaSlider = document.querySelector('.drama-slider');
renderMovies(dramaMovies, dramaSlider);

// БОЕВИКИ--------------------------------------

const actionMovies = [

    {
        img: "images/films/action/Эквилибриум.webp",
        year: 2002,
        title: "Эквилибриум"
    },

    {
        img: "images/films/action/Джон Уик.jpg",
        year: 2014,
        title: "Джон Уик"
    },

    {
        img: "images/films/action/Патруль По законам улиц.jpg",
        year: 2012,
        title: "Патруль"
    },

    {
        img: "images/films/action/Риддик.jpg",
        year: 2013,
        title: "Риддик"
    },

    {
        img: "images/films/action/Миссия Невыполнима.jpeg",
        year: 2023,
        title: "Миссия невыполнима"
    },

    {
        img: "images/films/action/300 спартанцев.jpg",
        year: 2006,
        title: "300 спартанцев"
    },

    {
        img: "images/films/action/Убийца.jpg",
        year: 2015,
        title: "Убийца"
    }

];

const actionSlider = document.querySelector('.action-slider');
renderMovies(actionMovies, actionSlider);

// ТРИЛЛЕРЫ---------------------------------------

const thrillerMovies = [

    {
        img: "images/films/thriller/Черный лебедь.jpg",
        year: 2010,
        title: "Черный лебедь"
    },

    {
        img: "images/films/thriller/Семь.jpg",
        year: 1995,
        title: "Семь"
    },

    {
        img: "images/films/thriller/Перелом.jpg",
        year: 2007,
        title: "Перелом"
    },

    {
        img: "images/films/thriller/Неистовый.jpg",
        year: 2020,
        title: "Неистовый"
    },

    {
        img: "images/films/thriller/Выстрел в пустоту.jpg",
        year: 2017,
        title: "Выстрел в пустоту"
    },

    {
        img: "images/films/thriller/Помни.jpg",
        year: 2000,
        title: "Помни"
    },

    {
        img: "images/films/thriller/Враг.webp",
        year: 2013,
        title: "Враг"
    }

];

const thrillerSlider = document.querySelector('.thriller-slider');
renderMovies(thrillerMovies, thrillerSlider);

// ДЕТЕКТИВЫ--------------------------------------

const detectiveMovies = [

    {
        img: "images/films/detective/Возмездие.jpg",
        year: 2010,
        title: "Возмездие"
    },

    {
        img: "images/films/detective/Достать Ножи.jpg",
        year: 2019,
        title: "Достать ножи"
    },

    {
        img: "images/films/detective/Зодиак.jpg",
        year: 2007,
        title: "Зодиак"
    },

    {
        img: "images/films/detective/Иллюзия Обмана.jpg",
        year: 2013,
        title: "Иллюзия обмана"
    },

    {
        img: "images/films/detective/Начало.jpg",
        year: 2010,
        title: "Начало"
    },

    {
        img: "images/films/detective/Престиж.jpg",
        year: 2006,
        title: "Престиж"
    },

    {
        img: "images/films/detective/Шерлок Холмс.jpg",
        year: 2009,
        title: "Шерлок Холмс"
    }

];

const detectiveSlider = document.querySelector('.detective-slider');
renderMovies(detectiveMovies, detectiveSlider);

// КОМЕДИЯ----------------------------------------

const comedyMovies = [

    {
        img: "images/films/comedy/Большой Лебовски.jpg",
        year: 1998,
        title: "Большой Лебовски"
    },

    {
        img: "images/films/comedy/Джанго.jpg",
        year: 2012,
        title: "Джанго освобожденный"
    },

    {
        img: "images/films/comedy/Джентльмены.jpg",
        year: 2019,
        title: "Джентльмены"
    },

    {
        img: "images/films/comedy/Зеленая Книга.jpg",
        year: 2018,
        title: "Зеленая книга"
    },

    {
        img: "images/films/comedy/Один Дома.jpg",
        year: 1990,
        title: "Один дома"
    },

    {
        img: "images/films/comedy/Мальчишник.jpg",
        year: 2009,
        title: "Мальчишник в Вегасе"
    },

    {
        img: "images/films/comedy/Однажды В Голливуде.jpg",
        year: 2019,
        title: "Однажды в Голливуде"
    }

];

const comedySlider = document.querySelector('.comedy-slider');
renderMovies(comedyMovies, comedySlider);

// ПРИКЛЮЧЕНИЯ------------------------------------

const adventureMovies = [

    {
        img: "images/films/adventures/Джон Картер.jpg",
        year: 2012,
        title: "Джон Картер"
    },

    {
        img: "images/films/adventures/Круиз по Джунглям.jpg",
        year: 2021,
        title: "Круиз по джунглям"
    },

    {
        img: "images/films/adventures/Недруги.jpg",
        year: 2017,
        title: "Недруги"
    },

    {
        img: "images/films/adventures/Пираты Карибского Моря.jpg",
        year: 2003,
        title: "Пираты Карибского моря"
    },

    {
        img: "images/films/adventures/Приключения Паддингтона.jpg",
        year: 2014,
        title: "Приключения Паддингтона"
    },

    {
        img: "images/films/adventures/Путешествие 2.jpg",
        year: 2012,
        title: "Путешествие 2"
    },

    {
        img: "images/films/adventures/Удивительное путешествие доктора Дулиттла.jpg",
        year: 2020,
        title: "Удивительное путешествие доктора Дулиттла"
    }

];

const adventureSlider = document.querySelector('.adventure-slider');
renderMovies(adventureMovies, adventureSlider);

// ФЕНТЕЗИ----------------------------------------

const fantasyMovies = [

    {
        img: "images/films/fantasy/Аквамен.jpg",
        year: 2018,
        title: "Аквамен"
    },

    {
        img: "images/films/fantasy/Бегущий По Лезвию.jpg",
        year: 2017,
        title: "Бегущий по лезвию 2049"
    },

    {
        img: "images/films/fantasy/Гарри Поттер и Принц Полукровка.jpg",
        year: 2009,
        title: "Гарри Поттер и Принц-полукровка"
    },

    {
        img: "images/films/fantasy/Фантастические Твари.jpg",
        year: 2016,
        title: "Фантастические твари"
    },

    {
        img: "images/films/fantasy/Сумерки.jpg",
        year: 2008,
        title: "Сумерки"
    },

    {
        img: "images/films/fantasy/Властелин Колец.jpg",
        year: 2001,
        title: "Властелин колец"
    },

    {
        img: "images/films/fantasy/Малифисента.jpg",
        year: 2014,
        title: "Малефисента"
    }

];

const fantasySlider = document.querySelector('.fantasy-slider');
renderMovies(fantasyMovies, fantasySlider);

// ИСТОРИЧЕСКИЕ-----------------------------------

const historicalMovies = [

    {
        img: "images/films/historical/Царство Небесное.jpg",
        year: 2005,
        title: "Царство небесное"
    },

    {
        img: "images/films/historical/Титаник.jpg",
        year: 1997,
        title: "Титаник"
    },

    {
        img: "images/films/historical/Список Шиндлера.jpg",
        year: 1993,
        title: "Список Шиндлера"
    },

    {
        img: "images/films/historical/Оппенгеймер.jpg",
        year: 2023,
        title: "Оппенгеймер"
    },

    {
        img: "images/films/historical/Дюнкерк.jpg",
        year: 2017,
        title: "Дюнкерк"
    },

    {
        img: "images/films/historical/Гладиатор.jpg",
        year: 2000,
        title: "Гладиатор"
    },

    {
        img: "images/films/historical/Выживший.jpg",
        year: 2015,
        title: "Выживший"
    }

];

const historicalSlider = document.querySelector('.historical-slider');
renderMovies(historicalMovies, historicalSlider);


// Добавление атрибута по условию для шапки

let links = document.querySelectorAll('.menu__item > a');
for (let i = 0; i < links.length; i++) {
    let link = links[i];

    if (link.href !== window.location.href) {
        link.classList.add('non-active')
    }
}


// Анимация слайдера

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
