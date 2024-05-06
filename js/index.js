import view from "./view.js";

const nbPassions = view.passions.length;
const animOptions =  {
	duration: 500,
	easing: "ease-in-out",
	fill: "forwards"
};

function changePassion(direction) {
	const active = document.querySelector(".active");
	const id = [...view.passions].indexOf(active);
	const newId = (direction === 'next') ? (id + 1) % nbPassions : (id - 1 + nbPassions) % nbPassions;

	active.classList.remove("active");
	view.dots[id].textContent = "○";
	active.animate([
		{ transform: `translateX(0px)`, opacity: 1 },
		{ transform: `translateX(${direction === 'next' ? 600 : -600}px)`, opacity: 0 }
	], animOptions);

	view.passions[newId].classList.add("active");
	view.dots[newId].textContent = "●";
	view.passions[newId].animate([
		{ transform: `translateX(${direction === 'next' ? -600 : 600}px)`, opacity: 0 },
		{ transform: `translateX(0px)`, opacity: 1 }
	], animOptions);
}


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

document.addEventListener("scroll", (ev) => {
	if (window.scrollY > 30) {
		view.navBar.classList.add("scrolled");
	} else {
		view.navBar.classList.remove("scrolled");
	}
});




view.nextButton.addEventListener("click", () => changePassion('next'));
view.prevButton.addEventListener("click", () => changePassion('prev'));

let autoMoveId =  setInterval(() => changePassion('next'), 5000);


view.carousel.addEventListener("mouseenter", () => clearInterval(autoMoveId));
view.carousel.addEventListener("mouseleave", () => autoMoveId = setInterval(() => changePassion('next'), 5000));