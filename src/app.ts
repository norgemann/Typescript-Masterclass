//“Pick” Mapped Type
interface Person {
  name: string;
  age: number;
}

type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

const person: Pick<Person, "name"> = {
  name: "Todd"
};
