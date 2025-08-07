(function () {
  function simple_sum(n: number): number {
    let result = 0;
    for (let i = 1; i <= n; i++) {
      result += i;
    }
    return result;
  }

  // 1st question
  let p11 = performance.now();
  const n1 = 100;
  const result1 = simple_sum(n1);
  let p12 = performance.now();
  console.log(`1. Execution time ${(p12 - p11).toFixed(2)}ms`);

  // 2nd question
  let p21 = performance.now();
  const n2 = 100000;
  const result2 = simple_sum(n2);
  let p22 = performance.now();
  console.log(`2. Execution time ${(p22 - p21).toFixed(2)}ms`);

  // 3rd question
  let p31 = performance.now();
  const n3 = 10000000;
  const result3 = simple_sum(n3);
  let p32 = performance.now();
  console.log(`3. Execution time ${(p32 - p31).toFixed(2)}ms`);
})();
