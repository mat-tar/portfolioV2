import view from "./view.js";
document.addEventListener("DOMContentLoaded", ()=>{
	const headerWidth = view.header.offsetWidth;
	view.navBar.style.width = `${headerWidth}px`;
	if (window.scrollY > 30) {
		view.navBar.classList.add("scrolled");
	}
});
document.addEventListener("scroll", () => {
	if (window.scrollY > 30) {
		view.navBar.classList.add("scrolled");
	} else {
		view.navBar.classList.remove("scrolled");
	}

});

window.addEventListener('resize', () => {
	// Get the current width of the header
	const headerWidth = view.header.offsetWidth;
	// if (view.navBar.style.width === `${headerWidth}px`) return;
	view.navBar.style.width = `${headerWidth}px`;
});

const animOptions =  {
	duration: 500,
	easing: "ease-in-out",
	fill: "forwards"
};

function changeComplement() {
	const active = document.querySelector(".complementActive");
	const id = [...view.complements].indexOf(active);
	const newId = (id + 1) % view.complements.length;

	active.classList.remove("complementActive");
	active.animate([
		{ transform: `translateY(0px)`, opacity: 1 },
		{ transform: `translateY(-25px)`, opacity: 0 }
	], animOptions);

	view.complements[newId].classList.add("complementActive");
	view.complements[newId].animate([
		{ transform: `translateY(25px)`, opacity: 0 },
		{ transform: `translateY(0px)`, opacity: 1 }
	], animOptions);
}
setInterval(changeComplement, 5000);


const nbProjects = view.projects.length;
function changeProject(direction) {
	const active = document.querySelector(".project-active");
	const id = [...view.projects].indexOf(active);
	const newId = (direction === 'next') ? (id + 1) % nbProjects : (id - 1 + nbProjects) % nbProjects;
	active.classList.remove("project-active");
	active.animate([
		{ transform: `translateX(0px)`, opacity: 1 },
		{ transform: `translateX(${direction === 'next' ? 600 : -600}px)`, opacity: 0 }
	], animOptions);
	view.projects[newId].classList.add("project-active");
	view.projects[newId].animate([
		{ transform: `translateX(${direction === 'next' ? -600 : 600}px)`, opacity: 0 },
		{ transform: `translateX(0px)`, opacity: 1 }
	], animOptions);

}

view.nextButton.addEventListener("click", () => changeProject('next'));
view.prevButton.addEventListener("click", () => changeProject('prev'));

let autoMoveId =  setInterval(() => changeProject('next'), 5000);

view.carouselProject.addEventListener("mouseenter", () => {
	console.log("stop");
	clearInterval(autoMoveId);
});
view.carouselProject.addEventListener("mouseleave", () => {
	console.log("start");
	autoMoveId = setInterval(() => changeProject('next'), 5000);

});


const helpElement = document.querySelector('.help');
const popupElement = document.querySelector('#popup');

// Add event listeners for mouseenter and mouseleave
helpElement.addEventListener('mouseenter', () => {
	popupElement.style.visibility = 'visible';
	popupElement.animate([
		{ transform: `translateY(-25px)`, opacity: 0 },
		{ transform: `translateY(0px)`, opacity: 1 }
	], animOptions);
});

helpElement.addEventListener('mouseleave', () => {
	popupElement.style.visibility = 'hidden';
	popupElement.animate([
		{ transform: `translateY(0px)`, opacity: 1 },
		{ transform: `translateY(-25px)`, opacity: 0 }
	], animOptions);
});

// Add a tilting effect to a random passion card every 5 seconds
const nbPassions = view.passions.length;
function tiltPassion() {
	const id = Math.floor(Math.random() * nbPassions);
	if (view.passions[id].matches(":hover")) return;
	view.passions[id].animate([
		{ transform: `rotateY(0deg)` },
		{ transform: `rotateY(40deg)` },
		{ transform: `rotateY(0)` }
	], animOptions);
}

setInterval(tiltPassion, 5000);

Array.from(view.moreLess).forEach((element) => {
	element.addEventListener('click', () => {
		const text = element.previousElementSibling;
		text.classList.toggle('hide');
		element.textContent = text.classList.contains('hide') ? 'Voir plus' : 'Voir moins';
	});
});