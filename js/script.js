// Для кращого розуміння теми давайте самі створимо функції max та min, які є в бібліотеці Math.
// Дані функції приймають довільну кількість аргументів (потрібно передбачити дії коли буде передано 0 або 1 аргумент
// та якщо є нечислові аргументи).
// Серед усіх аргументів відбувається пошук найбільшого чи найменшого значення і повертається це значення.

(function task1(){

console.groupCollapsed("Результати виклику функції min");

	console.log(min());
	console.log(min(1));
	console.log(min(1, 5, '5', 7, 9));
	console.log(min(1, 12, 18, -4, 89, 6, 45, 3));

console.groupEnd();

console.groupCollapsed("Результати виклику функції max");

	console.log(max());
	console.log(max(1));
	console.log(max(1, 5, '5', 7, 9));
	console.log(max(1, 12, 18, -4, 89, 6, 45, 3));

console.groupEnd();

	function min(){

		if(arguments.length===0) return null;

		if(Array.prototype.some.call(arguments, function(e){

			return typeof e !=="number";

		})){
			return NaN;
		};

		if(arguments.length===1) return arguments[0];

		let res = arguments[0];

		Array.prototype.forEach.call(arguments, function(e){

			if(e<res) res = e;

		});

		return res;
	}

	function max(){

		if(arguments.length===0) return null;

		if(Array.prototype.some.call(arguments, function(e){

			return typeof e !=="number";

		})){
			return NaN;
		};

		if(arguments.length===1) return arguments[0];

		let res = arguments[0];

		Array.prototype.forEach.call(arguments, function(e){

			if(e>res) res = e;

		});

		return res;
	}

})();

// Посортуйте всі абзаци лекції, використовуючи функцію сортування масива .sort().

(function task2(){

	[...document.querySelectorAll('p')].sort(function(a,b){
		if(a.innerText>b.innerText) return 1;
		return -1;
	}).forEach(function(e){
		
		document.body.appendChild(e);

	});

})();

// Перевірте, чи хоч в одному заголовку h2 є літера "ї". Використайте відповідні методи.

(function task3(){

console.groupCollapsed("Інформація про наявність в заголовках букви 'ї'");

	let h2 = document.querySelectorAll('h2');

	let res = Array.prototype.some.call(h2, function(e){

		return Array.prototype.includes.call(e.innerText,'ї');

	});

	console.log(res ? 'Принаймні в одному заголовку h2 є літера "ї"': 'В жодному заголовку h2 нема літери "ї"');

console.groupEnd();

})();

// Створіть базовий об'єкт "гарбуз", задайте йому колір, сорт, ціну за кілограм,
// нульову вагу, а також метод виводу в консоль інормації про вартість гарбуза.
// На основі цього базового об'єкта створіть 5 гарбузів тільки з властивостями,
// без методів, задавайте кожному випадкову вагу в межах 5-15 кг.
// Скористайтесь методом базового об'єкта для вивода інформації про вартість
// кожного створеного гарбуза.

(function task4(){

console.groupCollapsed("Вартість гарбузів");

	let pumkin = {
		color: 'orange',
		sort: 'big',
		price: 10,
		weight: 0,
		info: function(){

			console.log('pumkin price : '+this.weight*this.price);
		}
	}

	let pumkins  = [];

	for (let i = 0; i < 5; i++){
		pumkins[i] = {};
		pumkins[i] = copyPumkin(pumkins[i]);
		pumkin.info.call(pumkins[i]);
	}

console.groupEnd();

	function copyPumkin(obj){

		for (key in pumkin){

			if(typeof(pumkin[key])!=='function'){
				obj[key] = pumkin[key];
			}
		}

		obj.weight = (function(){
			return Math.floor(Math.random() * 10+5);
		})();

		return obj;
	}

})();

// Перевірте, чи спрацює метод масивів .forEach() для строк.

(function task5(){

console.groupCollapsed("Перевірка роботи методу масивів .forEach() для строк");

	let str = "fhgjklhguks";

	Array.prototype.forEach.call(str, function(e){
		console.log(e);
	});

console.groupEnd();

})();
