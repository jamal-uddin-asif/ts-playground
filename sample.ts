// Generic type in function
const addCustomerToOrder = <T>(customerInfo: T) => {
  return { ...customerInfo, orderStatus: "panding" };
};

const customer1 = { id: 222, name: "Asiq", hasCoupon: true };

const result = addCustomerToOrder<{
  id: number;
  name: string;
  hasCoupon: boolean;
}>(customer1);
// console.log(result);

const customer2 = { id: 222, name: "Asiq", hasCoupon: true, moneyBag: 20000 }
const result2 = addCustomerToOrder<{
  id: number;
  name: string;
  hasCoupon: boolean;
  moneyBag: number;
}>(customer2);
console.log(result2);
