const FormRegister = document.querySelector('#FormRegister')
const Firstname = document.querySelector('#firstname')
const Lastname = document.querySelector('#lastname')
const Email = document.querySelector('#email')
const Password = document.querySelector('#password')
const ConfirmPassword = document.querySelector('#confirm_password')


const ResetFields = () =>{
    Firstname.value = ''
    Lastname.value = ''
    Email.value = ''
    Password.value = ''
    ConfirmPassword.value = ''
}
FormRegister.addEventListener('submit', async (event) =>{
    event.preventDefault()

    if(Password.value === ConfirmPassword.value){
        const data = {'firstname': Firstname.value, 'lastname': Lastname.value, 'email': Email.value, 'password': Password.value}

        try{
            const request = await fetch ('http://localhost:3000/user', {
                method:'POST',
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })

            const response = await request.json()
            console.log(response)
            if(response.requestStatus === 'success'){
                toastr.success('Registration completed', '')
                ResetFields()
            }else{
                toastr.error('Registration failed', '')
                ResetFields()
            }
        }catch(e){

        }
    }else{
        toastr.error('Register Failed', 'Password and Confirm Password does not match!');
        // ResetFields()
    }
})