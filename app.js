


//////////////////////////////////////////////////

// const { response } = require("express")

///////lines 3-39 operate the sign-up form.
document.querySelector('.sign-up-menu').addEventListener('submit', async (event) => {
    event.preventDefault()
    console.log('button hit')
    const nameInput = document.querySelector('#name').value 
    const emailInput = document.querySelector('#email').value
    const passwordInput = document.querySelector('#password').value
    console.log(nameInput, emailInput, passwordInput)

    document.querySelector('.sign-up').classList.add('hidden')
    document.querySelector('.login').classList.add('hidden')
    document.querySelector('#dictionary').classList.remove('hidden')
    // document.querySelector('.user-name').classList.remove('hidden')


    document.querySelector('#user-welcome').classList.remove('hidden')

    const welcomeUser = document.querySelector('#user-welcome')
    const currentUser = document.createElement('h1')
    currentUser.textContent = emailInput
    welcomeUser.appendChild(currentUser)

    try {
        const response = await axios.post('http://localhost:3001/user/create', {
            name: nameInput,
            email: emailInput,
            password: passwordInput
        })
        console.log(response)

        const userId = response.data.user.userId
        console.log(userId)
        localStorage.setItem('userId', userId)
    } catch (error) {
        console.log(error)
    }
    
})
///////////////////////////////
//lines 40-80 operate the login form.
const emailInput = document.querySelector('#email-login').value
const passwordInput =document.querySelector('#password-login').value

document.querySelector('.login-menu').addEventListener('submit', async (event) => {
    event.preventDefault()

    const emailInput = document.querySelector('#email-login').value
    const passwordInput =document.querySelector('#password-login').value
    console.log(emailInput, passwordInput)

    document.querySelector('.sign-up').classList.add('hidden')
    document.querySelector('.login').classList.add('hidden')
    document.querySelector('#dictionary').classList.remove('hidden')
    document.querySelector('#user-welcome').classList.remove('hidden')

    const welcomeUser = document.querySelector('#user-welcome')
    const currentUser = document.createElement('h1')
    currentUser.innerHTML = ` welcome ${emailInput}`
    welcomeUser.appendChild(currentUser)

    // try {
        const response = await axios.post('http://localhost:3001/user/login', {
            email: emailInput,
            password: passwordInput

        })
        console.log(emailInput, passwordInput)
        console.log(response)
        

        const logedInUserId = response.data.id
        localStorage.setItem('logedInUserId', logedInUserId)
        

    // } catch (error) {
    //     console.log(error)
    // }
})
//////////////////////////////////////////////
//lines 82-99 operate the search bar.
document.querySelector('.searchBar').addEventListener('submit', async (event) => {
    event.preventDefault()
    const searchResults = document.querySelector('.look-up').value
    console.log(searchResults)
    const userWord = document.querySelector('.word-container')

    while (userWord.firstChild){
        userWord.firstChild.remove()
    }

    const choosenWord = document.createElement('h2')
    choosenWord.textContent = searchResults
    userWord.appendChild(choosenWord)
    

    const storedWords = document.querySelector('.stored-words')
    const savedWord = document.createElement('p')
    savedWord.textContent = searchResults
    storedWords.appendChild(savedWord)

    // try {
    //     const searchBar = document.querySelector('.look-up').value
    //     const res = await axios.post(`http://localhost:3001/word/search/${searchBar}`)
    //     console.log(res.data)
    // } catch (error) {
    //     console.log(error)
    // }
})

////////////////////////////////////////////////

// choosenWord.addEventListener('click', () => {
//     console.log('click')
// })


// fetch('https://api.dictionaryapi.dev/api/v2/entries/en_US/hello').then((response) => {
//     response.json().then((json) => {
//         console.log(json)
//     })
// })

// const hello = document.querySelector('#word-container')

// document.querySelector('.getHello').addEventListener('click', () => {
//     console.log('click')

//     fetch('https://api.dictionaryapi.dev/api/v2/entries/en_US/hello').then((response) => {
//     response.json().then((json) => {
//         console.log(json.object)

//         hello.innerHTML = json.object
//     })
// })
// })