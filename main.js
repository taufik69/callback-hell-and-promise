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

function fun1() {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove("this is sucessfully fetching data 1");
    }, 2000);
  });
}

function fun2() {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove("this is sucessfully fetching data 2");
    }, 1000);
  });
}

function fun3() {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove("this is sucessfully fetching data 3");
    }, 200);
  });
}

fun1()
  .then((resultFromFun1) => {
    console.log(resultFromFun1);
    return fun2(); // Return a promise from fun2()
  })
  .then((resultFromFun2) => {
    console.log(resultFromFun2);
    return fun3(); // Return a promise from fun3()
  })
  .then((resultFromFun3) => {
    console.log(resultFromFun3);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });

// now make a another promise
