let tag = document.querySelector("body");
const divConteiner = document.createElement('div');
divConteiner.classList.add('divConteiner');
tag.append(divConteiner);

//Questa serie di funzioni crea le diverse parti della prima 'slide' (Welcome)
function createImg() {
    let img = document.createElement("img");
    img.src = "assets/img/epicode_logo.png";
    img.className += "logo";
    divConteiner.append(img);
}

function createTitle() {
    //welcome page
    let h1 = document.createElement("h1");
    let span = document.createElement("span");

    h1.innerHTML = "Welcome to ";
    span.innerHTML = "your exam";

    divConteiner.append(h1);
    h1.append(span);
}

function createInstructions() {
    //instructions
    let h3 = document.createElement("h3");
    h3.textContent = "Instructions";
    divConteiner.append(h3);

    let p = document.createElement("p");
    p.innerHTML =
        "We don't expect most engineers to know the answers to all of these" +
        "<br>" +
        "questions, so don't worry if you're unsure of a few of them.";
    h3.append(p);
    p.classList.add("parag");
}

function createList() {
    ////LISTA

    let listaLi = [
        "Each question is timed and can only be answered once.",

        "Changing browser tab or opening other windows will invalidate the question.",

        "This exam will take approx. 0-5 minutes.",
    ];

    let lista = document.createElement("ul");
    divConteiner.append(lista);

    listaLi.forEach((list) => {
        let li = document.createElement("li");
        li.innerHTML = list.replace(
            /(timed|answered once|invalidate the question|0-5 minutes)/g,
            "<span>$1</span>"
        );
        lista.append(li);
        li.className += "lista";
    });
}

function createButton() {
    ////// BOTTONE WELCOME PAGE ////

    let button = document.createElement("button");
    button.innerHTML = "proceed".toUpperCase();

    button.className = "button";

    divConteiner.append(button);

    //Checkbox & termini e condizioni
    let check = document.createElement("input");
    let txtCheck = document.createElement("label");
    txtCheck.textContent =
        "I promise to answer myself without help from anyone";
    check.setAttribute("type", "checkbox");

    let divCheck = document.createElement("div");
    divCheck.classList.add("container-check");
    divCheck.append(check);
    divCheck.append(txtCheck);

    divConteiner.append(divCheck);

    button.disabled = true;
    check.addEventListener("change", function () {
        if (!this.checked) {
            button.disabled = true;
        } else {
            button.disabled = false;
        }
    });
}

// Al caricamento della pagina si eseguono le funzioni per costruire l'HTML
window.onload = function () {
    createImg();
    createTitle();
    createInstructions();
    createList();
    createButton();
    let button = document.querySelector(".button");
    button.addEventListener("click", function () {
        // al click del bottone si passa alla 'benchmark page'
        createBenchPage();
    });
};

/////////////// QUIZ ///////////////

class Quiz {
    constructor(
        _category,
        _type,
        _difficulty,
        _question,
        _correct,
        _incorrect,
        _time
    ) {
        this.category = _category;
        this.type = _type;
        this.difficulty = _difficulty;
        this.question = _question;
        this.correct = _correct;
        this.incorrect = _incorrect;
        this.time = _time;
    }
}

let quiz1 = new Quiz(
    "Science: Computers",
    "multiple",
    "easy",
    "What does CPU stand for?",
    "Central Processing Unit",
    [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
    ],
    20
);

let quiz2 = new Quiz(
    "Science: Computers",
    "multiple",
    "easy",
    "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    "Final",
    ["Static", "Private", "Public"],
    10
);

let quiz3 = new Quiz(
    "Science: Computers",
    "boolean",
    "easy",
    "The logo for Snapchat is a Bell.",
    "False",
    ["True"],
    10
);

let quiz4 = new Quiz(
    "Science: Computers",
    "boolean",
    "easy",
    "Pointers were not used in the original C programming language; they were added later on in C++.",
    "False",
    ["True"],
    15
);

let quiz5 = new Quiz(
    "Science: Computers",
    "multiple",
    "easy",
    "What is the most preferred image format used for logos in the Wikimedia database?",
    ".svg",
    [".png", ".jpeg", ".gif"],
    25
);

let quiz6 = new Quiz(
    "Science: Computers",
    "multiple",
    "easy",
    "In web design, what does CSS stand for?",
    "Cascading Style Sheet",
    [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
    ],
    20
);

let quiz7 = new Quiz(
    "Science: Computers",
    "multiple",
    "easy",
    "What is the code name for the mobile operating system Android 7.0?",
    "Nougat",
    ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
    15
);

let quiz8 = new Quiz(
    "Science: Computers",
    "multiple",
    "easy",
    "On Twitter, what is the character limit for a Tweet?",
    "140",
    ["120", "160", "100"],
    24
);

let quiz9 = new Quiz(
    "Science: Computers",
    "boolean",
    "easy",
    "Linux was first created as an alternative to Windows XP.",
    "False",
    ["True"],
    18
);

let quiz10 = new Quiz(
    "Science: Computers",
    "multiple",
    "easy",
    "Which programming language shares its name with an island in Indonesia?",
    "Java",
    ["Python", "C", "Jakarta"],
    30
);

let quizQuest = [
    quiz1,
    quiz2,
    quiz3,
    quiz4,
    quiz5,
    quiz6,
    quiz7,
    quiz8,
    quiz9,
    quiz10,
];

