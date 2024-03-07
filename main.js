// function Show(callback) {
//   fetch("https://dummyjson.com/products")
//     .then((res) => res.json())
//     .then((data) => callback(data))
//     .catch((error) => console.error("Error fetching data:", error));
// }

// Show((data) => {
//   console.log(data);
// });

// const api = "https://dummyjson.com/products";

// const fetchData = (url) => {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => resolve(data));
//   });
// };
// fetchData(api).then((data) => console.log(data));

// function getWeather() {
//   return new Promise((reslove, reject) => {
//     setTimeout(() => {
//       reslove("taufik");
//     }, 2000);
//   });
// }

// function getWeatherMore(getWeatherData) {
//   return new Promise((reslove, reject) => {
//     console.log(getWeatherData);
//     setTimeout(() => {
//       switch (getWeatherData) {
//         case "taufik": {
//           reslove("Motherchod" + getWeatherData);
//         }
//       }
//     }, 2000);
//   });
// }

// function fun1() {
//   return new Promise((reslove, reject) => {
//     setTimeout(() => {
//       reslove("this is sucessfully fetching data 1");
//     }, 2000);
//   });
// }

// function fun2() {
//   return new Promise((reslove, reject) => {
//     setTimeout(() => {
//       reslove("this is sucessfully fetching data 2");
//     }, 1000);
//   });
// }

// function fun3() {
//   return new Promise((reslove, reject) => {
//     setTimeout(() => {
//       reslove("this is sucessfully fetching data 3");
//     }, 200);
//   });
// }

// fun1()
//   .then((resultFromFun1) => {
//     console.log(resultFromFun1);
//     return fun2(); // Return a promise from fun2()
//   })
//   .then((resultFromFun2) => {
//     console.log(resultFromFun2);
//     return fun3(); // Return a promise from fun3()
//   })
//   .then((resultFromFun3) => {
//     console.log(resultFromFun3);
//   })
//   .catch((error) => {
//     console.error("An error occurred:", error);
//   });

// now make a another promise

// const cart = ["shoes ", "pants", "shirt"];
// createOrder(cart)
//   .then((getresult) => {
//     return getresult;
//   })
//   .then((getresultfrom1) => {
//     return procedPayment(getresultfrom1);
//   })
//   .then((paymentInfo) => {
//     console.log("from chain", paymentInfo);
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("sob finished");
//   });

// // make a promise object // or create a promise
// function createOrder(cart) {
//   return new Promise((reslove, reject) => {
//     let status = false;
//     if (status) {
//       reslove(cart);
//     } else {
//       const err = new Error("Cart is not valid");
//       reject(err);
//     }
//   });
// }

// // make another promise funciton

// function procedPayment(getinfofrom1stfunction) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("payment done " + getinfofrom1stfunction);
//     }, 2000);
//   });
// }

function apiFetcher(api) {
  return new Promise((reslove, reject) => {
    fetch(api).then((res) => reslove(res.json()));
  });
}

function parsing(data) {
  return new Promise((reslove, reject) => {
    const json = data.products;
    reslove(json);
  });
}

const api = "https://dummyjson.com/products";
apiFetcher(api)
  .then((json) => {
    return parsing(json);
  })
  .then((allproduct) => {
    return allproduct;
  })
  .then((slice) => {
    console.log(slice[0]);
  });
