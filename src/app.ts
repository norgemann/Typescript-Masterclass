//Intersection Types
interface Order {
  id: string;
  price: number;
  currency: string;
}

interface Card {
  cardNumber: string;
  cvc: number;
}
interface Paypal {
  email: string;
}

type CardOrder = Order & Card;
type PaypalOrder = Order & Paypal;

const order: Order = {
  id: "55ffg5",
  price: 233,
  currency: "RSD",
};

//Intersection Type
const orderCard: CardOrder = {
  cardNumber: "4000 52365 9658 2222",
  cvc: 236,
  ...order,
};

const orderPaypal: PaypalOrder = {
  ...order,
  email: "marko@est.com",
};

const oldWay: CardOrder & PaypalOrder = Object.assign(
  {},
  order,
  orderCard,
  orderPaypal
);

console.log(oldWay);
