const number= Number(prompt("Number"));
function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

alert( fib(number) ); 

// function fib(n) {
//     let mas=[1,1];
//     let a;
//     for (let i=0; mas[i]<n;i++){
//         a=mas[i-1]+mas[i-2];
//     }

// alert( fib(number) );