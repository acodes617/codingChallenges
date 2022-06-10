//P: we're given a sequence of numberos
//R: value of n
//E: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, …]

//P:
//declare the first variable to rep. the first num
// define a second variable to rep. the second num
// utilize the while loop
// define a counter

//n1 + n 2 = sum
// 1 + 1 = 2  = sum
// n1 = n2
// 2 + 1 = 3
function fibonacci(n) {
  let [a, b] = [0, 1];
  while (n-- > 0){
      [a, b] = [b, a+b];
  }
  return b;
}