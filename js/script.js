//IMG
let img = document.createElement('img');
img.src = 'assets/img/epicode_logo.png';
let tag = document.querySelector("body");
img.className += 'logo'
tag.append(img);


//welcome page
let h1 = document.createElement("h1");
let span = document.createElement("span");

h1.innerHTML = "Welcome to ";
span.innerHTML = "your exam";

tag.append(h1);
h1.append(span);







//instructions

let h3 = document.createElement('h3');
h3.textContent = 'Instructions';
tag.append(h3);

let p = document.createElement('p');
p.innerHTML =
    "We don't expect most engineers to know the answers to all of these" +
    "<br>" +
    "questions, so don't worry if you're unsure of a few of them.";
h3.append(p);
p.classList.add('parag');

////LISTA 

let listaLi = ['Each question is timed and can only be answered once.',

    'Changing browser tab or opening other windows will invalidate the question.',

    'This exam will take approx. 0-5 minutes.'
]

let lista = document.createElement('ul');
tag.append(lista)

listaLi.forEach((list) => {
    let li = document.createElement('li')
    li.innerHTML = list.replace(/(timed|answered once|invalidate the question|0-5 minutes)/g, "<span>$1</span>");
    lista.append(li);
    li.className += 'lista'

})


////// BOTTONE WELCOME PAGE ////

let button = document.createElement("button");
button.innerHTML = "proceed".toUpperCase();
button.className = 'button';

tag.append(button);


button.addEventListener("click", function () {
    window.location.href = 'slide2.js';
});


//Checkbox & termini e condizioni
let check = document.createElement("input");
let txtCheck = document.createElement('label');
txtCheck.textContent = ('I promise to answer myself without help from anyone');
check.setAttribute("type", "checkbox");

let divCheck = document.createElement('div');
divCheck.classList.add('container-check');
divCheck.append(check);
divCheck.append(txtCheck);

tag.append(divCheck);

button.disabled = true
check.addEventListener('change', function () {
    if (!this.checked) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
});


