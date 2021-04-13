


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
    currentUser.textContent = `Welcome, ${nameInput}`
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
    currentUser.innerHTML = ` welcome, ${emailInput}`
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
    document.querySelector('#saved-words').classList.remove('hidden')
    const searchResults = document.querySelector('.look-up').value
    console.log(searchResults)

    const response = await axios.post(`http://localhost:3001/word/search/`, {
        word: searchResults
    })
    console.log(response)

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

    // const response = await axios.get(`https://dictionaryapi.com/api/v3/references/collegiate/json/"+word+"?key=ac3df2b2-fb26-4c50-9822-45655d18ed94`)
    // console.log(response.data)
})

////////////////////////////////////////////////



// console.log(fetch('https://dictionaryapi.com/api/v3/references/collegiate/json/"+word+"?key=ac3df2b2-fb26-4c50-9822-45655d18ed94'))






// document.querySelector('#searchBtn').addEventListener('submit', async(event) => {
//     event.preventDefault()

//     try {
//         const searchInput = document.querySelector('.searchBar').value
//         const response = await axios.get(`http://localhost:3001/word/findAll/${searchInput}`)
//         console.log(response.data)
//     } catch (error) {
//         console.log(error)
//     }
// })