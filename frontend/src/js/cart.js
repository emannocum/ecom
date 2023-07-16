const BtnLogout = document.querySelector('#btnLogout')

BtnLogout.addEventListener('click' , () =>{
    localStorage.removeItem('sessionID')
    window.location.href = "login.html"
})