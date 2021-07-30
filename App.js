window.onload = () => {

const createTask = document.querySelector('.create-task');
const input = document.getElementById('newTaskName');
const type = document.getElementById('newTagName');
const listValue = document.querySelector('.list-item-value');
const list = document.querySelector('.list-flex');
const listHdr = document.querySelector(".right-list-h3");


let typeBC = ["#ffecb5", "#e2bbff", "#b6ffee", "#ffb4c0", "#bbfaff"];
let typeCurrentC = [];
let slate = [];
let localData = localStorage.getItem("slate");
if (localData) {
	slate = JSON.parse(localStorage.getItem("slate"));
	if (slate.length == 0) {
		listHdr.innerHTML = "Add a task to begin.";
	} else {
		maker();
		listHdr.innerHTML = "Up coming task.";
	}
}

createTask.addEventListener("click", addToList);
function addToList() {
	const inputType = type.value;
	const inputValue = input.value;
	const typeColor = typeBC[Math.floor(Math.random() * typeBC.length)];
	if (inputValue === "" || inputType === "") {
		return alert("enter value");
	}
	const obj = {
		value: inputValue,
		type: inputType,
		labelColor: typeColor
	};
	const val = slate.length;
	slate.unshift(obj);
	input.value = "";
	type.value = "";
	createList(obj, val);
	input.focus();
	listHdr.innerHTML = "Up coming task.";
	maker();
	localStorage.setItem("slate", JSON.stringify(slate));
}
function maker() {
	list.innerHTML = "";
	slate.forEach((element, index) => {
		createList(element, index);
	});
}
function createList(el, indx) {

	const itemDiv = document.createElement("div");
	itemDiv.classList.add("list-item");
	list.append(itemDiv);

	const valueDiv = document.createElement("div");
	valueDiv.classList.add("list-item-value");
	valueDiv.textContent = `${el.value}`;

	const typeDiv = document.createElement("div");
	typeDiv.style.backgroundColor = el.labelColor;
	typeDiv.classList.add("list-item-type");
	typeDiv.textContent = `${el.type}`;

	const removeDiv = document.createElement("div");
	removeDiv.classList.add("list-item-remove");
	removeDiv.innerHTML = `<i class="fas fa-trash"></i>`;
    
    itemDiv.append(valueDiv);
	itemDiv.append(typeDiv);
	itemDiv.append(removeDiv);

	removeDiv.addEventListener("click", () => {
		itemDiv.style.backgroundColor = "#ffffff45";
		let isSure = window.confirm('Are you sure you want to delete this task ? ');
    
        if (isSure)
        itemDiv.remove();
          // itemDiv.classList.remove("list-item");
           slate.splice(indx, 1);
	
			itemDiv.style.backgroundColor = "var(--primary-dark)";
			localStorage.setItem("slate", JSON.stringify(slate));
		});
	};
	localStorage.setItem("slate", JSON.stringify(slate));
}

    
    let span = document.querySelector('span');
    let add = document.getElementById('btn');

    span.addEventListener('click', onClick);
    function onClick () {
        this.parentElement.remove();
    }

    add.addEventListener ('click', function(){
        const show = document.getElementById('todo-task');
        if (show.style.display == "none") {
            show.style.display = "block";
           }
        else {
            show.style.display = "none";
          }

    });