// Dato un numero in input (n) che indica il numero di domande,
// si estragono in modo casuale le domande contenute nell'array quizQuest
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

// ottiene un numero casuale per stabilire la lunghezza del quiz
// si puo scegliere il minimo e il massimo
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Ottiene array di domande random che contiene almeno 5 domande e non piu di 10
let domandeRandom = getRandomQuiz(randomNumber(5, 10));

// indica la domanda corrente
let indexDomanda = 0;

// mostra la domanda e tutte le possibili risposte
function printQuiz() {
    //struttura dei radio buttons
    let fieldset = document.createElement("fieldset");
    divConteiner.append(fieldset);
    let domanda = document.createElement("legend");
    let answerContainer = document.createElement("div");
    answerContainer.classList.add("answer_container");
    domanda.textContent = domandeRandom[indexDomanda].question;
    fieldset.prepend(domanda);

    // si crea un nuovo array con tutte le domande (corrette e non)
    let allAnswer = [...domandeRandom[indexDomanda].incorrect];
    allAnswer.push(domandeRandom[indexDomanda].correct);

    // 'mescola' le risoste per mostrarle in ordine casuale
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    shuffleArray(allAnswer);

    // mostra domande e ripsoste su HTML
    for (let risposta of allAnswer) {
        let input = document.createElement("input");
        input.setAttribute("name", "answer");
        let risposte = document.createElement("label");
        let div = document.createElement("div");
        input.setAttribute("type", "radio");
        input.setAttribute("value", risposta);
        risposte.setAttribute("for", risposta);
        input.setAttribute("id", risposta);
        risposte.innerText = risposta;
        div.append(input);
        div.append(risposte);
        answerContainer.append(div);
        fieldset.append(answerContainer);
    }

    startTimer(domandeRandom[indexDomanda].time); // inizia timer
    indexDomanda++;
    getAnswer();
}

let userAnswers = [];

function getAnswer() {
    let radios = document.querySelectorAll("input[type = radio]");

    // ottiene risposta dall'utente e la salva in un array, poi passa alla domanda successiva
    for (let i = 0; i < radios.length; i++) {
        radios[i].addEventListener("click", function () {
            userAnswers.push(this.value);
            createBenchPage();
        });
    }
}

let timer; // variabile che tiene traccia del Timer
let isTimerRunning = false; // variabile che indica se il Timer è in esecuzione o fermato

// funzione timer
function startTimer(seconds) {
    let countdown = seconds;
    let timerContainer = document.createElement("div");
    timerContainer.classList.add("timer_container");
    divConteiner.append(timerContainer);
    let time = document.createElement("p");

    // verifica se il Timer è in esecuzione
    if (!isTimerRunning) {
        timer = setInterval(function () {
            countdown--;
            time.innerHTML = "SECONDS " + countdown + " REMAINIG";
            timerContainer.append(time);
            if (countdown === 0) {
                time.innerHTML = "";
                userAnswers.push(null);
                clearInterval(timer);
                createBenchPage();
            }
        }, 1000);

        isTimerRunning = true; // imposta la variabile a true per indicare che il Timer è in esecuzione
    }
}

function createBenchPage() {
    // svuota HTML precedente
    divConteiner.innerHTML = "";

    // verifica se il Timer è in esecuzione e lo ferma
    if (isTimerRunning) {
        clearInterval(timer);
        isTimerRunning = false; // imposta la variabile a false per indicare che il Timer è stato fermato
    }

    // crea logo e sfondo
    createImg();

    // se si arriva all'ultima domanda passare a pagina dei risultati
    // altrimenti si stampa una nuova domanda
    indexDomanda === domandeRandom.length ? displayResult() : printQuiz();
}


function displayResult() {
    divConteiner.innerHTML = "";
    createImg();

    let h2 = document.createElement("h2");
    h2.textContent = "Results";
    h2.classList.add("titleChart");
    let paragChart = document.createElement("p");
    paragChart.textContent = "The summary of your answers:";
    paragChart.classList.add("paragChart");
    divConteiner.appendChild(h2);
    h2.appendChild(paragChart);

    let divCanvas = document.createElement("div");
    divCanvas.classList.add("divCanvas");
    let canvas = document.createElement("canvas");
    canvas.id = "myChart";

    divConteiner.append(divCanvas);
    divCanvas.append(canvas);

    const btnChart = document.createElement("button");
    btnChart.textContent = "rate us".toUpperCase();
    btnChart.classList.add("btnChart");
    divConteiner.appendChild(btnChart);

    let correctAnswers = 0;
    console.log(userAnswers);
    console.log(domandeRandom);
    console.log(correctAnswers);

    for (let i = 0; i < domandeRandom.length; i++) {
        if (userAnswers[i] === domandeRandom[i].correct) {
            correctAnswers++;
        }
    }
    let uncorrectAnswers = domandeRandom.length - correctAnswers;

    const data = {
        labels: ["Correct", "Wrong"],
        datasets: [
            {
                label: "Quiz Answers",
                data: [correctAnswers, uncorrectAnswers],
                backgroundColor: ["rgb(75, 192, 192)", "rgb(255, 99, 132)"],
                hoverOffset: 8,
            },
        ],
    };

    canvas = document.querySelector("#myChart");
    new Chart(canvas, {
        type: "doughnut",
        data: data,
    });
}
