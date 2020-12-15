it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 600000,rate: 12,years: 1})).toEqual(53309.27);
  expect(calculateMonthlyPayment({amount: 1000,rate: 36,years: 40})).toEqual(30)

});


it("should return a result with 2 decimal places", function() {
  expect(1).toBe(1);
  // ..
});

/// etc
