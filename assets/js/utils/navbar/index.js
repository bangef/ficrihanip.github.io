let isFlag = false;
let isTheme = false;

/**
 * Fungsi mengganti button navbar.
 * Nodelist: Nodelist element button hamburger
 * @param {nodelist} nodeList
 */
const changeBtnHamburger = (nodeList) => {
	nodeList.classList.toggle("show");
};

/**
 * Fungsi memunculkan dan menghilangkan navbar ketika berada di breakpoint: 768px.
 * callback: function changeBtnHamburger
 * nodeList: nodeList element navbar
 * @param {function} callback
 * @param {nodelist} nodeList
 */
const showNavbar = (nodeList, callback) => {
	callback;
	if (isFlag === false) {
		nodeList.style.top = "75px";
	} else {
		nodeList.style.top = "-450px";
	}
	isFlag = !isFlag;
};

/**
 * Fungsi toggle icon mode light atau dark navbar ketika berada di breakpoint: 768px.
 * nodeList: nodeList element navbar
 * @param {nodelist} nodeList
 */
const changeBtnTheme = (nodeList) => {
	isTheme === false
		? (nodeList.src = "./assets/image/navbar/mode-night.svg")
		: (nodeList.src = "./assets/image/navbar/mode-light.svg");
	isTheme = !isTheme;
};

export { changeBtnHamburger, showNavbar, changeBtnTheme, isFlag };
