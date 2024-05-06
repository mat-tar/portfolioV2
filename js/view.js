const view = {
	carousel: document.getElementById('carousel'),
	prevButton: document.getElementById('prev'),
	nextButton: document.getElementById('next'),
	passions: document.getElementsByClassName('passion'),
	dots: document.getElementsByClassName('dot'),

	carouselComplements: document.getElementById('carousel-complements'),
	complementsActive: document.getElementsByClassName('complementActive'),
	complements: document.getElementsByClassName('complement'),

	navBar: document.querySelector('nav'),

	canvas: document.querySelector('canvas')
}

export default view;