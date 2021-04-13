const input = document.querySelector('[data-input]');
const card__result = document.querySelector('.card__result');
const cardBallItem = document.querySelectorAll('.card__ball-item');

const listColor = () => {
    // value = '1'
    card__result.innerHTML = '';
    cardBallItem.forEach((li) => {
        var value = input.value;
        var name = li.dataset.name;
        //console.log(name, name.indexOf(value))
        if(name.indexOf(value) !== -1 && value !== ''){
            var line = card__result.innerHTML;
            card__result.innerHTML = `${line}<span style="background-color:${name}" class="card__Label">${name}</span>`;
        }
    });
    // card__result.textContent = input.value;
}

cardBallItem.forEach((li) => {
    li.addEventListener('click', () => {
        var name = li.dataset.name;
        input.value = name;
        listColor();
    });
});

input.addEventListener('keyup', () => listColor());