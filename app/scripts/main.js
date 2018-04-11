
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
		this.showCat = function(){
			console.log(this.pic);
			img.setAttribute('src', this.pic);
			displayName.innerHTML = this.name;
			displayClicks.innerHTML = this.clicks;
		}
	}


	//ALL THE CATS DECLARATIONS
	let cat1 = new Cat('Whiskers', 'images/cat1.jpg');
	let cat2 = new Cat('Thomas', 'images/cat2.jpg');
	let cat3 = new Cat('Sebastian', 'images/cat3.jpg');
	let cat4 = new Cat('Pawson', 'images/cat4.jpg');
	let cat5 = new Cat('Simon', 'images/cat5.jpg');

	btns[0].addEventListener('click', function(){
		cat1.showCat();
	});
	btns[1].addEventListener('click', function(){
		cat2.showCat();
	});
	btns[2].addEventListener('click', function(){
		cat3.showCat();
	});
	btns[3].addEventListener('click', function(){
		cat4.showCat();
	});
	btns[4].addEventListener('click', function(){
		cat5.showCat();
	});
