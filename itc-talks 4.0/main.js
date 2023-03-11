var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 3){
        counter = 1;
    }
}, 5000);


let countDownDate = new Date("Mar 15, 2023 00:00:00").getTime();
let counterDays = setInterval(() => {
    let dateNow = new Date().getTime();
    let dateDiff = countDownDate - dateNow;

    let days = Math.floor(dateDiff / (1000 * 59 * 59 * 24));
    let hours = Math.floor(dateDiff % (1000 * 59 * 59 * 24) / (1000 * 59 * 59));
    let minutes = Math.floor(dateDiff % (1000 * 59 * 59) / (1000 * 59));
    let seconds = Math.floor(dateDiff % (1000 * 59) / 1000) ;

    if(seconds == 0 && minutes != 0){ 
        seconds = 59;
        minutes--;
    }
    if(minutes == 0 && hours != 0){
        minutes = 59;
        hours--;
    }
    if(hours == 0 && days != 0){
        hours = 23;
        days--;
    }


    let Days = document.querySelector(".days span");
    let Hours = document.querySelector(".hours span");
    let Minutes = document.querySelector(".minutes span");
    let Seconds = document.querySelector(".seconds span");

    Days.innerHTML = days;
    Hours.innerHTML = hours;
    Minutes.innerHTML = minutes;
    Seconds.innerHTML = seconds;

    if (dateDiff < 0){
        clearInterval(counter);
        Days.innerHTML = 0;
        Hours.innerHTML = 0;
        Minutes.innerHTML = 0;
        Seconds.innerHTML = 0;
    }

}, 1000)

const btn = document.querySelector("#btn-send");
const btnText = document.querySelector("#btnText");
btn.onclick = () => {
    btnText.innerHTML = "Thanks";
    btn.classList.add("active");
};


const firstTitle = document.querySelector('.slider-container h2');
const secondTitle = document.querySelector('.slider-container h3');

let timeLine = gsap.timeline();

timeLine.to(".image-wrap", {
    height: "243px",
    backgroundSize: "100%",
    duration: 2,
    ease: "power4.inOut",
});

new Typewriter(firstTitle, {

})

.pauseFor(200)
.pause(2000)
.typeString('<span style="color: #fff", "font-family: "Poppins", sans-serif">itc talks 4.0</span>')
.start()

let registerClass = document.querySelector('.register-class');
let registerButton = document.querySelector('.register-btn');

let registerButton2 = document.querySelector('.register-btn2');

registerButton.addEventListener('click', () => {
    registerClass.classList.toggle('register-btn-active')
})

registerButton2.addEventListener('click', () => {
    registerClass.classList.toggle('register-btn-active2')
})

