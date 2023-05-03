function sinParamt() {
  return true;
}

console.log(sinParamt());

const promise = new Promise((resol, reject) => {
  setTimeout(() => {
    resol();
  }, 5000);
});

promise.then(console.log(`Soy una promesa async`));

function* generarID() {
  let id = 0;
  while (true) {
    id++;
    if (id === 10) return id;
    yield id;
  }
}

const GEN = generarID();

console.log(GEN.next());
console.log(GEN.next());
console.log(GEN.next());
console.log(GEN.next());
console.log(GEN.next());
console.log(GEN.next());
console.log(GEN.next());
console.log(GEN.next());
console.log(GEN.next());
console.log(GEN.next());
