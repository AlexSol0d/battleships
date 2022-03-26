let randomLoc = Math.floor(Math.random() * 5);
let location1 = randomLoc;
let location2 = location1 + 1, location3 = location2 +1;
let checkNum = [];
let hitsLeft = 3;
let mistakes = 0;
let isSunk = false;

while(!isSunk) {
	let guess = prompt("Привет! Это мини игра морской бой. Потопите судно! Введите число (0-6)", "");
	if (guess == null) {
		alert("Досвидания! :)");
		break;
	} else if (isNaN(guess) || guess < 0 || guess > 6) {
		alert("Ошибка ввода! Вы должны ввсести число от 0 до 6");
	} else if (guess == location1 || guess == location2 || guess == location3) {
		if (checkNum.includes(guess)) {
			alert("Вы уже попали сюда, попробуйте снова");
		} else {
			checkNum.push(guess);
			hitsLeft--;
			if (hitsLeft != 0) {
				alert("Попадание, стреляй еще - " + hitsLeft + "!");
			} else {
				isSunk = true;
			}
		}
	} else {
		alert("Мимо! Попробуйте ещё раз!");
		mistakes++;
	}
		if (isSunk) alert("Поздравляем, вы потопили корабль, ваша оценка " + (10 - mistakes) + "/10!");
}