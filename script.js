
// add active class to nav 
const navlinks = document.getElementsByClassName('nav-link')
for(let link of navlinks){
    link.addEventListener('click',() => {
        const current = document.getElementsByClassName('active')
        console.log(current)
        current[0].classList.remove('active')
        link.classList.add('active')
    })
}

// scroll top button
const scrollUp = document.querySelector('.scroll-up');
scrollUp.addEventListener('click',()=> {
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
})

// initialize AOS library 
AOS.init();


