//Interfaces vs Type Aliases
interface Item {
  name: string;
}

interface Artist extends Item {
  song: string;
}

type Artist2 = { song: string } & Item;

const artist: Artist = { name: "Filip", song: "lala", color: "red" };
const artist2: Artist2 = { name: "Filip", song: "lala" };

//i ovako mozes da spojis interfejse, ali ovako ne mogu type-ovi da se spoje!
interface Artist {
  color: string;
}
