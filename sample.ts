// Generic type in function
// constraint id, name
const addCustomerToOrder = <T extends { id: number; name: string }>(
  customerInfo: T,
) => {
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
const result3 = addCustomerToOrder<{ id: number; name: string; emni: string }>({
  emni: "emni",
  id: 222,
  name: "Asiq",
});

// console.log(result2);
// note: <commonCustomerProp & { moneyBag: number }> ekhane Intersection kora hoyeche
// note2: constraint id,name-> <T extends {id: number, name: string}> ekhane extends {} mane perameter a ar jai asuk {} er bitore ja dibo ta must thakte hobe

//****************** */ Practice ****************************
const createOrder = <T>(customerInfo: T) => {
  return { ...customerInfo };
};

type TOrderProp = { id: number; name: string; hasCoupon: boolean };
const orderRes1 = createOrder<TOrderProp>(customer1);
const orderRes2 = createOrder<TOrderProp & { moneyBag: number }>(customer2);

// console.log({ orderRes1, orderRes2 });

//****************** */ keyof ****************************
type FoodManu = {
  burger: string;
  pizza: string;
  puchka: string;
};

const myFavFood1: "burger" | "pizza" | "puchka" = "pizza";
const myFavFood: keyof FoodManu = "pizza";

const getAnyObjValue = <T>(obj: T, key: keyof T) => {
  return obj[key];
};
const user1 = {
  name: "Towhid",
  age: 32,
  role: "admin",
};
type TUser1 = {
  name:string,
  age: number,
  role: string
}
const product = {
  brand: "Toyota ",
  modelYear: 1950,
};
type TProduct = {
  brand: string,
  modelYear: number,
};
const value = getAnyObjValue<TUser1>(
  user1,
  'age',
);
console.log(value);
