let num;
let sum = 0;

do {
  num = prompt("Inserisci un numero a 4 cifre");
  if(!(num>999 && num<10000)){
    alert("Il numero che hai inserito non è di 4 cifre, riprova")
  }
}while(!(num>999 && num<10000))

arrNum = num.split("");

for(let i=0;i<arrNum.length;i++)
{
  sum += parseInt(arrNum[i]);
}

console.log(sum)