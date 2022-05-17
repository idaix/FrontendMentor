let navMobile = document.getElementById('navMobile')
let getNav = document.querySelector('.get-nav')

getNav.addEventListener('click', ()=>{
    getNav.classList.toggle('active')
    navMobile.classList.toggle('active')
    document.body.classList.toggle('body-to-dark')
})