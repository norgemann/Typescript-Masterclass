//Arrow Functions and Lexical Scope

//Classes

class MyClass {
  myClassMethod() {
    const foo = "foo";
    console.log("My Class Method", this, foo);

    setTimeout(function () {
      console.log("Set Timeout", this, foo);
    }, 0);

    setTimeout(() => {
      console.log("Set Timeout Arrow", this, foo);
    }, 0);
  }

  // console:
  // My Class Method MyClass {} foo
  // Set Timeout Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …} foo
  //Set Timeout Arrow MyClass {} foo
}

const myClass = new MyClass();
myClass.myClassMethod();
