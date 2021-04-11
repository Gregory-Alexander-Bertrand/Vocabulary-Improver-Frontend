

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

document.querySelector('.login-menu').addEventListener('submit', async (event) => {
    event.preventDefault()

    const emailInput = document.querySelector('#email').value
    const passwordInput =document.querySelector('#password').value

    document.querySelector('.sign-up').classList.add('hidden')
    document.querySelector('.login').classList.add('hidden')
    document.querySelector('#dictionary').classList.remove('hidden')

    try {
        const response = await axios.post('http://localhost:3001/user/login', {
            email: emailInput,
            password: passwordInput
        })
        console.log(response)

        const logedInUserId = response.data.user.id
        localStorage.setItem('logedInUserId', logedInUserId)
        console.log(userId)

    } catch (error) {
        console.log(error)
    }
})

document.querySelector('.searchBar').addEventListener('submit', async (event) => {
    event.preventDefault()
    const searchResults = document.querySelector('.look-up').value
    console.log(searchResults)

    const userWord = document.querySelector('.word-container')
    const choosenWord = document.createElement('h1')
    choosenWord.textContent = searchResults
    userWord.appendChild(choosenWord)

    try {
        const searchBar = document.querySelector('.look-up').value
        const res = await axios.post(`http://localhost:3001/word/search/${searchBar}`)
        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
})