const cart = ["shoes", "pants", "kurta"];
function createOder(cart) {
  const pr = new Promise((resolve, reject) => {
    if (!validateCart(cart)) {
      const err = new Error("Cart is not valid");
      reject(err);
    }
    const orderId = "1234";
    setTimeout(() => {
      if (orderId) {
        resolve(orderId);
      }
    }, 5000);
  });
  return pr;
}

function validateCart(cart) {
  return true;
}
async function procedtopayment() {
  const result = await createOder();
  console.log("before async");
  console.log(result);
}
procedtopayment();
console.log("after async");

async function hello() {
  return "Hello Alligator!";
}

const b = hello();

b.then((x) => console.log(x));
