// ==================================
// 1. Declaring all global variables
// needed in the script.
// 
// ==================================

const linkBar = document.querySelector("[data-link]");
const hamburger = document.querySelector("[data-hamburger]");

const productTabs = document.querySelectorAll("[data-category]");
const allItems = document.querySelectorAll("[data-catalogue]");
const cardRow = document.querySelector("[data-card-row]");
const noItems = document.querySelector("[data-no-items]");

// ==================================
// 1. Toggle humbugger menu;
// By default, the .link tag should 
// display none.
// ==================================


hamburger.addEventListener("click", () => {
	console.log("start");
	linkBar.classList.toggle("add_flex");
	console.log("end");
})




// ==================================
// 2. Display products based on 
// All, Men or Female categories.
// ==================================

productTabs.forEach(productTab => {
	productTab.addEventListener("click", () => {
		const value = productTab.getAttribute("value");
		for (let element of productTabs){
			if (element.getAttribute("class") != value){
				element.removeAttribute("checked");
			}
			else {
				element.setAttribute("checked", true);
			}
		}

		let count = 0;
		if (value == "Babies"){
			for (let item of allItems){
				const tag = item.innerText;
				if (tag != value){
					item.parentElement.parentElement.parentElement.style.display = "none";
				}
				else {
					item.parentElement.parentElement.parentElement.style.display = "block";
					count++;
				}
			}
				cardRow.style.justifyContent = "space-evenly";
		}
		else if (value == "Male"){
			for (let item of allItems){
				const tag = item.innerText;
				if (tag != value){
					item.parentElement.parentElement.parentElement.style.display = "none";
				}
				else {
					item.parentElement.parentElement.parentElement.style.display = "block";
					count++;
				}
				cardRow.style.justifyContent = "space-evenly";
			}
		}
		else if (value == "Female"){
			for (let item of allItems){
				const tag = item.innerText;
				if (tag != value){
					item.parentElement.parentElement.parentElement.style.display = "none";
				}
				else {
					item.parentElement.parentElement.parentElement.style.display = "block";
					count++;
				}
				cardRow.style.justifyContent = "space-evenly";
			}
		}
		else {
			for (let item of allItems){
				item.parentElement.parentElement.parentElement.style.display = "initial";
				cardRow.style.justifyContent = "space-between";
				count++;
			}
		}
		if (count < 1){
			noItems.classList.add("add_flex");
		}
		else{
			noItems.classList.remove("add_flex");
		}
	})
})




// ==================================
// 2. Display products based on 
// search keywords in the input fields.
// ==================================