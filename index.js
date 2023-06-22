// const person = {
//   name: "joao",
//   age: 23,
//   adress: {
//     city: "Curitiba",
//     country: "Brasil",
//   },
// };

// const { city: cidade } = person.adress;
// const { name } = person;

//  <div>
//    <PdfExporter filename="export", content={tabela}/>
//  </div>

// function PdfExporter({ filename, tabela }) {
//   {
//     props.filename;
//   }
// }

// console.log(name, cidade);

const persons = [
  {
    name: "joao",
    age: 23,
    height: 1.8,
  },
  {
    name: "maria",
    age: 18,
    height: 1.8,
  },
  {
    name: "pedro",
    age: 34,
    height: 1.8,
  },
  {
    name: "beatriz",
    age: 26,
    height: 1.8,
  },
];

// lista = [1, 2, 3, 4, 5];
// const retorno = lista.forEach((e) => console.log(e * 2));

idades = persons.map((p) => {
  const { name, age } = p;
  return { name, age };
});

console.log(persons);
console.log(idades);
