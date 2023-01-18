const calc = (size, material, options, promocode, result, state) => {
    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          resultBlock = document.querySelector(result),
          promocodeBlock = document.querySelector(promocode);
    function objDescr(n) {
        return n.options[n.selectedIndex].textContent;
    }
    let sum = 0;
    function calcFunction() {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));
        if (sizeBlock.value == "" || materialBlock.value == "") {
            resultBlock.textContent = "Пожалуйста выберите размер и материал картины";
        } else if (promocodeBlock.value === 'IWANTPOPART'){
            resultBlock.textContent = Math.round(sum * 0.7);
        } else {
            resultBlock.textContent = sum;
        }
        state.size = `Размер полотна: ${objDescr(sizeBlock)} стоимость: ${sizeBlock.value}`,
        state.material = `Материал полотна: ${objDescr(materialBlock)} стоимость: ${materialBlock.value}`,
        state.options = `Дополнительная опция: ${objDescr(optionsBlock)} стоимость: ${optionsBlock.value}`,
        state.promocode = `Введенный промокод: ${promocodeBlock.value}`,
        state.cost = `Сумма: ${sum}`;
    }
    sizeBlock.addEventListener('change', calcFunction);
    materialBlock.addEventListener('change', calcFunction);
    optionsBlock.addEventListener('change', calcFunction);
    promocodeBlock.addEventListener('input', calcFunction);
};
export default calc;


/*         state = {
            state.size: `Размер полотна: ${objDescr(sizeBlock)} стоимость: ${sizeBlock.value}`,
            material: `Материал полотна: ${objDescr(materialBlock)} стоимость: ${materialBlock.value}`,
            options: `Дополнительная опция: ${objDescr(optionsBlock)} стоимость: ${optionsBlock.value}`,
            promocode: `Введенный промокод: ${promocodeBlock.value}`,
            cost: `Сумма: ${sum}`
        }; */