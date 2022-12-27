const lista = ["leche", "pan", "azucar", "cafe", "pollo"];

lista.push("Aceite de Girasol");
console.log(lista);

lista.pop("Aceite de Girasol");

console.log(lista);

const peliculasFavoritas = [
  {
    titulo: "Justicia implacable",
    director: "desconocido",
    fecha: 2002,
  },
  {
    titulo: "Busqueda implacable",
    director: "desconocido",
    fecha: 2009,
  },
  {
    titulo: "Jonh Wick",
    director: "desconocido",
    fecha: 2015,
  },
];

console.log(peliculasFavoritas.filter((valor) => valor.fecha > 2010));

const directores = peliculasFavoritas.map((el) => el.director);

const titulos = peliculasFavoritas.map((el) => el.titulo);

console.log(directores.concat(titulos));
