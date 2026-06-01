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
        img: "images/anime/drama/Кланнад.jpg",
        year: 2007,
        title: "Кланнад"
    },

    {
        img: "images/anime/drama/Ковбой Бибоп.jpg",
        year: 1998,
        title: "Ковбой Бибоп"
    },

    {
        img: "images/anime/drama/Код Гиас.jpg",
        year: 2006,
        title: "Код Гиас"
    },

    {
        img: "images/anime/drama/Крутой Учитель Онидзука.jpg",
        year: 1999,
        title: "Крутой учитель Онидзука"
    },

    {
        img: "images/anime/drama/Мастер муси.jpg",
        year: 2005,
        title: "Мастер Муси"
    },

    {
        img: "images/anime/drama/Стальной Алхимик.jpg",
        year: 2009,
        title: "Стальной алхимик"
    },

    {
        img: "images/anime/drama/Твое имя.jpg",
        year: 2016,
        title: "Твоё имя"
    }

];

const dramaSlider = document.querySelector('.drama-slider');
renderMovies(dramaMovies, dramaSlider);

// БОЕВИКИ--------------------------------------

const actionMovies = [

    {
        img: "images/anime/action/Боец Баки.jpg",
        year: 2018,
        title: "Боец Баки"
    },

    {
        img: "images/anime/action/Бродяга Кэнсин.jpg",
        year: 1996,
        title: "Бродяга Кэнсин"
    },

    {
        img: "images/anime/action/Меч чужака.jpg",
        year: 2007,
        title: "Меч чужака"
    },

    {
        img: "images/anime/action/Наруто Шиппуден.jpg",
        year: 2007,
        title: "Наруто: Шиппуден"
    },

    {
        img: "images/anime/action/Наруто.jpg",
        year: 2002,
        title: "Наруто"
    },

    {
        img: "images/anime/action/Одержимые смертью.jpg",
        year: 2007,
        title: "Одержимые смертью"
    },

    {
        img: "images/anime/action/Психопаспорт.jpg",
        year: 2012,
        title: "Психопаспорт"
    }

];

const actionSlider = document.querySelector('.action-slider');
renderMovies(actionMovies, actionSlider);

// ТРИЛЛЕРЫ---------------------------------------

const thrillerMovies = [

    {
        img: "images/anime/thriller/Берсерк.jpg",
        year: 1997,
        title: "Берсерк"
    },

    {
        img: "images/anime/thriller/Граница пустоты Сад грешников.jpg",
        year: 2007,
        title: "Граница пустоты: Сад грешников"
    },

    {
        img: "images/anime/thriller/Истинная грусть.jpg",
        year: 1997,
        title: "Истинная грусть"
    },

    {
        img: "images/anime/thriller/Кайдзи.jpg",
        year: 2007,
        title: "Кайдзи"
    },

    {
        img: "images/anime/thriller/Монстр.jpg",
        year: 2004,
        title: "Монстр"
    },

    {
        img: "images/anime/thriller/Эхо Террора.jpg",
        year: 2014,
        title: "Эхо террора"
    },

    {
        img: "images/anime/thriller/Дневник будущего.jpg",
        year: 2011,
        title: "Дневник будущего"
    }

];

const thrillerSlider = document.querySelector('.thriller-slider');
renderMovies(thrillerMovies, thrillerSlider);

// ДЕТЕКТИВЫ--------------------------------------

const detectiveMovies = [

    {
        img: "images/anime/detective/Восточный Эдем.jpg",
        year: 2009,
        title: "Восточный Эдем"
    },

    {
        img: "images/anime/detective/Готика.jpg",
        year: 2011,
        title: "Готика"
    },

    {
        img: "images/anime/detective/Детектив Конан.jpg",
        year: 1996,
        title: "Детектив Конан"
    },

    {
        img: "images/anime/detective/Монстр.jpg",
        year: 2004,
        title: "Монстр"
    },

    {
        img: "images/anime/detective/Необычное Такси.jpg",
        year: 2021,
        title: "Необычное такси"
    },

    {
        img: "images/anime/detective/Патриотизм Мориарти.jpg",
        year: 2020,
        title: "Патриотизм Мориарти"
    },

    {
        img: "images/anime/detective/Тетрадь смерти.jpg",
        year: 2006,
        title: "Тетрадь смерти"
    }

];

const detectiveSlider = document.querySelector('.detective-slider');
renderMovies(detectiveMovies, detectiveSlider);

// КОМЕДИЯ----------------------------------------

