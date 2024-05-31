// !INITIAL AOS
AOS.init();

let slidebar = document.querySelector('nav.nav')
let bars = document.querySelector(".bars")
bars.addEventListener('click' , function() {
    this.classList.toggle('active');
    slidebar.classList.toggle('active');
})
document.addEventListener('click',function(e) {
    if(e.target.className != bars.className && e.target.className != slidebar.className) {
        bars.classList.remove('active');
        slidebar.classList.remove('active');
    }
})


let links = document.querySelectorAll('nav.nav a');
slidebar.addEventListener('click',function(e) {
    if(e.target.classList.contains("shrink-0")) {
        links.forEach(link => {
            if(link.classList.contains('active')) {
                link.classList.remove('active')
            }
        })
        e.target.classList.add('active')
    }
})
