//========================synchronous javascript=============
// const processOrder = () => {
//   console.log(`Processing order for customer 1`);
//   let currrentTime = new Date().getTime();

//   while (currrentTime + 3000 >= new Date().getTime()) {
//     // Delay
//   }

//   console.log(`order processed for customer 1`);
// };

// console.log(`taking order from customer1`);

// processOrder();

// console.log(`complete order for customer 1`);

//============= synchronous javascript ============
/**
 * synchronous js call stack theke kaj kore
 * asynchronous js Web API er kache transfer kore
 */

// const processOrder = () => {
//   console.log(`Processing order for customer 1`);

//   setTimeout(() => {}, 3000); // setTimeOut aynchronous

//   console.log(`order processed for customer 1`);
// };

// console.log(`taking order from customer1`);

// processOrder();

// console.log(`complete order for customer 1`);
//=======================================
const takeOrder = (customer, callback) => {
  console.log(`taking order from ${customer}`);
  callback(customer);
};

const processOrder = (customer, callback) => {
  console.log(`Processing order for ${customer}`);

  setTimeout(() => {
    console.log(`Cooking done`);
    console.log(`order processed for customer 1`);
    callback(customer);
  }, 3000);
};

const completeOrder = (customer) => {
  console.log(`complete order for ${customer}`);
};

takeOrder("custormer 1", (customer) => {
  processOrder("customer", (customer) => {
    completeOrder(customer);
  });
});
