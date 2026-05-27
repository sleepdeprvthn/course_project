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
        img: "images/cartoons/drama/Реквием по мечте.jpg"
    },

    {
        img: "images/cartoons/drama/1+1.jpg"
    },

    {
        img: "images/cartoons/drama/Вавилон.jpg"
    },

    {
        img: "images/cartoons/drama/Звук металла.jpg"
    },

    {
        img: "images/cartoons/drama/Нефть.jpg"
    },

    {
        img: "images/cartoons/drama/Манчестер у моря.jpg"
    },

    {
        img: "images/cartoons/drama/Учитель на замену.jpg"
    }
];

const dramaSlider = document.querySelector('.drama-slider');
renderMovies(dramaMovies, dramaSlider);

// БОЕВИКИ--------------------------------------

const actionMovies = [
    {
        img: "images/cartoons/action/Эквилибриум.webp"
    },

    {
        img: "images/cartoons/action/Джон Уик.jpg"
    },

    {
        img: "images/cartoons/action/Патруль По законам улиц.jpg"
    },

    {
        img: "images/cartoons/action/Риддик.jpg"
    },

    {
        img: "images/cartoons/action/Миссия Невыполнима.jpeg"
    },

    {
        img: "images/cartoons/action/300 спартанцев.jpg"
    },

    {
        img: "images/cartoons/action/Убийца.jpg"
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
        img: "images/cartoons/detective/Возмездие.jpg"
    },

    {
        img: "images/cartoons/detective/Достать Ножи.jpg"
    },

    {
        img: "images/cartoons/detective/Зодиак.jpg"
    },

    {
        img: "images/cartoons/detective/Иллюзия Обмана.jpg"
    },

    {
        img: "images/cartoons/detective/Начало.jpg"
    },

    {
        img: "images/cartoons/detective/Престиж.jpg"
    },

    {
        img: "images/cartoons/detective/Шерлок Холмс.jpg"
    }
];

const detectiveSlider = document.querySelector('.detective-slider');
renderMovies(detectiveMovies, detectiveSlider);

// КОМЕДИЯ----------------------------------------

const comedyMovies = [
    {
        img: "images/cartoons/comedy/Смешарики.jpg"
    },

    {
        img: "images/cartoons/comedy/Жил-Был Пес.webp"
    },

    {
        img: "images/cartoons/comedy/Зверополис.webp"
    },

    {
        img: "images/cartoons/comedy/Рататуй.webp"
    },

    {
        img: "images/cartoons/comedy/Три Богатыря и Конь на Троне.webp"
    },

    {
        img: "images/cartoons/comedy/Зверополис 2.webp"
    },
    
    {
        img: "images/cartoons/comedy/Мадагаскар.jpg"
    }
];

const comedySlider = document.querySelector('.comedy-slider');
renderMovies(comedyMovies, comedySlider);

// ПРИКЛЮЧЕНИЯ------------------------------------

const adventureMovies = [
    {
        img: "images/cartoons/adventures/Джон Картер.jpg"
    },

    {
        img: "images/cartoons/adventures/Круиз по Джунглям.jpg"
    },

    {
        img: "images/cartoons/adventures/Недруги.jpg"
    },

    {
        img: "images/cartoons/adventures/Пираты Карибского Моря.jpg"
    },

    {
        img: "images/cartoons/adventures/Приключения Паддингтона.jpg"
    },

    {
        img: "images/cartoons/adventures/Путешествие 2.jpg"
    },

    {
        img: "images/cartoons/adventures/Удивительное путешествие доктора Дулиттла.jpg"
    }
];

const adventureSlider = document.querySelector('.adventure-slider');
renderMovies(adventureMovies, adventureSlider);

// ФЕНТЕЗИ----------------------------------------

const fantasyMovies = [
    {
        img: "images/cartoons/fantasy/Аквамен.jpg"
    },

    {
        img: "images/cartoons/fantasy/Бегущий По Лезвию.jpg"
    },

    {
        img: "images/cartoons/fantasy/Гарри Поттер и Принц Полукровка.jpg"
    },

    {
        img: "images/cartoons/fantasy/Фантастические Твари.jpg"
    },

    {
        img: "images/cartoons/fantasy/Сумерки.jpg"
    },

    {
        img: "images/cartoons/fantasy/Властелин Колец.jpg"
    },

    {
        img: "images/cartoons/fantasy/Малифисента.jpg"
    }
];

const fantasySlider = document.querySelector('.fantasy-slider');
renderMovies(fantasyMovies, fantasySlider);

// ИСТОРИЧЕСКИЕ-----------------------------------

const historicalMovies = [
    {
        img: "images/cartoons/historical/Царство Небесное.jpg"
    },

    {
        img: "images/cartoons/historical/Титаник.jpg"
    },

    {
        img: "images/cartoons/historical/Список Шиндлера.jpg"
    },

    {
        img: "images/cartoons/historical/Оппенгеймер.jpg"
    },

    {
        img: "images/cartoons/historical/Дюнкерк.jpg"
    },

    {
        img: "images/cartoons/historical/Гладиатор.jpg"
    },

    {
        img: "images/cartoons/historical/Выживший.jpg"
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
