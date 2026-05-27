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
        img: "images/shows/drama/1286.webp",
        year: 2024,
        title: "1286"
    },

    {
        img: "images/shows/drama/Гангстерленд.jpg",
        year: 2025,
        title: "Гангстерленд"
    },

    {
        img: "images/shows/drama/День Шакала.jpg",
        year: 2024,
        title: "День шакала"
    },

    {
        img: "images/shows/drama/Настоящий Детектив.jpg",
        year: 2014,
        title: "Настоящий детектив"
    },

    {
        img: "images/shows/drama/Табу.jpg",
        year: 2017,
        title: "Табу"
    },

    {
        img: "images/shows/drama/Укрытие.jpg",
        year: 2023,
        title: "Укрытие"
    },

    {
        img: "images/shows/drama/Черная птица.webp",
        year: 2022,
        title: "Черная птица"
    }

];

const dramaSlider = document.querySelector('.drama-slider');
renderMovies(dramaMovies, dramaSlider);

// БОЕВИКИ--------------------------------------

const actionMovies = [

    {
        img: "images/shows/action/Братья по Оружию.jpg",
        year: 2001,
        title: "Братья по оружию"
    },

    {
        img: "images/shows/action/Джек Ричер.jpg",
        year: 2022,
        title: "Джек Ричер"
    },

    {
        img: "images/shows/action/Каратель.jpg",
        year: 2017,
        title: "Каратель"
    },

    {
        img: "images/shows/action/Миротворец.jpg",
        year: 2022,
        title: "Миротворец"
    },

    {
        img: "images/shows/action/Пацаны.jpg",
        year: 2019,
        title: "Пацаны"
    },

    {
        img: "images/shows/action/Сорвиголова.jpg",
        year: 2015,
        title: "Сорвиголова"
    },

    {
        img: "images/shows/action/Стрела.jpg",
        year: 2012,
        title: "Стрела"
    }

];

const actionSlider = document.querySelector('.action-slider');
renderMovies(actionMovies, actionSlider);

// ТРИЛЛЕРЫ---------------------------------------

const thrillerMovies = [

    {
        img: "images/shows/thriller/Игра в Кальмара.jpg",
        year: 2021,
        title: "Игра в кальмара"
    },

    {
        img: "images/shows/thriller/Нарко.jpg",
        year: 2015,
        title: "Нарко"
    },

    {
        img: "images/shows/thriller/Настоящий Детектив.jpg",
        year: 2014,
        title: "Настоящий детектив"
    },

    {
        img: "images/shows/thriller/Прослушка.jpg",
        year: 2002,
        title: "Прослушка"
    },

    {
        img: "images/shows/thriller/Тьма.jpg",
        year: 2017,
        title: "Тьма"
    },

    {
        img: "images/shows/thriller/Фарго.jpg",
        year: 2014,
        title: "Фарго"
    },

    {
        img: "images/shows/thriller/Черное Зеркало.jpg",
        year: 2011,
        title: "Черное зеркало"
    }

];

const thrillerSlider = document.querySelector('.thriller-slider');
renderMovies(thrillerMovies, thrillerSlider);

// ДЕТЕКТИВЫ--------------------------------------

const detectiveMovies = [

    {
        img: "images/shows/detective/Вульф.jpg",
        year: 2021,
        title: "Вульф"
    },

    {
        img: "images/shows/detective/Гранчестер.jpg",
        year: 2014,
        title: "Гранчестер"
    },

    {
        img: "images/shows/detective/Мейр из Исттауна.jpg",
        year: 2021,
        title: "Мейр из Исттауна"
    },

    {
        img: "images/shows/detective/Настоящий Детектив.jpg",
        year: 2014,
        title: "Настоящий детектив"
    },

    {
        img: "images/shows/detective/Презумпция Невиновности.jpg",
        year: 2024,
        title: "Презумпция невиновности"
    },

    {
        img: "images/shows/detective/Тьма.jpg",
        year: 2017,
        title: "Тьма"
    },

    {
        img: "images/shows/detective/Черное Зеркало.jpg",
        year: 2011,
        title: "Черное зеркало"
    }

];

const detectiveSlider = document.querySelector('.detective-slider');
renderMovies(detectiveMovies, detectiveSlider);

// КОМЕДИЯ----------------------------------------

const comedyMovies = [

    {
        img: "images/shows/comedy/Белый Лотос.jpg",
        year: 2021,
        title: "Белый лотос"
    },

    {
        img: "images/shows/comedy/Бесстыдники.jpg",
        year: 2011,
        title: "Бесстыдники"
    },

    {
        img: "images/shows/comedy/Детство Шелдона.jpg",
        year: 2017,
        title: "Детство Шелдона"
    },

    {
        img: "images/shows/comedy/Друзья.jpg",
        year: 1994,
        title: "Друзья"
    },

    {
        img: "images/shows/comedy/Клиника.jpg",
        year: 2001,
        title: "Клиника"
    },

    {
        img: "images/shows/comedy/Теория Большого Взрыва.jpg",
        year: 2007,
        title: "Теория большого взрыва"
    },

    {
        img: "images/shows/comedy/Уэнздей.jpg",
        year: 2022,
        title: "Уэнздей"
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
        img: "images/shows/fantasy/Ведьмак.jpg",
        year: 2019,
        title: "Ведьмак"
    },

    {
        img: "images/shows/fantasy/Властелин Колец Кольца Власти.jpg",
        year: 2022,
        title: "Властелин колец: Кольца власти"
    },

    {
        img: "images/shows/fantasy/Игра Престолов.jpg",
        year: 2011,
        title: "Игра престолов"
    },

    {
        img: "images/shows/fantasy/Локи.jpg",
        year: 2021,
        title: "Локи"
    },

    {
        img: "images/shows/fantasy/Мандалорец.jpg",
        year: 2019,
        title: "Мандалорец"
    },

    {
        img: "images/shows/fantasy/Тьма.jpg",
        year: 2017,
        title: "Тьма"
    },

    {
        img: "images/shows/fantasy/Флеш.jpg",
        year: 2014,
        title: "Флеш"
    }

];

const fantasySlider = document.querySelector('.fantasy-slider');
renderMovies(fantasyMovies, fantasySlider);

// ИСТОРИЧЕСКИЕ-----------------------------------

const historicalMovies = [

    {
        img: "images/shows/historical/Аббатство Даунтон.jpg",
        year: 2010,
        title: "Аббатство Даунтон"
    },

    {
        img: "images/shows/historical/Великолепный Век.jpg",
        year: 2011,
        title: "Великолепный век"
    },

    {
        img: "images/shows/historical/Викинги.jpg",
        year: 2013,
        title: "Викинги"
    },

    {
        img: "images/shows/historical/Империя.jpg",
        year: 2015,
        title: "Империя"
    },

    {
        img: "images/shows/historical/Сегун.jpg",
        year: 2024,
        title: "Сёгун"
    },

    {
        img: "images/shows/historical/Чернобыль.jpg",
        year: 2019,
        title: "Чернобыль"
    },

    {
        img: "images/shows/historical/Романовы Последнее Слово.jpg",
        year: 2013,
        title: "Романовы"
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
