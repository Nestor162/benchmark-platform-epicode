const main = document.querySelector('.stars')
const starUl = createElements(main,'ul','main')

//ciclo stelline


for(let x=0;x<10;x++){
    const star = createElements(starUl,'li','star');
    const img = createElements(star,'img')
    img.src = 'assets/img/star.svg';
} 



//funzione per creare elementi

function createElements(parent,element,myClass){
    const el = document.createElement(element);
    el.classList.add(myClass);
    parent.append(el);
    return el;
}