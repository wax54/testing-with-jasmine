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


    describe("appendPaymentTable tests", function(){

        it("should append a new tr on paymentTbody",function(){
            const payment = {billAmt:'60',tipAmt:'5',tipPercent:8};
            appendPaymentTable(payment);

            expect(paymentTbody.querySelectorAll('tr').length).toBe(1);
            appendPaymentTable(payment);
            expect(paymentTbody.querySelectorAll('tr').length).toBe(2);
        });
        it("should add the 'payment'+paymentId as the id for the new row",function(){
            paymentId = 68;
            const payment = {billAmt:'60',tipAmt:'5',tipPercent:8};
            appendPaymentTable(payment);
            expect(paymentTbody.querySelector('tr').id).toEqual('payment68');
        });
        it("should fill out the row with the inputed payment details",function(){
            const payment = {billAmt:'60',tipAmt:'5',tipPercent:8};
            appendPaymentTable(payment);
            const row = paymentTbody.querySelector('tr');
            expect(row.children[0].innerText).toEqual('$60');
            expect(row.children[1].innerText).toEqual('$5');
            expect(row.children[2].innerText).toEqual('8%');
        });

        afterEach(function(){
            paymentTbody.innerText = '';
            paymentId = 0;
        });
    });
  
    describe("updateSummary tests", function(){
        it("should put correct totals in summaryTds0-2",function(){
            allPayments = {
                payment1: {billAmt: "60", tipAmt: "5", tipPercent: 8},
                payment2: {billAmt: "78", tipAmt: "1", tipPercent: 1},
                payment3: {billAmt: "10", tipAmt: "100", tipPercent: 1000},
                payment4: {billAmt: "51", tipAmt: "6", tipPercent: 12},
                payment5: {billAmt: "710", tipAmt: "0", tipPercent: 0}
                };
            updateSummary();
            expect(summaryTds[0].innerText).toEqual('$909');
            expect(summaryTds[1].innerText).toEqual('$112');
            expect(summaryTds[2].innerText).toEqual('204%'); 
            
            //clean up
            allPayments = {}; 
            updateSummary();
        });
    });
});