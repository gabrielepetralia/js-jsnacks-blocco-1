const dispari = []

for(i=0 ; i<6 ; i++)
{
  const num = prompt("Inserisci un numero");
  if(num%2){
    dispari.push(num);
  }
}

console.log(dispari)
