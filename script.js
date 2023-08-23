let selects = document.querySelector(".progress"),
    selectss = document.querySelector(".progress-value");

let count = 0,
    till = 90,
    speed = 100;

let functionn = setInterval(() => {

    count++;

    selectss.textContent = `${count}%`
    selects.style.background = `conic-gradient(#a285e1 ${count + 3.6}deg, #ededed 0deg);`

    if(count == till){
        clearInterval(functionn);
    }
}, speed);



