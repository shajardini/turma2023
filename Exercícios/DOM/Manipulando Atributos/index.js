const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function(){
    input.value = input.value === ''? 'Olá mundo!': ''//pega o valor em tempo real
    console.l(input.getAttribute('value'))//pega o valor do html, pré definido
})

document.getElementById('type').addEventListener('click', function(){
    // input.type = input.type !== 'radio'? 'radio':'text'
    input.setAttribute('type', 'radio')
})

document.getElementById('placeholder').addEventListener('click', function(){
    input.placeholder = 'Digite algo '
})

document.getElementById('disable').addEventListener('click', function(){
    input.setAttribute('disabled', !input.disabled)
})

document.getElementById('data').addEventListener('click', function(){
    const data = input.dataset.something
    console.log('O valor do atributo data-something é:  ' + data)
    input.dataset.something = "Algum outro valor"
    console.log('O valor do atributo data-something agora é: ' + input.dataset.something)
})