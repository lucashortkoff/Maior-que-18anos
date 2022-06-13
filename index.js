function calcular(){
let num = document.getElementById('num').value
let contmaior = 0
let contmenor = 0
num = num.split(" ")

for(let i = 0; i < num.length ; i++){

if (num[i] < 18){

    contmaior++
}else{
    contmenor++


}



}

alert(`As idades ${num} , sao ${contmaior} maiores que 18 e  ${contmenor} menores que 18`)






}