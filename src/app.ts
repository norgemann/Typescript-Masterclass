//Discriminated (Tagged) Unions
interface Order {
  id: string;
  price: number;
  currency: string;
}

interface Card {
  cardNumber: string;
  cvc: number;
  type: "type";//Discriminated (Tagged) Unions
}
interface Paypal {
  email: string;
  type: "paypal";//Discriminated (Tagged) Unions
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
  type: "type",
  ...order,
};

const orderPaypal: PaypalOrder = {
  ...order,
  email: "marko@est.com",
  type: "paypal",
};

type Checkout = CardOrder | PaypalOrder;//Discriminated (Tagged) Unions

function checkOut(order: Checkout) {
  if (order.type === "paypal") {
    console.log(`Paypal email ${order.email}`);
  } else {
    console.log(`Card number${order.cardNumber}`);
  }
}

checkOut(orderCard);
checkOut(orderPaypal);
