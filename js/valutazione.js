const main = document.querySelector('.stars')

//ciclo stelline


for(let x=0;x<10;x++){
    const star = createElements(main,'object','star');
    star.data = '../assets/img/star.svg'
    star.starValue = (x+1);
    ['mouseover', 'mouseout', 'click'].forEach((ele)=>{
        star.addEventListener(ele,starRate);
    })
} 

function starRate(e){
    const eventType = e.type
    const parent = e.target.closest('.stars');
    const colorStars = parent.querySelectorAll('.star');
    if(eventType === 'mouseover'){
        colorRate(colorStars);
    }

    colorRate(colorStars,e.target.starValue);
}

function colorRate(colorStars,val){
    console.log(val);
    colorStars.forEach((star,index)=>{
        if(index < val){
            star.classList.add('starColorHover');
        }else{
            star.classList.remove('starColorHover');
        }
    })
} 

//funzione per creare elementi

function createElements(parent,element,myClass){
    const el = document.createElement(element);
    el.classList.add(myClass);
    parent.append(el);
    return el;
}