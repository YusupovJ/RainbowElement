// Находим элемент
const elem = document.querySelector(".element");

// Если элемент есть, то выполняем действия
if (elem) {
	function changeColor() {
		// Получаем рандомный цвет
		let colors = {
			r: (Math.random() * 255).toFixed(0),
			g: (Math.random() * 255).toFixed(0),
			b: (Math.random() * 255).toFixed(0),
		};

		// Конструируем
		let randomColor = `rgb(${colors.r}, ${colors.g}, ${colors.b})`;

		// Изначально анимируем
		elem.animate([{ background: randomColor }], { duration: 3000, iterations: 1 });

		// Вызываем анимацию каждую секунду
		setTimeout(() => {
			// анимируем
			elem.animate([{ background: randomColor }], { duration: 3000, iterations: 1, delay: 1000 });
			// делаем цикл вызова функции
			changeColor();
		}, 1000);
	}
	// изначально вызываем функцию
	changeColor();
}
