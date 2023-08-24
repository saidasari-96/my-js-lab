const cart = ["shoes", "pants", "kurta"];

const promise = createOder(cart);

promise
  .then((orderId) => {
    console.log(orderId); // if any errors occurs here directly catch block will be execute it skip the praymentInfo To overcome this behavaiour we have add catch block to this then method now if any occurs catch will execute and promise chain will not skip
    return orderId;
  })
  .catch((err) => {
    console.log(err);
  })
  .then((orderId) => proceedToPayment(orderId))
  .then((paymentInfo) => console.log(paymentInfo))
  .catch((err) => {
    console.log(err);
  })
  .then(() =>
    console.log("no matter what happens it will definetely execute or called")
  );

function createOder(cart) {
  const pr = new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    const orderId = "1234";
    if (orderId) {
      resolve(orderId);
    }
  });
  return pr;
}

function validateCart(cart) {
  return true;
}

function proceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    resolve("Payment Sucessful");
  });
}
