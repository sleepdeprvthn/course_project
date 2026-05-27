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
        img: "images/cartoons/drama/Анастасия.jpg",
        year: 1997,
        title: "Анастасия"
    },

    {
        img: "images/cartoons/drama/Балто.jpg",
        year: 1995,
        title: "Балто"
    },

    {
        img: "images/cartoons/drama/Варежка.jpg",
        year: 1967,
        title: "Варежка"
    },

    {
        img: "images/cartoons/drama/Вверх.jpg",
        year: 2009,
        title: "Вверх"
    },

    {
        img: "images/cartoons/drama/Король Лев 2.jpg",
        year: 1998,
        title: "Король Лев 2"
    },

    {
        img: "images/cartoons/drama/Песнь моря.webp",
        year: 2014,
        title: "Песнь моря"
    },

    {
        img: "images/cartoons/drama/По ту сторону изгороди.jpg",
        year: 2014,
        title: "По ту сторону изгороди"
    }

];

const dramaSlider = document.querySelector('.drama-slider');
renderMovies(dramaMovies, dramaSlider);

// БОЕВИКИ--------------------------------------

const actionMovies = [

    {
        img: "images/cartoons/action/Астерикс из Галлии.jpg",
        year: 1967,
        title: "Астерикс из Галлии"
    },

    {
        img: "images/cartoons/action/Атлантида Затерянный мир.jpg",
        year: 2001,
        title: "Атлантида: Затерянный мир"
    },

    {
        img: "images/cartoons/action/Камуфляж и Шпионаж.jpg",
        year: 2019,
        title: "Камуфляж и шпионаж"
    },

    {
        img: "images/cartoons/action/Легенда о волках.jpg",
        year: 2020,
        title: "Легенда о волках"
    },

    {
        img: "images/cartoons/action/Пес самурай и Город кошек.jpg",
        year: 2022,
        title: "Пес-самурай и город кошек"
    },

    {
        img: "images/cartoons/action/Стражи Терракоты.jpg",
        year: 2021,
        title: "Стражи Терракоты"
    },

    {
        img: "images/cartoons/action/Трансформеры Начало.jpg",
        year: 2024,
        title: "Трансформеры: Начало"
    }

];

const actionSlider = document.querySelector('.action-slider');
renderMovies(actionMovies, actionSlider);

// ТРИЛЛЕРЫ---------------------------------------

const thrillerMovies = [
    {
        img: "images/cartoons/thriller/Легенды ночных стражей.webp",
        year: 2010,
        title: "Легенды ночных стражей"
    },

    {
        img: "images/cartoons/thriller/Бугай.jpg",
        year: 2009,
        title: "Бугай"
    },

    {
        img: "images/cartoons/thriller/Бетмен Убийственная Шутка.webp",
        year: 2016,
        title: "Бетмен: Убийственная Шутка"
    },

    {
        img: "images/cartoons/thriller/Мадам Тутли-Путли.jpg",
        year: 2007,
        title: "Мадам Тутли-Путли"
    },

    {
        img: "images/cartoons/thriller/Бетмен Под Колпаком.jpg",
        year: 2010,
        title: "Бетмен: Под Колпаком"
    },

    {
        img: "images/cartoons/thriller/Метропия.jpg",
        year: 2009,
        title: "Метропия"
    },

    {
        img: "images/cartoons/thriller/Принцесса.webp",
        year: 2006,
        title: "Принцесса"
    }
];

const thrillerSlider = document.querySelector('.thriller-slider');
renderMovies(thrillerMovies, thrillerSlider);

// ДЕТЕКТИВЫ--------------------------------------

const detectiveMovies = [

    {
        img: "images/cartoons/detective/Великий Мышиный сыщик.png",
        year: 1986,
        title: "Великий мышиный сыщик"
    },

    {
        img: "images/cartoons/detective/Гравити Фолз.jpg",
        year: 2012,
        title: "Гравити Фолз"
    },

    {
        img: "images/cartoons/detective/Плохие парни.jpg",
        year: 2022,
        title: "Плохие парни"
    },

    {
        img: "images/cartoons/detective/Сказочный патруль.jpg",
        year: 2016,
        title: "Сказочный патруль"
    },

    {
        img: "images/cartoons/detective/Следствие ведут колобки.jpg",
        year: 1986,
        title: "Следствие ведут колобки"
    },

    {
        img: "images/cartoons/detective/Шерлок Гномс.jpg",
        year: 2018,
        title: "Шерлок Гномс"
    },

    {
        img: "images/cartoons/detective/Шерлок Як.jpg",
        year: 2011,
        title: "Шерлок Як"
    }

];

const detectiveSlider = document.querySelector('.detective-slider');
renderMovies(detectiveMovies, detectiveSlider);

