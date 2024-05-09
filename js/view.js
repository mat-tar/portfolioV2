const view = {
	carouselProject: document.getElementById('carousel-projects'),
	prevButton: document.getElementById('prev'),
	nextButton: document.getElementById('next'),
	projects: document.getElementsByClassName('project'),
	dots: document.getElementsByClassName('dot'),

	carouselComplements: document.getElementById('carousel-complements'),
	complementsActive: document.getElementsByClassName('complementActive'),
	complements: document.getElementsByClassName('complement'),

	navBar: document.querySelector('nav'),
	header: document.querySelector('header'),

	canvas: document.querySelector('canvas')
}

export default view;