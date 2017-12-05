

const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`

    if(seconds == 0 || seconds == 59){
        secondHand.style.transition = "all 0s";
    }


    const minutes = now.getMinutes();
    const minuteDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`

    if(minutes === 0 || minutes === 59){
        minuteHand.style.transition = "all 0s";
    }


    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`

    if(hours === 0 || hours === 12){
        hourHand.style.transition = "all 0s";
    }
}

setInterval(setDate, 1000);