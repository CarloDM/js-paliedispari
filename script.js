console.log ('ciao')
//  1 dividere le lettere della string 
//  2 verificare se la string letto in un senso è uguale a leggerlo nel senso opposto
// 3 ma come piu nello specifico?---uhm..
// dividere la string dentro 

// ci vuole un ciclo  per verificare lettera per lettera

// let parola = prompt();

// console.log('la parola inserita è ', parola);


// function palidroma(parolaV){
  
//   let parolaFor = [];
//   let parolaInv = [];

//   for (let i = 0; i < parolaV.length; i++) {

//       parolaFor.push(parolaV[i])
//   }
  
//   for (let i = parolaV.length; i > 0; i--) {
    
//       parolaInv.push(parolaV[i-1])
//   }
  
//   if (parolaFor.toString() === parolaInv.toString()) {
//     console.warn('la parolaV è palidroma')
//     return true;
//   }else{
//     console.warn('la parola non è palidroma')
//     return false;
//   }
// }

// console.log('palidroma', palidroma(parola))


// --------------------------------------------------------------
// ---------------------------------------------------------------


const userChoice = 'dispari';
const userNum = 4;
const cpuNum = Math.floor(Math.random()*5 +1)
console.log(userChoice)
if (userChoice == 'pari'){
    cpuChoice = 'dispari';
}else {
    cpuChoice = 'pari';
}

console.log('utente è',userChoice, userNum);
console.log('cpu è',cpuChoice,cpuNum);

const sum = (userNum + cpuNum) % 2;


if (!sum) {
  console.log('pari')
  if (userChoice == 'pari'){
    console.log('utente vince cpu perde')
  }else{
    console.log('utente perd cpu vince')
  }

}else{
  console.log('dispari')
  if (userChoice == 'dispari'){
    console.log('utente vince cpu perde')
  }else{
    console.log('utente perd cpu vince')    
  }
}