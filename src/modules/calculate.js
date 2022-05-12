import {
    animate
} from './helpers';
export const calculate = (price = 100) => {
    const calcTypeMaterial = document.getElementById('calc-type-material');
    const calcType = document.getElementById('calc-type');
    const calcInput = document.getElementById('calc-input');
    const calcTotal = document.getElementById('calc-total');
    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcTypeMaterialValue = calcTypeMaterial.value;

        let totalValue = 0;
        let calcCountValue = 1;
        let calcInputValue = 1;

        if (calcCount.value > 1) {
            calcCountValue += +calcCount.value / 10;
        }

        if (calcInput.value && calcInput.value < 5) {
            calcInputValue = 2;
        } else if (calcInput.value && calcInput.value < 10) {
            calcInputValue = 1.5;
        }

        if (calcType.value && calcTypeMaterial.value) {
            totalValue = price * calcTypeValue * calcTypeMaterialValue * calcCountValue;
        } else {
            totalValue = 0;
        }

        return totalValue;
    };
};