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
      console.log("this is sucessfully fetching data 1");
      reslove("one");
    }, 2000);
  });
}

function fun2() {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      console.log("this is sucessfully fetching data 2");
      reslove();
    }, 1000);
  });
}

function fun3() {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      console.log("this is sucessfully fetching data 3");
    }, 200);
  });
}

fun1()
  .then((resultFromFun1) => {
    console.log("Result from fun1:", resultFromFun1);
    return fun2(); // Return a promise from fun2()
  })
  .then(() => {
    console.log("Fun2 completed.");
    return fun3(); // Return a promise from fun3()
  })
  .then(() => {
    console.log("All functions completed successfully.");
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
