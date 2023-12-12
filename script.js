const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", function () {
hamburger.classList.toggle("active");
navMenu.classList.toggle("active");
});

// =============================================================

// date month year
const date = new Date();

let day = date.getDate();
let month = date.getMonth() +1;
let year = date.getFullYear();

document.querySelector(".day").innerHTML =  day + "/" + month + "/" + year;
document.querySelector(".day-1").innerHTML =  day-1 + "/" + month + "/" + year;
document.querySelector(".day-2").innerHTML =  day-2 + "/" + month + "/" + year;
document.querySelector(".day-3").innerHTML =  day-3 + "/" + month + "/" + year;
document.querySelector(".day-4").innerHTML =  day-4 + "/" + month + "/" + year;
document.querySelector(".day-5").innerHTML =  day-5 + "/" + month + "/" + year;
document.querySelector(".day-6").innerHTML =  day-6 + "/" + month + "/" + year;
document.querySelector(".day-7").innerHTML =  day-7 + "/" + month + "/" + year;

let currentDate = `${day}-${month}-${year}`;
console.log(currentDate); 


// =================================================================
// random link
var telegram = [
    'https://t.me/Hay88VIP2023',
    'https://t.me/tranquang188',
    'https://t.me/Tambang4',
    'https://t.me/linhlinh78900',
    'https://t.me/yenyen1110',
    'https://t.me/thuthuycute11',
    'https://t.me/bbngoc206',
    'https://t.me/kha1886',
    'https://t.me/lanhuong257',
    'https://t.me/bossnhutminh999',
    'https://t.me/hanhappy96',
    'https://t.me/diemmy10',
    'https://t.me/Bthanh1',
    'https://t.me/Viet_hoang68',
    'https://t.me/anh_long98',
    'https://t.me/tieuvibe',
    'https://t.me/Single989888888',
    'https://t.me/nhalinhhay88',
    'https://t.me/gialinhHAY88',
    'https://t.me/tuantienle113'
];

function randomTlg() {
    var i = parseInt(Math.random() * telegram.length);
    location.href = telegram[i];
}

// zalo random
var zalo = [
    'https://zalo.me/g/wzlgcw201',
    'https://zalo.me/g/mtwifk462',
    'https://zalo.me/g/ojucae708'
]

function randomZalo() {
    var i = parseInt(Math.random() * zalo.length);
    location.href = zalo[i];
}