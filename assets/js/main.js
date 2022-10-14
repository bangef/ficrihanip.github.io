"use strict";

import {
	showNavbar,
	changeBtnHamburger,
	changeBtnTheme,
	isFlag,
} from "./utils/navbar/index.js";

const btnHamburger = document.querySelector(".btn-hamburgerbar");
const navbar = document.querySelector(".navbar");
btnHamburger.addEventListener("click", () => {
	changeBtnHamburger(btnHamburger);
	showNavbar(navbar);
});

const theme = document.querySelector(".btn-theme");
theme.addEventListener("click", function () {
	changeBtnTheme(theme);
});

const btnMenu = document.querySelectorAll(".navbar-menu--list");
btnMenu.forEach((element) => {
	element.addEventListener("click", function () {
		btnMenu.forEach((element) => element.classList.remove("active"));
		!this.classList.contains("active") && this.classList.add("active");
		if (window.innerWidth <= 768) {
			showNavbar(navbar, changeBtnHamburger(btnHamburger));
			document.querySelector("body").style.overflow = "visible";
		}
	});
});

let prev = window.scrollY;
window.addEventListener("scroll", function () {
	let curr = this.scrollY;
	if (isFlag === true) {
		document.querySelector("body").style.overflow = "hidden";
	} else {
		if (prev < curr) {
			document.querySelector("header").style.top = "-100%";
		} else {
			document.querySelector("header").style.top = "0";
		}
	}
	prev = curr;
});
