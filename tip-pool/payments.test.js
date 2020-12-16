describe("payments Tests", function() {
    
    describe("submitPaymentInfo Tests",function(){
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
            paymentId = 0;
            updateSummary();
        });
    });

    describe("createCurPayment Tests", function(){
        beforeEach(function(){
            billAmtInput.value = 60;
            tipAmtInput.value = 5;
        });
        it("should return a valid payment object",function(){
            const aPaymentObject = createCurPayment();
            expect(aPaymentObject.billAmt).toEqual('60');
            expect(aPaymentObject.tipAmt).toEqual('5');
            expect(aPaymentObject.tipPercent).toEqual(8);
        });
        it("should return undefined with $0 bill",function(){
            billAmtInput.value = 0;
            expect(createCurPayment()).toBe(undefined);

        });
        it("should work with $0 tip",function(){
            tipAmtInput.value = 0;
            const aPaymentObject = createCurPayment();
            expect(aPaymentObject.billAmt).toEqual('60');
            expect(aPaymentObject.tipAmt).toEqual('0');
            expect(aPaymentObject.tipPercent).toEqual(0);
        });
        it("should return undefined with negative inputs",function(){
            tipAmtInput.value = -2;
            expect(createCurPayment()).toBe(undefined);
            
            tipAmtInput.value = 4;
            billAmtInput.value = -2;
            expect(createCurPayment()).toBe(undefined);
        });
        it("should return undefined with empty inputs",function(){
            tipAmtInput.value = '';
            expect(createCurPayment()).toBe(undefined);

            tipAmtInput.value = 1;
            billAmtInput.value = '';
            expect(createCurPayment()).toBe(undefined);
        });
        afterAll(function(){
            billAmtInput.value = '';
            tipAmtInput.value = '';
        });
    });
    
    
});