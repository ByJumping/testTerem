// ждем пока прогрузится вся страница и показываем модальное окно
window.addEventListener('load', ()=> {
    modal.style.display = 'block'
})

const header = document.querySelector('.header__item h1')
const buttons = document.querySelectorAll('.btn')
const blocks = document.querySelectorAll('.content__item')
const modal = document.querySelector('.modal')
let closeBtn = document.querySelector('.close')
let flag = false

// Перебираем кнопки, проверяем по классу на какую кнопку кликнули и вызываем соответствующую функцию
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('btn-outline-warning')) {
            toggleHead()
        } else {
            swapBlock()
        }
    })
})

// Показываем/скрываем заголовок
function toggleHead() {
    header.classList.toggle('visible')
}

// Меняем блоки местами
function swapBlock() {
    if(!flag) {
        blocks[0].parentNode.insertBefore(blocks[1], blocks[0])
        flag = true
    } else {
        blocks[1].parentNode.insertBefore(blocks[0], blocks[1])
        flag = false
    }
}

closeBtn.addEventListener('click', ()=>{
    modal.style.display = 'none'
})

// закрываем модальное окно при клике в любое место на затемненную часть страницы
window.addEventListener('click', (e) => {
    if (e.target === modal.querySelector('.modal__body')) {
        modal.style.display = 'none'
    }
})
