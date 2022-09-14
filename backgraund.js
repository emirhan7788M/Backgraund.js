const nav = document.querySelector(`.navbar`)
const btn = document.querySelectorAll(`.btn`)

btn.forEach(elem => {
    elem.addEventListener(`click`, () => {
        const btnColor = elem.getAttribute(`data-color`);
        nav.style.background = btnColor
    })
});