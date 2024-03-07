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

function one(callback, value) {
  setTimeout(() => {
    console.log("this is function one");
    callback(value + 10);
  }, 2000);
}

function two(value, callback) {
  setTimeout(() => {
    console.log("this is function two");
    callback(value + 10);
  }, 100);
}

function three(value, callback) {
  setTimeout(() => {
    console.log("this is function three");
    callback(value + 10);
  }, 200);
}

function four(value, callback) {
  setTimeout(() => {
    console.log("this is function four");
    callback(value + 10);
  }, 200);
}

function five(value, callback) {
  setTimeout(() => {
    console.log("this is function five");
    callback(value + 10);
  }, 300);
}

function six(value, callback) {
  setTimeout(() => {
    console.log("this is function six");
    callback(value + 10);
  }, 3000);
}

function seven(value, callback) {
  setTimeout(() => {
    console.log("this is function seven");
    callback(value + 10);
  }, 1000);
}

function eight(value) {
  setTimeout(() => {
    console.log("Our final value is : ", value);
  }, 200);
}

one((result) => {
  two(result, (result) => {
    three(result, (result) => {
      four(result, (result) => {
        five(result, (result) => {
          six(result, (result) => {
            seven(result, (result) => {
              eight(result);
            });
          });
        });
      });
    });
  });
}, 10);
