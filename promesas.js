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

const MI_PROMESA = new Promise((resolve, reject) => {
  const i = Math.floor(Math.random() * 2);
  console.log(i);
  if (i !== 0) {
    resolve();
  } else {
    reject();
  }
});

MI_PROMESA.then(() => console.log(`se ejecuto`))
  .catch(() => console.log(`Error`))
  .finally(() => console.log(`Me ejecuto siempre`));
