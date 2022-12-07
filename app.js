const sekundara = document.querySelector('.sekunda')
const minutara = document.querySelector('.minut')
const satara = document.querySelector('.sat')

function setDate() {
    const trenutno = new Date ();
    const [sati, minuti, sekunde] = [
    trenutno.getHours(),
    trenutno.getMinutes(),
    trenutno.getSeconds(),
    ];
    
    //ovde si dodao +90 da bi ti kernulo lepo odakle treba ali msm da moze i drugacije ovo
    const StepenSekendi = ((sekunde * 6) + 90);
    const StepenMinuta = ((minuti * 6) + 90);
    const StepenSati = ((sati * 30) + 90);

    //omogucavas da se stil pretvori za svaku sekundtu za odredjen broj stepeni
    sekundara.style.transform = `rotate(${StepenSekendi}deg)`

    minutara.style.transform = `rotate(${StepenMinuta}deg)`

    satara.style.transform = `rotate(${StepenSati}deg)`

    //ovo pises da proveris da li je sve kako treba
    //console.log(sati,minuti,sekunde);

//glitch gde ti se kazaljke okrenu suprotno kada dodju do 00 si resi time sto si dodao ovo    
if(sekunde===0)
sekundara.classList.add('glitch');
if(sekunde===1)
sekundara.classList.remove('glitch');

if(minuti===0)
minutara.classList.add('glitch');
if(minuti===1)
minutara.classList.remove('glitch');

if(sati===0)
satara.classList.add('glitch');
if(sati===1)
satara.classList.remove('glitch');

}

setInterval (setDate, 1000); /* na svkaih 1000ms odnosno 1s */