const comedyMovies = [

    {
        img: "images/anime/comedy/Бакуман.jpg",
        year: 2010,
        title: "Бакуман"
    },

    {
        img: "images/anime/comedy/Бек.jpg",
        year: 2004,
        title: "Бек"
    },

    {
        img: "images/anime/comedy/Брошенный Кролик.jpg",
        year: 2011,
        title: "Брошенный кролик"
    },

    {
        img: "images/anime/comedy/Ванпанчмен.jpg",
        year: 2015,
        title: "Ванпанчмен"
    },

    {
        img: "images/anime/comedy/Гинтама.jpg",
        year: 2006,
        title: "Гинтама"
    },

    {
        img: "images/anime/comedy/Необъятный океан.jpg",
        year: 2018,
        title: "Необъятный океан"
    },

    {
        img: "images/anime/comedy/Самурай Чамплу.jpg",
        year: 2004,
        title: "Самурай Чамплу"
    }

];

const comedySlider = document.querySelector('.comedy-slider');
renderMovies(comedyMovies, comedySlider);

// ПРИКЛЮЧЕНИЯ------------------------------------

const adventureMovies = [

    {
        img: "images/anime/adventures/Ван Пис.jpg",
        year: 1999,
        title: "Ван Пис"
    },

    {
        img: "images/anime/adventures/Ванпанчмен.jpg",
        year: 2015,
        title: "Ванпанчмен"
    },

    {
        img: "images/anime/adventures/Мой сосед Тороро.jpg",
        year: 1988,
        title: "Мой сосед Тоторо"
    },

    {
        img: "images/anime/adventures/Принцесса Мононокэ.jpg",
        year: 1997,
        title: "Принцесса Мононокэ"
    },

    {
        img: "images/anime/adventures/Созданный в Бездне.jpg",
        year: 2017,
        title: "Созданный в Бездне"
    },

    {
        img: "images/anime/adventures/Фрирен.jpg",
        year: 2023,
        title: "Фрирен"
    },

    {
        img: "images/anime/adventures/Ходячий замок.jpg",
        year: 2004,
        title: "Ходячий замок"
    }

];

const adventureSlider = document.querySelector('.adventure-slider');
renderMovies(adventureMovies, adventureSlider);

// ФЕНТЕЗИ----------------------------------------

const fantasyMovies = [

    {
        img: "images/anime/fantasy/Берсерк.jpg",
        year: 1997,
        title: "Берсерк"
    },

    {
        img: "images/anime/fantasy/Ванпанчмен.jpg",
        year: 2015,
        title: "Ванпанчмен"
    },

    {
        img: "images/anime/fantasy/Наруто.jpg",
        year: 2002,
        title: "Наруто"
    },

    {
        img: "images/anime/fantasy/Остров Джованни.jpg",
        year: 2014,
        title: "Остров Джованни"
    },

    {
        img: "images/anime/fantasy/Судзуме Закрывающая Двери.jpg",
        year: 2022,
        title: "Судзуме, закрывающая двери"
    },

    {
        img: "images/anime/fantasy/Хантер Х Хантер.jpg",
        year: 2011,
        title: "Хантер х Хантер"
    },

    {
        img: "images/anime/fantasy/Эскафлон.jpg",
        year: 1996,
        title: "Эскафлон"
    }

];

const fantasySlider = document.querySelector('.fantasy-slider');
renderMovies(fantasyMovies, fantasySlider);

// ИСТОРИЧЕСКИЕ-----------------------------------

const historicalMovies = [

    {
        img: "images/anime/historical/Бродяга Кэнсин.jpg",
        year: 1996,
        title: "Бродяга Кэнсин"
    },

    {
        img: "images/anime/historical/Дети на Холме.jpeg",
        year: 2012,
        title: "Дети на холме"
    },

    {
        img: "images/anime/historical/ДжоДжо Steel Ball Run.png",
        year: 2025,
        title: "ДжоДжо: Steel Ball Run"
    },

    {
        img: "images/anime/historical/О движении Земли.jpg",
        year: 2024,
        title: "О движении Земли"
    },

    {
        img: "images/anime/historical/Радуга Семеро из шестой камеры второго блока.webp",
        year: 2010,
        title: "Радуга: Семеро из шестой камеры"
    },

    {
        img: "images/anime/historical/Самурай Чамплу.jpg",
        year: 2004,
        title: "Самурай Чамплу"
    },

    {
        img: "images/anime/historical/Царство.jpg",
        year: 2012,
        title: "Царство"
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
