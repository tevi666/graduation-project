import {
    animate
} from './helpers';
export const calculate = (price = 100) => {
    const calcTypeMaterial = document.querySelector('#calc-type-material');
    const calcType = document.querySelector('#calc-type');
    const calcInput = document.querySelector('#calc-input');
    const calcTotal = document.querySelector('#calc-total');
    const calc = document.querySelector('#calc');

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcTypeMaterialValue = +calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value;
        const calcInputValue = calcInput.value;

        let totalValue = 0;
        let calcInputVal = 1;

        if (calcInput.value > 1) {
            calcInputVal += calcInput.value / 10;
        }

        if (calcType.value && calcTypeMaterial.value) {
            totalValue = price * calcTypeValue * calcTypeMaterialValue * calcInputValue;
        } else {
            totalValue = 0;
        }
        return totalValue;
    };
    calc.addEventListener('input', e => {
        if (e.target === calcType || e.target === calcInput || e.target === calcTypeMaterial) {
            const totalValue = countCalc();
            animate({
                duration: 500,
                timing(timeFraction) {
                    return timeFraction;
                },
                draw(progress) {
                    calcTotal.textContent = Math.round(progress * totalValue);
                }
            });
        }
    });
};