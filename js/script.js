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
    window.location.href = '#';
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



//////////QUIZ/////////////////


class Quiz {
    constructor(_category, _type, _difficulty, _question, _correct, _incorrect, _time) {

        this.category = _category;
        this.type = _type;
        this.difficulty = _difficulty;
        this.question = _question;
        this.correct = _correct;
        this.incorrect = _incorrect;
        this.time = _time;
    }
}

let quiz1 = new Quiz("Science: Computers", "multiple", "easy", "What does CPU stand for?", "Central Processing Unit", ["Central Process Unit", "Computer Personal Unit", "Central Processor Unit"], 20);

let quiz2 = new Quiz("Science: Computers", "multiple", "easy", "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?", "Final", ["Static", "Private", "Public"], 10);

let quiz3 = new Quiz("Science: Computers", "boolean", "easy", "The logo for Snapchat is a Bell.", "False", ["True"], 10);

let quiz4 = new Quiz("Science: Computers", "boolean", "easy", "Pointers were not used in the original C programming language; they were added later on in C++.", "False", ["True"], 15);

let quiz5 = new Quiz("Science: Computers", "multiple", "easy", "What is the most preferred image format used for logos in the Wikimedia database?", ".svg", [".png", ".jpeg", ".gif"], 25);

let quiz6 = new Quiz("Science: Computers", "multiple", "easy", "In web design, what does CSS stand for?", "Cascading Style Sheet", ["Counter Strike: Source", "Corrective Style Sheet", "Computer Style Sheet"], 20);

let quiz7 = new Quiz("Science: Computers", "multiple", "easy", "What is the code name for the mobile operating system Android 7.0?", "Nougat", ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow",], 15);

let quiz8 = new Quiz("Science: Computers", "multiple", "easy", "On Twitter, what is the character limit for a Tweet?", "140", ["120", "160", "100"], 24);

let quiz9 = new Quiz("Science: Computers", "boolean", "easy", "Linux was first created as an alternative to Windows XP.", "False", ["True"], 18);

let quiz10 = new Quiz("Science: Computers", "multiple", "easy", "Which programming language shares its name with an island in Indonesia?", "Java", ["Python", "C", "Jakarta"], 30);



let quizQuest = [quiz1, quiz2, quiz3, quiz4, quiz5, quiz6, quiz7, quiz8, quiz9, quiz10];

/*function getRandomQuiz(){
    let output = [];

    quizQuest.forEach((question, questionNumber) => {
        let answers = [];

        for (letter in question.)
    }
)}*/


function getRandomQuiz(n) {
    let output = [];
    let usedQuestions = []; // array di domande già usate

    // ciclo finché non si sono aggiunte tutte le domande richieste
    while (output.length < n) {
        // scegli un indice casuale
        let randomIndex = Math.floor(Math.random() * quizQuest.length);

        // se la domanda non è già stata usata, la aggiungiamo all'output
        if (!usedQuestions.includes(randomIndex)) {
            usedQuestions.push(randomIndex);
            output.push(quizQuest[randomIndex]);
        }
    }

    return output;
}

console.log(getRandomQuiz(5));

























































