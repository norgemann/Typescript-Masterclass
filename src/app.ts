//Numeric Enums and Reverse Mappings

const enum Sizes {
  Small,
  Medium,
  Large,
}
let selected: Sizes = Sizes.Small;

function updateSize(size: Sizes): void{
    selected = size;
}


updateSize(Sizes.Large);

console.log(selected)