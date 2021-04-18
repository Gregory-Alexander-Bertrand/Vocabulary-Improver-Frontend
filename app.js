


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
let currentUserId = ''
document.querySelector('.login-menu').addEventListener('submit', async (event) => {
    event.preventDefault()

    const emailInput = document.querySelector('#email-login').value
    const passwordInput =document.querySelector('#password-login').value
    console.log(emailInput, passwordInput)

    const logedInUser = await axios.post('http://localhost:3001/user/login', {
        email: emailInput,
        password: passwordInput
    })
    console.log(`LOGEDINUSER`, logedInUser)
    console.log(`LOGEDINUSER.DATA`, logedInUser.data)
    console.log(`LOGEDINUSER.DATA.NAME`, logedInUser.data.name)
    console.log(`LOGEDINUSER.DATA.ID`, logedInUser.data.id)
    currentUserId = logedInUser.data.id
    console.log(`CURRENTUSERID`, currentUserId)
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

    const getAllwords = await axios.get('http://localhost:3001/word/' + currentUserId)
    console.log(`ALLWORDS`, getAllwords)
    console.log( `ALLWORDS.DATA`,getAllwords.data)
    console.log(`ALLWORDS.DATA.WORDS`,getAllwords.data.words)
    console.log(`ALLWORDS.DATA.WORDS[0]`,getAllwords.data.words[0])
    console.log(`ALLWORDS.DATA.WORDS[0].name`,getAllwords.data.words[0].name)
    console.log(`ALLWORDS.DATA.WORDS[0].notes`,getAllwords.data.words[0].notes)

    const allWords = getAllwords.data.words 
    // const wordHolder = document.querySelector('#word-container').
    const wordArray = []
    for (i= 0;  i < allWords.length; i++) {
        // wordHolder.appendChild(allWords.name)
        wordArray.push(allWords[i].name)
    }
    console.log( `WORDARRAY`,wordArray)
    document.querySelector('#saved-words').innerHTML = wordArray

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
    console.log(`POST ROUTE FOR WORDS CURRENTUSERID`,currentUserId)
    const sentWord = axios.post(`http://localhost:3001/word/create`, {
        name: wordName,
        notes: wordNotes,
        userId: currentUserId
    })

    // const storedWords = document.querySelector('.stored-words')
    // const savedWord = document.createElement('div')
    // savedWord.className = 'my-class'
    // savedWord.textContent = wordName
    // storedWords.appendChild(savedWord)
    // const savedNote = document.createElement('div')
    // savedNote.textContent = wordNotes
    // storedWords.appendChild(savedNote)
    // console.log(savedNote)


    const savedNotes = document.querySelector('.word-storage');
    const output = `<ul class="note-container">
    <li class="note">${wordName}</li>
    <li class="note">${wordNotes}</li></ul>`;

    savedNotes.insertAdjacentHTML("beforeend", output);
   
})

document.querySelector('#delete-account').addEventListener('click', async() => {
    document.querySelector('#user-welcome').classList.add('hidden')
    document.querySelector('#goodbye-user').classList.remove('hidden')
    
    const goodbyeUser = document.querySelector('#goodbye-user')
    const goodbyeMessage = document.createElement('h1')
    goodbyeMessage.innerHTML = 'Thank you for visiting, comeback soon'
    goodbyeUser.appendChild(goodbyeMessage)

    try {
        const id = localStorage.getItem('logedInUserId')
        console.log(id)

        const response = await axios.delete(`http://localhost:3001/user/${id}`, {
        })
        console.log(response)
        if (response.status === 200) {
            localStorage.removeItem('logedInUserId')
        }

    } catch (error) {
        console.log(error)
    }
})

