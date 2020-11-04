const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('There was an error :(');
  }, 2000);
});

/*
 * then не выполнится так как в функции fn, внутри new Promise(fn),
 * был вызван reject(). А catch как раз выполнится через 2 секунды
 */
promise
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
  });
