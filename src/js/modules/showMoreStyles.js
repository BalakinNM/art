import {getResource} from '../services/request';
const showMoreStyles = (trigger, wrapper) => {
    const btn = document.querySelector(trigger);
    btn.addEventListener('click', () => {
        getResource('http://localhost:3000/styles')
            .then(res => createCards(res))
            .catch(error => console.log(error));
    btn.remove();
    });
    function createCards(res) {
        res.forEach(({src, title, link}) => {
            let card = document.createElement('div');
            card.classList.add('animated', 'fadeIn', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            card.innerHTML = `
            <div class=styles-block>
                <img src=${src} alt='style'>
                <h4>${title}</h4>
                <a href=${link}>Подробнее</a>
            </div>
            `;
            document.querySelector(wrapper).appendChild(card);
        });
    }
};
export default showMoreStyles;