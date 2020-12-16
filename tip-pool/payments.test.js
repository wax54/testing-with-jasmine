describe("payments Test", function() {
    beforeEach(function(){
        billAmtInput.value = 60;
        tipAmtInput.value = 5;
        submitPaymentInfo();
    });
    describe("submitPaymentInfo tests",function(){
        it("should add the bill and tip inputs to allpayments", function(){
        expect(Object.keys(allPayments).length).toEqual(1);
        expect(allPayments['payment1'].billAmt).toEqual('60');
        });
    });
    afterEach(function(){
        paymentTbody.innerText ='';
        allPayments = {};
    });
});