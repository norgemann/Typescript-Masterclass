//“Readonly” Mapped Type

interface Person {
  name: string;
  age: number;
}

const person: Person = {
  name: "Marko",
  age: 33,
};

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

function freeze<T>(obj: T): MyReadonly<T> {
  return Object.freeze(obj);
}

const frozenPerson = freeze(person);
