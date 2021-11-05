// alert('ciao');

// chilometri
let chilometri = prompt('Quanti chilometri vuoi percorrere?');
console.log('chilometri:'+ chilometri);

if (isNaN(chilometri)){
    console.log('Non hai inserito un numero')
}


// età
let eta = prompt('Quanti anni hai?');
console.log('età:'+ eta);

if (isNaN(eta)){
    console.log('Non hai inserito un numero')
}


// prezzo della tratta
let prezzoTratta = chilometri * 0.21;

if (eta < 18) {
    console.log (prezzoTratta - prezzoTratta * 20 / 100);
  } else if (eta > 65) {
    console.log(prezzoTratta - prezzoTratta * 40 / 100);
  } else {
    console.log (prezzoTratta);
  }