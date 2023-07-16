const FormLogin = document.querySelector('#FrmLogin')

const email = document.querySelector('#email')
const password = document.querySelector('#password')

FormLogin.addEventListener('submit', async (event) =>{
    event.preventDefault()

    const data = {'email': email.value , password: password.value}
    
    const request = await fetch ('http://localhost:3000/authenticate', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    })

    const response = await request.json()
    console.log(response)
    console.log(response)
    if(response.auth === true){
        localStorage.setItem('sessionID', response.content._id)
        location.reload()
    }else{
        toastr.error('Login Failed', 'Wrong email or password!')
    }
})