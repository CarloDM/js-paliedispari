console.log ('ciao')
//  1 dividere le lettere della string 
//  2 verificare se la string letto in un senso è uguale a leggerlo nel senso opposto
// 3 ma come piu nello specifico?---uhm..

let parola = prompt();
let parolaFor = [];
let parolaInv = [];

console.log('la parola inserita è ', parola);

// dividere la string dentro 

// ci vuole un ciclo while per verificare lettera per lettera

function palindroma(parola){
}

for (let i = 0; i < parola.length; i++) {

    console.log('for',parola[i])
    parolaFor.push(parola[i])
  
}

console.log(parola.length)

for (let i = parola.length; i > 0; i--) {
  
    console.log('inv',parola[i-1])
    parolaInv.push(parola[i-1])
}

console.log('parolafor',parolaFor.toString())
console.log('parolainv',parolaInv.toString())


if (parolaFor.toString() === parolaInv.toString()){
  console.warn('la parola è palindroma')
}else{
  console.warn('la parola non è palindroma')
}