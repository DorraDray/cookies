

let cookies=0;
let CookiesPerSecond=1;
let Grandma=0;
let counter = document.getElementById("counter");
let counterbutton = document.getElementById("counterbutton");
let counterGrandma = document.getElementById("counterGrandma");
let buyGrandma = document.getElementById("buyGrandma");
let counterPS = document.getElementById("counterPS");




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

    Grandma = Number(savedGrandmas) || 0; 
//    const localCookiesPerSecond = localStorage.getItem("localCookiesPerSecond");
    cookies=Number(cookieCount);
    CookiesPerSecond = Number(localCookiesPerSecond) || 1
    counter.textContent=cookies+" Cookies";
    counterPS.textContent=CookiesPerSecond + 'Cookies/Sec';
    counterGrandma.textContent = Grandma;
}


function addGrandma(){
    Grandma = Grandma + 1;
    counterGrandma.textContent=Grandma;
    CookiesPerSecond=CookiesPerSecond+1;
    counterPS.textContent=CookiesPerSecond;
    cookies=cookies-10;
    counter.textContent=cookies+" Cookies";
    localStorage.setItem("cookieCountGrandma",Grandma );
    localStorage.setItem("cookieCount", cookies);
    localStorage.setItem("localCookiesPerSecond", CookiesPerSecond);
}

buyGrandma.addEventListener("click", addGrandma);



// reset function to clear Local Store (localstroage.clear()) 
function reset(){
    localStorage.clear();
    cookies=0;
    CookiesPerSecond=1;
    Grandma=0;
    counter.textContent=cookies+" Cookies";
    counterPS.textContent=CookiesPerSecond + 'Cookies/Sec';
    counterGrandma.textContent = Grandma;
}

resetid.addEventListener("click", reset);
loadCookies();

