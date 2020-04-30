//Function Generics

class Pizza {
  constructor(private name: string, private price: number) {}
}

class Coupon {
  constructor(private name: string) {}
}

class List<T> {
  private list: T[] = [];

  addItem(item: T): void {
    this.list.push(item);
  }

  getList(): T[] {
    return this.list;
  }
}


const list = new List<Pizza>();
list.addItem(new Pizza("Pepperoni", 25))

const list2 = new List<Coupon>();
list2.addItem(new Coupon("PIZZA25%"))

const lists = [...list.getList(), ...list2.getList()]

console.log(lists)
