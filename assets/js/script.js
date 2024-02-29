let inputCheck = document.querySelector('#modo-noturno')
let elemento = document.querySelector('body')

inputCheck.addEventListener('click', ()=>{
    let modo = inputCheck.checked ? 'dark' : 'light'

    elemento.setAttribute('data-bs-theme', modo)
})