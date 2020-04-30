//Object literal

const myObj = {
  myMethod() {
    console.log("myMethod", this);
  },
  myArrowMethod: () => {
    console.log("myArrowMethod", this);
  },
};

//   myObj.myMethod();
//   myObj.myArrowMethod();





//Exploring “this” with .call, .apply and .bind

// function myFunc(text1: string, text2: string) {
//   console.log("myFunc", this, text1, text2);
// }

//rest parameter
function myFunc(...text: string[]) {
  console.log("myFunc", this, text);
}

//myFunc("ABC", "DEF");
const bindFunction = myFunc.bind(myObj);
bindFunction("ABC", "DEF");
bindFunction("123", "456");
bindFunction("ABC", "DEF");
myFunc.call(myObj, "ABC", "DEF");
myFunc.apply(myObj, ["ABC", "DEF"]);

// const myArrowFunc = () => {
//   console.log("myArrowFunc", this);
// };

//myArrowFunc();











//Classes

// class MyClass {
//   myClassMethod() {
//     console.log("My Class Method", this);
//   }

//   myArrowClassMethod = () => {
//     console.log("myArrowClassMethod", this);
//   };
// }

// const myClass = new MyClass();
// myClass.myClassMethod();
// myClass.myArrowClassMethod();
