const main = document.createElement('div')
main.className += 'stars'
const tag = document.querySelector("body");


//titolo 'tell us how it's going'

const h1 = createElements(tag, 'h1', 'h1')
h1.innerHTML = 'Tell us how it\'s going'


//paragrafo

const p = createElements(tag,'h3','p')
p.innerHTML = 'From 0 to 10, how likely are you to recommend EPICODE to a friend o a colleague?'

//ciclo stelline
tag.append(main)

for(let x=0;x<10;x++){
    const star = createElements(main,'img','star')
    star.src = '../assets/img/star.svg'
    star.starValue = (x+1);
    ['mouseover', 'mouseout', 'click'].forEach((ele)=>{
        star.addEventListener(ele,starRate);
    })
} 

function starRate(e){
    const eventType = e.type
    const parent = e.target.closest('.stars');
    const colorStars = parent.querySelectorAll('.star');
    const valutazione = e.target.starValue
    if(eventType === 'mouseover'){
        colorRate(colorStars);
    }
    if(eventType === 'click'){
        localStorage.setItem('Valutazione', valutazione);
    }

    colorRate(colorStars,e.target.starValue);
}

function colorRate(colorStars,val){
    colorStars.forEach((star,index)=>{
        if(index < val){
            star.classList.add('starColorHover');
        }else{
            star.classList.remove('starColorHover');
        }
    })
} 

//invito a lasciare una valutazione

const pValutazione = createElements(tag,'h3','pValutazione')
pValutazione.innerHTML = 'Leave us an open feedback about your experience so far'

//Input
const inputText = document.createElement('div')
inputText.className += 'inputText'
tag.append(inputText)

const input = createElements(inputText,'input','inp')
const inputValue = document.querySelector('.inp')
input.type = 'text'
input.placeholder = 'Write your comment here'



//bottone sotto

const button = createElements(tag,'button','button');
button.innerHTML = "more info".toUpperCase();
button.id += 'moreInfoPosition'

button.addEventListener("click", function () {
    localStorage.setItem('Commento', inputValue.value);
    localStorage.getItem(inputValue.value)
});

//funzione per creare elementi

function createElements(parent,element,myClass){
    const el = document.createElement(element);
    el.classList.add(myClass);
    parent.append(el);
    return el;
}