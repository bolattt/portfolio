
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





async function getWeather(){
    const res = await fetch('http://api.weatherapi.com/v1/current.json?key=18390cd176d247dbaa4215149221403&q=Brooklyn&aqi=no');
    const data = await res.json();
    console.log(data)
    
  }
  
  getWeather()