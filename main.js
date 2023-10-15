//dividindo números
alert("Digite dois números para usarmos a divisão")
let num1 = parseFloat(prompt("Digite o primeiro número:"))
let num2 = parseFloat(prompt("Digite o segundo número:"))

try{
    if (isNaN(num1) || isNaN(num2)) {
        throw new Error("Digite números válidos");
      }
    
      if (num2 === 0) {
        throw new Error("Divisão por zero não é possível");
      }
    
      const resultado = num1 / num2;
      alert(`O resultado da divisão é: ${resultado}`);
}catch(error){
    console.log(error.message)
}finally{
    alert("Essa é a calculadora que só divide, tcharam!")
}
