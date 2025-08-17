/* =====02 거스름돈 구하기.===== */

function calculateChange(payment, cost) {
  let change = payment - cost;

  /*   const fiftyCount = Math.floor(change / 50000);
  change = change % 50000; // 거스름돈 % 50000 = 남은 거스름돈

  const tenCount = Math.floor(change / 10000);
  change = change % 10000;

  const fiveCount = Math.floor(change / 5000);
  change = change % 5000;

  const oneCount = Math.floor(change / 1000);
  change = change % 1000;

  console.log(`50000원 지폐: ${fiftyCount}장`);
  console.log(`10000원 지폐: ${tenCount}장`);
  console.log(`5000원 지폐: ${fiveCount}장`);
  console.log(`1000원 지폐: ${oneCount}장`); */

  /*   function billCount(amount) {
    const count = Math.floor(change / amount);
    change = change % amount; // change = change - (count * amount);
    return count;
  }
  const fiftyCount = billCount(50000);
  const tenCount = billCount(10000);
  const fiveCount = billCount(5000);
  const oneCount = billCount(1000); 


  console.log(`50000원 지폐: ${fiftyCount}장`);
  console.log(`10000원 지폐: ${tenCount}장`);
  console.log(`5000원 지폐: ${fiveCount}장`);
  console.log(`1000원 지폐: ${oneCount}장`); */

  billTypes = [50000, 10000, 5000, 1000];

  for (let bill of billTypes) {
    const count = Math.floor(change / bill);
    change = change % bill;

    console.log(`${bill}원 지폐: ${count}장`);
  }
}

calculateChange(100000, 33000);
console.log('');
calculateChange(500000, 378000);
