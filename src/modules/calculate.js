import {
	animate
} from './helpers';

export const calculate = (price = 1500) => {
	const calcBlock = document.getElementById('calc');
	if (calcBlock) {
		const calcType = document.getElementById('calc-type');
		const calcTypeMaterial = document.getElementById('calc-type-material');
		const calcSquare = document.getElementById('calc-input');
		const total = document.getElementById('calc-total');

		let totalValue = 0;

		const countCalc = () => {
			const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
			const calcSquareValue = +calcSquare.value;
			const calcTypeMaterialValue = +calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value;

			if (calcTypeValue && calcSquareValue && calcTypeMaterialValue) {
				totalValue = price * calcSquareValue * calcTypeValue * calcTypeMaterialValue;
			} else {
				totalValue = 0;
			}
			return totalValue;
		};

		calcBlock.addEventListener('input', e => {
			if (e.target === calcSquare) {
				e.target.value = e.target.value.replace(/\D+/g, '');
			}
			if (calcTypeMaterial.selectedIndex === 0 || calcType.selectedIndex === 0) {
				totalValue = 0;
			}
			if (e.target === calcType || e.target === calcTypeMaterial || e.target === calcSquare) {
				const totalValue = countCalc();

				animate({
					duration: 300,
					timing(timeFraction) {
						return timeFraction;
					},
					draw(progress) {
						total.value = Math.round(progress * totalValue);
					}
				});
			}
		});
	}
};