

anime.timeline({loop: true})
    .add({
        targets: '.ml5 .line',
        opacity: [0.5,1],
        scaleX: [0, 1],
        easing: "easeInOutExpo",
        duration: 700
    }).add({
    targets: '.ml5 .line',
    duration: 600,
    easing: "easeOutExpo",
    translateY: (el, i) => (-0.625 + 0.625*2*i) + "em"
}).add({
    targets: '.ml5 .ampersand',
    opacity: [0,1],
    scaleY: [0.5, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
}).add({
    targets: '.ml5 .letters-left',
    opacity: [0,1],
    translateX: ["0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=300'
}).add({
    targets: '.ml5 .letters-right',
    opacity: [0,1],
    translateX: ["-0.5em", 0],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=600'
}).add({
    targets: '.ml5',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
});

ScrollReveal().reveal('.cercle', {
    origin: 'top',
    distance:'80px',
    duration: 2000,
    delay: 500,
    reset: true

});


ScrollReveal().reveal('h5',{
    origin: 'right',
    distance: '150px',
    duration: 3500,
    delay: 100,
    reset: true
});
ScrollReveal().reveal('h2', {
    origin: 'right',
    distance: '150px',
    duration: 3500,
    delay: 100,
    reset: true
});
ScrollReveal().reveal('h1', {
    origin: 'top',
    distance: '150px',
    duration: 4500,
    delay: 200,
    reset: true
});
ScrollReveal().reveal('p', {
    origin: 'left',
    distance: '150px',
    duration: 3500,
    delay: 100,
    reset: true
});
ScrollReveal().reveal('footer', {
    origin: 'top',
    distance: '150px',
    duration: 3500,
    delay: 100,
    reset: true
});
ScrollReveal().reveal('img', {
    origin: 'left',
    distance: '150px',
    duration: 3500,
    delay: 100,
    reset: true
});









var c = document.getElementById('canv');
var $ = c.getContext('2d');
var w = c.width = window.innerWidth;
var h = c.height = window.innerHeight;
var w2 = w* 0.5;
var h2 = h * 0.5;
var ŭ = 0;
var topiary = new branch(80, 0, 0);
var cnt = 0;

function anim(){
    cnt++;
    ŭ-=.5;
    if (cnt%2) {
        draw();
    }
    window.requestAnimationFrame(anim);
}
anim();

function draw() {
    $.save();
    $.clearRect(0, 0, w, h);
    $.translate(w2, h*0.98);
    $.rotate(-Math.PI * 0.5);
    topiary.disp($);
    $.restore();
}

function branch(len, ang, gen){
    this.len = len;
    this.ang = ang;
    this.gen = gen;
    this.limb = [];
    this.sway = 0;
    this.mult = rnd(0.01, 0.1);
    this.spawn = 0;
    this.vel =0;

    if(gen < 10){
        this.limb.push(new branch(len*rnd(0.8, 0.99),
            rnd(0, Math.PI/6), this.gen+1));
        this.limb.push(new branch(len*rnd(0.8, 0.99),
            rnd(0, -Math.PI/6), this.gen+1));
    }

    this.disp = function($){
        this.sway++;
        $.save();
        this.vel *= 0.9;
        var dif = 1-this.spawn;
        this.vel += (dif*0.1);
        this.spawn += this.vel;

        $.strokeStyle = "hsla(" + (ŭ % 360) + ",100%,50%,1)";
        $.lineWidth = 1;
        $.beginPath();
        $.rotate(this.ang + (Math.sin(this.sway*this.mult)*Math.PI/128));
        $.moveTo(0, 0);
        $.lineTo(this.len * this.spawn, 0);
        $.stroke();

        $.translate(this.len * this.spawn, 0);

        if(this.spawn > 0.6){
            for(var i = 0; i < this.limb.length; i++){
                var limb = this.limb[i];
                limb.disp($);
            }
        }
        $.restore();
    };
}

function rnd(min, max){
    return Math.random()*(max - min) + min;
}







let burger = document.getElementById('burger'),
    nav    = document.getElementById('main-nav');


burger.addEventListener('click', function(e){
    this.classList.toggle('is-open');
    nav.classList.toggle('is-open');
});



/* Onload demo - dirty timeout */
let clickEvent = new Event('click');

window.addEventListener('load', function(e) {

    burger.dispatchEvent(clickEvent);

    setTimeout(function(){
        burger.dispatchEvent(clickEvent);

        setTimeout(function(){

        } );
    } );
});





function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " w3-opacity-off";
}




