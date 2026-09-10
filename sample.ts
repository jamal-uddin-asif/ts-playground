// Generic type in function
const addCustomerToOrder = <T>(customerInfo: T) => {
  return { ...customerInfo, orderStatus: "panding" };
};

const customer1 = { id: 222, name: "Asiq", hasCoupon: true };
type TCommonCustomerProp = { id: number; name: string; hasCoupon: boolean };
const result1 = addCustomerToOrder<TCommonCustomerProp>(customer1);
// console.log(result1);

const customer2 = { id: 222, name: "Asiq", hasCoupon: true, moneyBag: 20000 };
const result2 = addCustomerToOrder<TCommonCustomerProp & { moneyBag: number }>(
  customer2,
);
// console.log(result2);
// note: <commonCustomerProp & { moneyBag: number }> ekhane Intersection kora hoyeche

//****************** */ Practice ****************************
const createOrder = <T>(customerInfo: T) => {
  return { ...customerInfo };
};

type TOrderProp = { id: number; name: string; hasCoupon: boolean };
const orderRes1 = createOrder<TOrderProp>({
  id: 222,
  name: "Asiq",
  hasCoupon: true,
});
const orderRes2 = createOrder<TOrderProp & { moneyBag: number }>({
  id: 222,
  name: "Asiq",
  hasCoupon: true,
  moneyBag: 20000,
});
 
console.log({orderRes1, orderRes2})