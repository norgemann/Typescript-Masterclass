//Function Overloads
function reverse(something: string): string;
function reverse<T>(arr: T[]): T[];

function reverse<T>(something: string | T[]): string | T[] {
  if (typeof something === "string") {
    return something.split("").reverse().join("");
  } else return something.slice().reverse();
}

const reversed = reverse("Pepperoni");
const reversed2 = reverse([1,2,3]);

console.log(reversed, reversed2);
