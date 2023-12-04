function useLigthTheme(){
   document.body.style.color='#212529';
   document.body.style.backgroundColor='#f1f5f9';
}

function useDarkTheme(){
    document.body.style.color='#f1f5f9'
    document.body.style.backgroundColor='#212529'
}

function switchTheme(){
    document.body.classList.toggle('is-light')/*Como já começa nessa, ao clicar no botão ele vai selecionar a outra*/
    document.body.classList.toggle('is-dark')
}

document.getElementById('lightbtn').addEventListener('click', useLigthTheme)
document.getElementById('darkbtn').addEventListener('click', useDarkTheme)
document.getElementById('switchbtn').addEventListener('click', switchTheme)

