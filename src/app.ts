//“typeof” Type Queries
//“keyof” Index Type Queries
//“keyof”, Generics and Lookup Types

const person = {
  name: "Marko",
  age: 33,
  job: true
};

const anotherPerson: Person = {
  name: "Ivan",
  age: 28,
  job: true
};

type Person = typeof person;
type PersonKeys = keyof Person;
type PersonTypes = Person[PersonKeys];

function getObjProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

console.log(getObjProperty(anotherPerson, 'job'));
