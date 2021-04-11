
// signUpMenu.addEventListener('submit', async (e) => {
//     e.preventDefault()

    // const nameInput = document.querySelector('#name').value 
    // const emailInput = document.querySelector('#email').value
    // const passwordInput = document.querySelector('#password').value
    // console.log(nameInput, emailInput, passwordInput)
//     try {
//         const response = await axios.post('http://localhost:3001/user/create', {
//             name: name,
//             email: email,
//             password: password
//         })
//         console.log(response)
//         const userId = response.data.user.userId
//         console.log(userId)
//         localStorage.setItem('userId', userId)
//         hideAndShow()
//     } catch (error) {
//         // console.log('login-failed')
//     }

//     // hideAndShow()
// })

// loginMenu.addEventListener('submit', (event) => {
//     event.preventDefault()

//     const emailInput = document.querySelector('#email').value
//     const passwordInput = document.querySelector('#password').value
//     console.log(emailInput, passwordInput)

//     hideAndShow()
// })

document.querySelector('.sign-up-menu').addEventListener('submit', async (event) => {
    event.preventDefault()

    const nameInput = document.querySelector('#name').value 
    const emailInput = document.querySelector('#email').value
    const passwordInput = document.querySelector('#password').value
    console.log(nameInput, emailInput, passwordInput)

    document.querySelector('.sign-up').classList.add('hidden')
    document.querySelector('.login').classList.add('hidden')
    document.querySelector('#dictionary').classList.remove('hidden')


    try {
        const response = await axios.post('http://localhost:3001/user/create', {
            name: name,
            email: email,
            password: password
        })
        console.log(response)

        const userId = response.data.user.userId
        localStorage.setItem('userId', userId)
    } catch (error) {
        console.log(error)
    }
    
    // document.querySelector('.sign-up').classList.add('hidden')
    // document.querySelector('.login').classList.add('hidden')
    // document.querySelector('#dictionary').classList.remove('hidden')
})