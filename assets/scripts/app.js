const toggleBtn = document.getElementById("toggle-btn");
const header = document.querySelector('header')


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

toggleBtn.addEventListener('click' , toggleMenu);