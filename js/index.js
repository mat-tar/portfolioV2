import view from "./view.js";

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

document.addEventListener("scroll", (ev) => {
	if (window.scrollY > 30) {
		view.navBar.classList.add("scrolled");
	} else {
		view.navBar.classList.remove("scrolled");
	}
});