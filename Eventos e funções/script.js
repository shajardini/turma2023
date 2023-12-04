function saudacao(){
    let nomeUsuario = window.document.getElementById('txtnome').value

    window.document.getElementById('area').innerText = 'Seja bem vindo(a) ' + nomeUsuario + '!'
}

function somar(){
   let numero1=  Number(document.getElementById('n1').value)
   let numero2 = Number(document.getElementById('n2').value)
   let soma = numero1 + numero2

   document.getElementById('resultado').innerText = soma

}