//“typeof” Type Queries

const person = {
  name: "Marko",
  age: 33,
};

type Person = typeof person;

const anotherPerson: Person = {
  name: "Ivan",
  age: 28,
};
