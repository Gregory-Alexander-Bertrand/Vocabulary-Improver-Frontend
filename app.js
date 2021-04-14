


//////////////////////////////////////////////////
const handleLogout = () => {
    window.localStorage.clear()
    window.location.reload(true)
    window.location.replace('/')
}

document.querySelector('#logout').addEventListener('click', () => {
    handleLogout()
})
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
    document.querySelector('#logout').classList.remove('hidden')
    // document.querySelector('.user-name').classList.remove('hidden')
    document.querySelector('#delete-account').classList.remove('hidden')


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

        const userId = response.data.user.id
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
    document.querySelector('#logout').classList.remove('hidden')
    document.querySelector('#delete-account').classList.remove('hidden')

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
    document.querySelector('#favorite-word').classList.remove('hidden')
    const searchResults = document.querySelector('.look-up').value
    console.log(searchResults)

    const response = await axios.post(`http://localhost:3001/word/search/`, {
        word: searchResults
    })
    // console.log(response.data[0].def[0].sseq[0][0])
    console.log(response.data[1].shortdef[1])

    const userWord = document.querySelector('.word-container')

    
    while (userWord.firstChild){
        userWord.firstChild.remove()
    }

    const choosenWord = document.createElement('h2')
    choosenWord.textContent = searchResults
    userWord.appendChild(choosenWord)

    let wordDate = document.createElement('p')
    wordDate.textContent = response.data[1].shortdef
    userWord.appendChild(wordDate)
    

    // const storedWords = document.querySelector('.stored-words')
    // const savedWord = document.createElement('p')
    // savedWord.textContent = searchResults
    // storedWords.appendChild(savedWord)

    
})

////////////////////////////////////////////////
// const saveWord = document.querySelector('#save')
// // console.log(saveWord)

// saveWord.addEventListener('click', async (event) => {
//     event.preventDefault()
//     const word = document.querySelector('.searchBar')
//     console.log(word)
//     try {
//         let wordId = localStorage.setItem('wordId')
//     } catch (error) {
//         console.log(res)
//     }
// })

const favoriteMenu = document.querySelector('.favorite-menu')
console.log(favoriteMenu)

favoriteMenu.addEventListener('submit', async (event) => {
    event.preventDefault()

    const wordName = document.querySelector('#word-name').value
    console.log(wordName)
    const wordNotes = document.querySelector('#word-notes').value
    console.log(wordNotes)
    // const storedWords = document.querySelector('.stored-words')
    // const savedWord = document.createElement('div')
    // savedWord.className = 'my-class'
    // savedWord.textContent = wordName
    // storedWords.appendChild(savedWord)
    // const savedNote = document.createElement('div')
    // savedNote.textContent = wordNotes
    // storedWords.appendChild(savedNote)
    // console.log(savedNote)


    const savedNotes = document.querySelector('.stored-words');
    const output = `<ul class="note-container">
    <li class="note">${wordName}</li>
    <li class="note">${wordNotes}</li></ul>`;

    savedNotes.insertAdjacentHTML("beforeend", output);
   
})

document.querySelector('#delete-account').addEventListener('click', async() => {
    

    try {
        const id = localStorage.getItem('logedInUserId')

        const response = await axios.delete(`http://localhost:3001/user/${id}`, {
        })
        console.log(response)
        if (response.status === 200) {
            localStorage.clear()
        }

    } catch (error) {
        console.log(error)
    }
})