// КОМЕДИЯ----------------------------------------

const comedyMovies = [

    {
        img: "images/cartoons/comedy/Смешарики.jpg",
        year: 2003,
        title: "Смешарики"
    },

    {
        img: "images/cartoons/comedy/Жил-Был Пес.webp",
        year: 1982,
        title: "Жил-был пёс"
    },

    {
        img: "images/cartoons/comedy/Зверополис.webp",
        year: 2016,
        title: "Зверополис"
    },

    {
        img: "images/cartoons/comedy/Рататуй.webp",
        year: 2007,
        title: "Рататуй"
    },

    {
        img: "images/cartoons/comedy/Три Богатыря и Конь на Троне.webp",
        year: 2021,
        title: "Три богатыря и Конь на троне"
    },

    {
        img: "images/cartoons/comedy/Зверополис 2.webp",
        year: 2025,
        title: "Зверополис 2"
    },

    {
        img: "images/cartoons/comedy/Мадагаскар.jpg",
        year: 2005,
        title: "Мадагаскар"
    }

];

const comedySlider = document.querySelector('.comedy-slider');
renderMovies(comedyMovies, comedySlider);

// ПРИКЛЮЧЕНИЯ------------------------------------

const adventureMovies = [

    {
        img: "images/cartoons/adventures/Шрек.jpg",
        year: 2001,
        title: "Шрек"
    },

    {
        img: "images/cartoons/adventures/Миграция.jpg",
        year: 2023,
        title: "Миграция"
    },

    {
        img: "images/cartoons/adventures/пингвины мадагаскара.webp",
        year: 2014,
        title: "Пингвины Мадагаскара"
    },

    {
        img: "images/cartoons/adventures/angry birds в кино.jpg",
        year: 2016,
        title: "Angry Birds в кино"
    },

    {
        img: "images/cartoons/adventures/Удача.jpg",
        year: 2022,
        title: "Удача"
    },

    {
        img: "images/cartoons/adventures/Элементарно.jpg",
        year: 2023,
        title: "Элементарно"
    },

    {
        img: "images/cartoons/adventures/босс молокосос рождественский бонус.jpg",
        year: 2022,
        title: "Босс-молокосос: Рождественский бонус"
    },

];

const adventureSlider = document.querySelector('.adventure-slider');
renderMovies(adventureMovies, adventureSlider);

// ФЕНТЕЗИ----------------------------------------

const fantasyMovies = [

    {
        img: "images/cartoons/fantasy/angry birds в кино.jpg",
        year: 2016,
        title: "Angry Birds в кино"
    },

    {
        img: "images/cartoons/fantasy/Корпорация монстров.jpg",
        year: 2001,
        title: "Корпорация монстров"
    },

    {
        img: "images/cartoons/fantasy/Кунг Фу Панда 2.jpg",
        year: 2011,
        title: "Кунг-фу Панда 2"
    },

    {
        img: "images/cartoons/fantasy/Кунг Фу Панда.jpg",
        year: 2008,
        title: "Кунг-фу Панда"
    },

    {
        img: "images/cartoons/fantasy/Монстра на Каникулах.jpg",
        year: 2012,
        title: "Монстры на каникулах"
    },

    {
        img: "images/cartoons/fantasy/Шрек.jpg",
        year: 2001,
        title: "Шрек"
    },

    {
        img: "images/cartoons/fantasy/Райа и последний дракон.jpg",
        year: 2021,
        title: "Райя и последний дракон"
    }

];

const fantasySlider = document.querySelector('.fantasy-slider');
renderMovies(fantasyMovies, fantasySlider);

// ИСТОРИЧЕСКИЕ-----------------------------------

const historicalMovies = [

    {
        img: "images/cartoons/historical/Ван Гог С любовью, Винсент.jpeg",
        year: 2017,
        title: "Ван Гог. С любовью, Винсент"
    },

    {
        img: "images/cartoons/historical/Генерал Джордж Вашингтон.jpg",
        year: 2000,
        title: "Генерал Джордж Вашингтон"
    },

    {
        img: "images/cartoons/historical/Забытое чудо.jpg",
        year: 2022,
        title: "Забытое чудо"
    },

    {
        img: "images/cartoons/historical/Князь Владимир.jpg",
        year: 2006,
        title: "Князь Владимир"
    },

    {
        img: "images/cartoons/historical/Легенда о волках.jpg",
        year: 2020,
        title: "Легенда о волках"
    },

    {
        img: "images/cartoons/historical/Покахонтас.jpg",
        year: 1995,
        title: "Покахонтас"
    },

    {
        img: "images/cartoons/historical/Василиса Микулишна.jpg",
        year: 1975,
        title: "Василиса Микулишна"
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
