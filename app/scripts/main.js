
	//VARIABLES WHICH WOULD CHANGE ON CLIK OF THE CAT LI
	let container = document.querySelector('.content-container'),
		wrapper = document.querySelector('.cat-wrap'),
		displayName = document.querySelector('.cat-name'),
		img = document.querySelector('.cat-pic'),
		btns = document.querySelectorAll('li'),
		displayClicks = document.querySelector('.click-num');

	//Basic Cat constructor
	let Cat = function(name, pic){
		this.name = name;
		this.pic = pic;
		this.clicks = 0;
	}
	//Changes the displayed cat
	Cat.prototype.showCat = function(){
			console.log(this.pic);
			//Sets and image src to current cat's pic
			img.setAttribute('src', this.pic);
			//Sets the displayed name to the name of the current cat
			displayName.innerHTML = this.name;
			//Sets the displayed clicks to that of the current cat
			this.clicks = 0;
			displayClicks.innerHTML = this.clicks;
	}

	//Method to increase num of clicks
	Cat.prototype.addClick = function() {
		  this.clicks++;
		  displayClicks.innerHTML = this.clicks;
	};
	//Function that checks the current cat and increments it's clicks bumber
	Cat.prototype.checkCat = function(){
		if(this.name === displayName.innerHTML){
			this.addClick();
		}
	}


	//ALL THE CATS DECLARATIONS
	let cat1 = new Cat('Whiskers', 'images/cat1.jpg');
	let cat2 = new Cat('Thomas', 'images/cat2.jpg');
	let cat3 = new Cat('Sebastian', 'images/cat3.jpg');
	let cat4 = new Cat('Pawson', 'images/cat4.jpg');
	let cat5 = new Cat('Simon', 'images/cat5.jpg');

	//Event listeners to display cat
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
	//Event listener and function to display num of clicks
	img.addEventListener('click', function(){
		cat1.checkCat();
		cat2.checkCat();
		cat3.checkCat();
		cat4.checkCat();
		cat5.checkCat();
	});
