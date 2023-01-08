const fechaHoy = new Date();

console.log(fechaHoy);

const fechaNacimiento = new Date("Jan 05, 1995");

console.log(fechaNacimiento);

let comparacion = fechaHoy.getTime() > fechaNacimiento.getTime();

console.log(comparacion);

let dia = fechaNacimiento.getDate();
console.log(dia);

let mes = fechaNacimiento.getMonth() + 1;

console.log(mes);

let anio = fechaNacimiento.getFullYear();

console.log(anio);
