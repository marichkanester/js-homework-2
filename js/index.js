const number= Number(prompt("Number"));
function fib(n) {
  let a = 0;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

alert( fib(number) ); 


function fib(n) {
    let mas=[0, 1];

      for (let i=2; i<=n;i++){
        mas[i]=mas[mas.length-1]+mas[mas.length-2];
    }
    return mas[n];
}

alert( fib(number) );