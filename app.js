

let cookies=0;
let CookiesPerSecond=1;
let Grandma=0;
let Oven=0;
let Factory=0;
let Mine=0;
let Bank=0;
let counter = document.getElementById("counter");
let counterbutton = document.getElementById("counterbutton");
let counterPS = document.getElementById("counterPS");
let counterGrandma = document.getElementById("counterGrandma");
let resetid = document.getElementById("resetid");
let counterOven = document.getElementById("counterOven");
let counterFactory = document.getElementById("counterFactory");
let counterMine = document.getElementById("counterMine");
let counterBank = document.getElementById("counterBank");
let buyGrandma = document.getElementById("buyGrandma");
let buyOven = document.getElementById("buyOven");
let buyFactory = document.getElementById("buyFactory");
let buyMine = document.getElementById("buyMine");
let buyBank = document.getElementById("buyBank");

// a function that increases counter by 1 and changes the value of the counter on the page
function addcookie(){
    cookies = cookies + CookiesPerSecond;
    counter.textContent=cookies+" Cookies";
    localStorage.setItem("cookieCount", cookies);
}

// an event listener, so when we click the button the function runs
counterbutton.addEventListener("click", addcookie);

//set timer
setInterval(function () {
    cookies = cookies + CookiesPerSecond;
    counter.textContent=cookies+" Cookies";
    localStorage.setItem("cookieCount", cookies);
  }, 1000); // 1000 milliseconds == 1 second


 function loadCookies() {
    const cookieCount = localStorage.getItem("cookieCount");
    const localCookiesPerSecond = localStorage.getItem("localCookiesPerSecond");
    const savedGrandmas = localStorage.getItem("cookieCountGrandma"); // load saved grandma number from local store
     const savedOvens = localStorage.getItem("cookieCountOven");
    const savedFactorys = localStorage.getItem("cookieCountFactory");
    const savedMines = localStorage.getItem("cookieCountMine");
    const savedBanks = localStorage.getItem("cookieCountBank");

    Grandma = Number(savedGrandmas) ||0; 
    Oven = Number(savedOvens) ||0; 
    Factory = Number(savedFactorys)||0;
    Mine = Number(savedMines)||0;
    Bank = Number(savedBanks)||0;

    
    cookies=Number(cookieCount)  || 0;
    CookiesPerSecond = Number(localCookiesPerSecond) || 1
    counter.textContent=cookies+" Cookies";
    counterPS.textContent=CookiesPerSecond + 'Cookies/Sec';
    counterGrandma.textContent = Grandma;
    counterOven.textContent = Oven;
    counterFactory.textContent = Factory;
    counterMine.textContent = Mine;
    counterBank.textContent = Bank;
}


function addGrandma(){
    if(cookies>=1){
    Grandma = Grandma + 1;
    counterGrandma.textContent=Grandma;
    CookiesPerSecond=CookiesPerSecond+1;
    counterPS.textContent=CookiesPerSecond;
    cookies=cookies-10;
    counter.textContent=cookies+" Cookies";
    localStorage.setItem("cookieCountGrandma",Grandma );
    localStorage.setItem("cookieCount", cookies);
    localStorage.setItem("localCookiesPerSecond", CookiesPerSecond);
    }else{
        alert("you dont have enought cookies")
    }
}
function addOven(){
    if(cookies>=100){
    Oven = Oven + 1;
    counterOven.textContent=Oven;
    CookiesPerSecond=CookiesPerSecond+10;
    counterPS.textContent=CookiesPerSecond;
    cookies=cookies-100;
    counter.textContent=cookies+" Cookies";
    localStorage.setItem("cookieCountOven",Oven );
    localStorage.setItem("cookieCount", cookies);
    localStorage.setItem("localCookiesPerSecond", CookiesPerSecond);
    }
    else{
        alert("you dont have enought cookies")
    }
}
function addFactory(){
    if(cookies>=1000){
    Factory = Factory + 1;
    counterFactory.textContent=Factory;
    CookiesPerSecond=CookiesPerSecond+100;
    counterPS.textContent=CookiesPerSecond;
    cookies=cookies-1000;
    counter.textContent=cookies+" Cookies";
    localStorage.setItem("cookieCountFactory",Factory );
    localStorage.setItem("cookieCount", cookies);
    localStorage.setItem("localCookiesPerSecond", CookiesPerSecond);
    }
    else{
        alert("you dont have enought cookies")
    }
}
function addMine(){
    if(cookies>=10000){
    Mine = Mine + 1;
    counterMine.textContent=Mine;
    CookiesPerSecond=CookiesPerSecond+1000;
    counterPS.textContent=CookiesPerSecond;
    cookies=cookies-10000;
    counter.textContent=cookies+" Cookies";
    localStorage.setItem("cookieCountMine",Mine );
    localStorage.setItem("cookieCount", cookies);
    localStorage.setItem("localCookiesPerSecond", CookiesPerSecond);
    }
    else{
        alert("you dont have enought cookies")
    }
}
function addBank(){
    if(cookies>=100000){
    Bank = Bank + 1;
    counterBank.textContent=Bank;
    CookiesPerSecond=CookiesPerSecond+10000;
    counterPS.textContent=CookiesPerSecond;
    cookies=cookies-100000;
    counter.textContent=cookies+" Cookies";
    localStorage.setItem("cookieCountBank",Bank );
    localStorage.setItem("cookieCount", cookies);
    localStorage.setItem("localCookiesPerSecond", CookiesPerSecond);
    }
    else{
        alert("you dont have enought cookies")
    }
}
buyGrandma.addEventListener("click", addGrandma);
buyOven.addEventListener("click", addOven);
buyFactory.addEventListener("click", addFactory);
buyMine.addEventListener("click", addMine);
buyBank.addEventListener("click", addBank);

//reset function to clear Local Store (localstroage.clear()) 
function reset(){
    localStorage.clear();
    cookies=0;
    CookiesPerSecond=1;
    Grandma=0;
    Oven=0;
    Factory=0;
    Mine=0;
    Bank=0;
    counter.textContent=cookies+" Cookies";
    counterPS.textContent=CookiesPerSecond + 'Cookies/Sec';
    counterGrandma.textContent = Grandma;
    counterOven.textContent = Oven;
    counterFactory.textContent=Factory;
    counterMine.textContent=Mine;
    counterBank.textContent=Bank;
}

resetid.addEventListener("click", reset);

loadCookies();

