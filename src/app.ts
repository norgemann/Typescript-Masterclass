//Numeric Enums and Reverse Mappings

enum Sizes {
  Small,
  Medium,
  Large,
}
enum Sizes {
  ExtraLarge = 3,
}

console.log(Sizes.Small);
console.log(Sizes.ExtraLarge);
console.log(Sizes[0]);
console.log(Sizes[Sizes.Small]);
