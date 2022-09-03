// DOM ELEMENTS
const mainPage = document.querySelector('.main-page');
const loginPage = document.querySelector('.login-page');
const middleContent = document.querySelector('.middle-content');
const btnTop = document.querySelector('.btn-top');
const newsFeedPage = document.querySelector('.feeds-page')
const modalX = document.querySelector('.login-modal i');
const loginFormButton = document.querySelector('.login-form-btn');
const loginModal = document.querySelector('.login-modal');
const postButton = document.querySelector('.post-btn');
const modalWrapper =  document.querySelector('.modal-wrapper');
const modal =  document.querySelector('.modal');
const postModalX = document.querySelector('.modal-header i');
const modalPostBtn = document.querySelector('.modal-header button');
const modalFooterPlus = document.querySelector('.modal-footer span');
const modalInput = document.querySelector('.modal-input');
const user = document.querySelector('.user');
const sidebar = document.querySelector('.sidebar');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
const sidebarX = document.querySelector('.sidebar-header i');
const toggle = document.querySelector(".toggle");
const circle = document.querySelector(".circle");


/******************************************************* */
/******************************************************* */

// Main page
const goToLoginPage = () => {
    mainPage.style.display = 'none';
    loginPage.style.display = 'grid';
}

middleContent.addEventListener('click', (e) => //instead of adding events to signup and login button, we will wrap event to their parent element
{
    if (e.target.classList[1] === 'main-btn')
    {
        goToLoginPage();
    }
    console.log(e.target.classList[1]); //use target.classList to get list of elements that are being clicked 

})

btnTop.addEventListener('click', () => {
    const inputUserInfo = document.querySelector('.user-info');
    const inputPassword = document.querySelector('.password');
    const loginModal = document.querySelector('.login-modal');

    if (inputUserInfo.value !== "" && inputPassword.value !== ""){
        mainPage.style.display = 'none';
        newsFeedPage.style.display = 'block';
    } else {
        goToLoginPage();
        loginModal.style.display = 'block';
    }
})

modalX.addEventListener('click', () => {
    loginModal.style.display = 'none'
})

loginFormButton.addEventListener('click', () => {
    const inputUserInfo = document.querySelector('.login-user-info');
    const inputPassword = document.querySelector('.login-password');    
    
    if (inputUserInfo.value !== '' && inputPassword.value !== ''){
        loginPage.style.display = 'none';
        newsFeedPage.style.display = 'block';
    } else {
        loginModal.style.display = 'block';
    }
})

// News feed page
// Post modal
postButton.addEventListener('click', ()=>{
    
    // change visibility of modal wrapper to be not hidden
    modal.style.display = 'block';
    modalWrapper.classList.add('modal-wrapper-display') //run the CSS instructions in this class
})

const changeOpacity = (x) =>{
    modalPostBtn.style.opacity = x;
    modalFooterPlus.style.opacity = x;
}
postModalX.addEventListener('click', ()=>{
    modal.style.display = 'none';
    modalWrapper.classList.remove('modal-wrapper-display');

    if (modalInput.value !== ""){
        modalInput.value = "";
        changeOpacity(.5);
    }
})

modalInput.addEventListener('keypress', (e)=>{
    if (e.target.value !== ""){
        changeOpacity(1);
    }
})

modalInput.addEventListener('blur', (e)=>{
    if (e.target.value === ''){
        changeOpacity(0.5);
    }
})

// sidebar
user.addEventListener('click', ()=>
{
    sidebar.classList.add('sidebar-display');
    sidebarWrapper.classList.add('sidebar-wrapper-display');
})

sidebarX.addEventListener('click', ()=>{
    sidebar.classList.remove('sidebar-display');
    sidebarWrapper.classList.remove('sidebar-wrapper-display');
})

// dark mode
const darkElements1 = document.querySelectorAll(".dark-mode-1");
const darkElements2 = document.querySelectorAll(".dark-mode-2");
const lighTexts = document.querySelectorAll('.light-text');
const borders = document.querySelectorAll('.border');

toggle.addEventListener("click", () => {
  console.log("clicked!");
  circle.classList.toggle("move"); /*add move class to circle classlist*/
  Array.from(darkElements1).map(darkEl1 => darkEl1.classList.toggle("dark-1")); 
  Array.from(darkElements2).map(darkEl2 => darkEl2.classList.toggle("dark-2"));
  Array.from(lighTexts).map(lighText => lighText.classList.toggle('light'));
  Array.from(borders).map(border => border.classList.toggle('border-color'));
//   Array.from -> converts the NodeList darkElements1 into an iterable array
// "map" is similar toa for loop - iterates over all elements in the list and performs the action
//darkEl1 is the iterator in the array - it represents each item in the array
// therefore these two lines of code add the dark-1 / dark-2 class to the classlist of each item that needs changing
});