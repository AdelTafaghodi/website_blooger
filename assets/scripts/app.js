const toggleBtn = document.getElementById("toggle-btn");
const header = document.querySelector('header')
const btnGoUp = document.querySelector('footer .go-up button')

const toggleActive = () => {
    toggleBtn.classList.toggle('active');
}

const toggleHeaderHandler = () =>{
    header.classList.toggle('header-toggle')
}

const toggleMenu = () =>{
    toggleActive();
    toggleHeaderHandler();
}

const goUp = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
   
}

toggleBtn.addEventListener('click' , toggleMenu);
btnGoUp.addEventListener('click' , goUp);