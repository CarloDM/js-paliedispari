console.log ('ciao')
//  1 dividere le lettere della string 
//  2 verificare se la string letto in un senso è uguale a leggerlo nel senso opposto
// 3 ma come piu nello specifico?---uhm..

let parola = prompt();

console.log('la parola inserita è ', parola);

// dividere la string dentro 

// ci vuole un ciclo  per verificare lettera per lettera

function palidroma(parolaV){
  
  let parolaFor = [];
  let parolaInv = [];

  for (let i = 0; i < parolaV.length; i++) {

      parolaFor.push(parolaV[i])
  }
  
  for (let i = parolaV.length; i > 0; i--) {
    
      parolaInv.push(parolaV[i-1])
  }
  
  if (parolaFor.toString() === parolaInv.toString()){
    console.warn('la parolaV è palidroma')
    return true;
  }else{
    console.warn('la parola non è palidroma')
    return false;
  }
  
}

console.log('palidroma', palidroma(parola))