const nota1 = documents.getElementById("nota1")
const nota2= documents.getElementById("nota2")

const button= documents.getElementById("button")

function calculadormedia(){
    const valornota1 = Number(nota1.value)
    const valornota2 = Number(nota2.value)
   
    const media = (valornota1 + valornota2)/2

    resultado.innerText = +`A media e ${media}`
 }

 button.addEventListener("click", calculadormedia)