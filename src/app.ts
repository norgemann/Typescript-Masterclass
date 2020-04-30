//“Required” Mapped Type, +/- Modifiers
interface Person {
    name: string;
    age?: number;
  }
  
  type MyRequired<T> = {
    [P in keyof T]-?: T[P]
  };
  
  function printAge(person: MyRequired<Person>) {
    return `${person.name} is ${person.age}`;
  }
  
  const person: MyRequired<Person> = {
    name: 'Todd',
    age: 27
  };
  
  const age = printAge(person);

  console.log(age)
