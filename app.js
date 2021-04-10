console.log('test12321')

document.querySelector('.sign-up-menu').addEventListener('click', (e) => {
    e.preventDefault()
    document.querySelector('.login-menu').classList.add('hidden')
})