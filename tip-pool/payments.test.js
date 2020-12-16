describe("payments Test", function() {
    
    describe("submitPaymentInfo tests",function(){
        beforeEach(function(){
            billAmtInput.value = 60;
            tipAmtInput.value = 5;
            submitPaymentInfo();
        });
        it("should add the bill and tip inputs to allpayments", function(){
            expect(Object.keys(allPayments).length).toEqual(1);
            expect(allPayments['payment1'].billAmt).toEqual('60');
        });
        it("should reset the input values to an empty string", function(){
            expect(billAmtInput.value).toEqual('');
            expect(tipAmtInput.value).toEqual('');
        });
        it("should update the paymentTbody to include the new payment", function(){
            expect(paymentTbody.innerText).toEqual('$60	$5	8%');
        });
        afterEach(function(){
            paymentTbody.innerText ='';
            allPayments = {};
            updateSummary();
        });
    });
    
    describe("createCurPayment Tests", function(){
        beforeEach(function(){
            billAmtInput.value = 60;
            tipAmtInput.value = 5;
        });
        it("")
    });
    
    
});