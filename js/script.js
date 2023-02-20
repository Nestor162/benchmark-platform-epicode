//IMG
let img = document.createElement('img');
img.src = 'assets/img/epicode_logo.png';
let tag = document.querySelector("body");
img.className += 'logo'
tag.append(img);

//////

//welcome page
let h1 = document.createElement("h1");
tag.append(h1);
document.querySelector("h1").innerHTML = "Welcome to your exam";

//bottone "proceed"
let button = document.createElement("button");
button.innerHTML = "proceed".toUpperCase();
button.className = 'button';

tag.append(button);

button.addEventListener ("click", function() {
    console.log("yo");
});

//quiz
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
