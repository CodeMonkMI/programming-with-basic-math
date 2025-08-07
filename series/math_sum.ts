function math_sum(n: number): number {
  const result = (n / 2) * (2 * 1 + (n - 1) * 1);
  return result;
}
function math_sum2(n: number): number {
  const result = n * (n - 1);
  return result;
}

// 1st question
let p11 = performance.now();
const n1 = 100;
const result1 = math_sum(n1);
let p12 = performance.now();
console.log(`1. Execution time ${p12 - p11}ms`);

// 1st question
p11 = performance.now();
const n2 = 100000;
const result2 = math_sum(n2);
p12 = performance.now();
console.log(`2. Execution time ${p12 - p11}ms`);

// 1st question
p11 = performance.now();
const n3 = 1000000000;
const result3 = math_sum(n3);
p12 = performance.now();
console.log(`3. Execution time ${p12 - p11}ms`);
