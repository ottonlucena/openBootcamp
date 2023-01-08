const data = {
  name: "Otton",
  lastname: "Lucena",
  age: 27,
  height: 1.72,
  youAreDeveloper: true,
};

const x = data.age;

console.log(x);

const newList = [
  data,
  (data2 = {
    name: "Jose",
    lastname: "Parra",
    age: 25,
    height: 1.69,
    youAreDeveloper: false,
  }),
];

newList.sort((a, b) => a.age - b.age);

console.log(newList);
