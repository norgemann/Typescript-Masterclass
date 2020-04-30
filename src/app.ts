//A “this” Keyword Primer

function myFunc() {
  console.log("myFunc", this);
}

myFunc();

const myArrowFunc = () => {
  console.log("myArrowFunc", this);
};

myArrowFunc();

//Object literal

const myObj = {
  myMethod() {
    console.log("myMethod", this);
  },
  myArrowMethod: () => {
    console.log("myArrowMethod", this);
  },
};

myObj.myMethod();
myObj.myArrowMethod();

//Classes

class MyClass {
    
  myClassMethod() {
    console.log("My Class Method", this);
  }

  myArrowClassMethod = () => {
    console.log("myArrowClassMethod", this);
  }

}

const myClass = new MyClass();
myClass.myClassMethod();
myClass.myArrowClassMethod();
