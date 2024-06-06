let numero = document.getElementById("numero")
let form = document.getElementById("btn")
let contador = document.getElementById("contador")
let dicasP = document.getElementById("dicas-p")
let dicaDiv = document.getElementById("divDica")
let novoItem = document.createElement("li")    
let novoP = document.createElement("p")
let novoButton = document.createElement("div")

$('#numero').mask('00');

let num2 = 3

let numeroResultado = numero.value

const num = Math.floor(Math.random() * (10 - 0 + 1) + 0)
console.log (num)


form.addEventListener('click', function(e){
        e.preventDefault()

        aviso()

        if (numero.value == num){
            window.location.reload()
        }

        InputForm()

        botaoReset()

    })

function InputForm(){
    let numeroResultado = numero.value

    num2 = num2 - 1

    contador.innerHTML = `<p>Número de tentativas: ${num2} </p>`

    if (numeroResultado == num){
        alert("Parabéns, você acertou")
    } else if(num2 == 0 ){
        alert("Suas tentativas acabaram...")
        document.getElementById("btn").disabled=true;
    }

    console.log(numeroResultado)

    dicas()

    numero.value=""
}

function dicas(){
    let numeroResultado = numero.value

    let novoP = document.createElement("p")

    if (numeroResultado < num) {
        dicasP.innerHTML = `<p>Dica: o numero é maior que ${numeroResultado}</p>`
        novoP.innerHTML = `<p> num > ${numeroResultado};</p>`
        novoItem.append(novoP)
        dicaDiv.append(novoItem)
            } 
        else if (numeroResultado > num){
            dicasP.innerHTML = `<p>Dica: o numero é menor que ${numeroResultado}</p>`
            novoP.innerHTML = `<p> num < ${numeroResultado};</p>`
            novoItem.append(novoP)
            dicaDiv.append(novoItem)
    
    }
}

function aviso(){
    let numeroResultado = numero.value
    try{
        if (numeroResultado > 10){
            throw new Error("Você digitou um numero maior do que 10")
        }
    }
    catch(error){
        alert(error.message)
    }
}

function botaoReset(){
    if (num2 == 0){
        novoButton.innerHTML = "<button id='buttonReset' type = 'submit' >Tentar de novo</button>"
        dicaDiv.append(novoButton)
    }

}