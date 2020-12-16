it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 600000,rate: 12,years: 1})).toEqual('53309.27');
});

it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount: 1000, rate: 36, years: 40})).toEqual("30.00");
});

it("should handle decimal places in all inputs", function(){
  expect(calculateMonthlyPayment({amount: 1000.45, rate: 4.5764, years: 15.1765})).toEqual("7.63");
})
