//IMG
let img = document.createElement('img');
img.src = 'assets/img/epicode_logo.png';
let tag = document.querySelector("body");
img.className += 'logo'
tag.prepend(img);


function ResultsSlide(){

    let target = document.querySelector("#target");
    let html = document.querySelector("#template .slide").cloneNode(true);

    target.innerHTML = "";
    console.log(html);

     //seleziono gli elementi
     let titleDOM = html.querySelector('.title');
     let subTitle = html.querySelector('.subTitle');
     let results = html.querySelector('.results');
     let correctAns = html.querySelector('.results .correctAns');
     
     let wrongAns = html.querySelector('.results .wrongAns');
     let RateButton = html.querySelector('.option');
     
     //Inserisco tutti i dati
     titleDOM.textContent = "Results";
     subTitle.textContent = "The summary of your answers:";
     correctAns.textContent = 'Correct \n 66.7%';
     wrongAns.textContent = 'Wrong \n33.3%';
     RateButton.textContent = 'RATE US';

     const data = {
        labels: [
          'Correct',
          'Wrong'
        ],
        datasets: [{
          label: 'Risposte del quiz',
          data: [risposteCorrette, risposteErrate],
          backgroundColor: [
            'rgb(75, 192, 192)',
            'rgb(255, 99, 132)'
          ]
        }]
      };
     
    
     
     target.append(html);
     
}

ResultsSlide();