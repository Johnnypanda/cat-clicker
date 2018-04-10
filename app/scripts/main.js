
	//VARIABLES WHICH WOULD CHANGE ON CLIK OF THE CAT LI
	let container = document.querySelector('.content-container'),
		  wrapper = document.querySelector('.cat-wrap'),
		  displayName = document.querySelector('.cat-name'),
		  img = document.querySelector('.cat-pic'),
		  btns = document.querySelectorAll('li'),
		  displayClicks = document.querySelector('.click-num');


	let Cat = function(name, pic){
		this.name = name;
		this.pic = pic;
		this.clicks = 0;
	}

	Cat.prototype.countClicks = function(){
			this.clicks++
			displayClicks.innerHTML = this.clicks;
		};

	Cat.prototype.showCat = function(){
			console.log(this.pic);
			img.setAttribute('src', this.pic);
		};

	//ALL THE CATS DECLARATIONS
	let cat1 = new Cat('Whiskers', '"images/cat1.jpg"');
	let cat2 = new Cat('Thomas', 'images/cat2.jpg');
	let cat3 = new Cat('Sebastian', 'images/cat1.jpg');
	let cat4 = new Cat('Pawson', 'images/cat1.jpg');
	let cat5 = new Cat('Simon', 'images/cat1.jpg');

	btns[0].addEventListener('click', function(){
		debugger;
		cat1.showCat;
	});
	btns[1].addEventListener('click', cat2.showCat);

	/*1. Нажимаем на кнопку из списка
	2. Нажатие вызывает функцию, которая
		а) меняет img src из соответственного объекта
		б) меняет заголовок на имя кота
		в) меняет спан на номер кликов
		  (номер кликов меняется от функции саунтКликс)
	3. При нажатии нового кота вся информация меняется в соответствии
	 с данными другого кота
	4. Если вернуться на предыдущего кота, клики должны сбрасываться*/
