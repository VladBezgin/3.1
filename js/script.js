let budgetForTheMonth, name, time, price

function start() {
	budgetForTheMonth = +prompt("Ваш бюджет на месяц?", '10000');

	while (isNaN(budgetForTheMonth || budgetForTheMonth == '' || budgetForTheMonth == null)) {
		budgetForTheMonth = +prompt("Ваш бюджет на месяц?", '10000');
	}

	name = prompt("Название вашего магазина?").toUpperCase();
	time = 19;
}

start();

let mainList = {
	budget: budgetForTheMonth,
	name: name,
	shopGoods: [],
	employers: {},
	open: false,
	discount: true,

};

function discountSistem(price) {
	if ( mainList.discount == true) {
		price = price/100*80;
	}
}
discountSistem(100);

function hiringEmployers() {
	for (let s = 1; s<5; s++) {
		let m =  prompt("Имя сотрудника?");
		if ((typeof(m)) === 'string' && (typeof(m)) != null && m != '' && m.length < 50 ) {
			console.log('все верно');
			mainList.employers[s] = m;
		} else {
			i--;
		}
	}
}
 hiringEmployers()


function chooseGoods() {
	for (let i = 0; i < 5; i++) {
		let a =  prompt("Какой тип товаров будем продавать?");
		if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
			console.log('все верно');
			mainList.shopGoods[i] = a;
		} else {
			alert('введите тип товаров');
			i--;
		}
	}
}

chooseGoods();
/*let i = 0;
while ( i < 5 ) {
	let a =  prompt("Какой тип товаров будем продавать?");
	mainList.shopGoods[i] = a;
	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
		console.log('все верно');
	} else {
		alert('введите тип товаров');
		
	}
	i++;
}

let i = 0;
do {
let a =  prompt("Какой тип товаров будем продавать?");
	mainList.shopGoods[i] = a;
	if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50 ) {
		console.log('все верно');
	} else {
		alert('введите тип товаров');
		
	}
	i++;
}
while (i < 5);*/



function workTime(time) {
	if (time < 0) {
		console.log('не может быть');
	} else if(time > 8 && time < 20 ) {
		console.log('время работать')
	} else if ( time < 24 ) {
		console.log('уже поздно');
	} else {
		console.log('в сутках только 24 часа');
	}
}

workTime(20);

function calcBudget() {
alert( 'Бюджет на 1 день: ' + mainList.budget/30 );
}

calcBudget();



console.log(mainList.employers);
