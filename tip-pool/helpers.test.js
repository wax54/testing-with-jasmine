describe("Helpers Tests", function() {

    describe("sumPaymentTotal Tests",function(){
        beforeEach(function(){
            allPayments = {
                payment1: {billAmt: "60", tipAmt: "5", tipPercent: 8},
                payment2: {billAmt: "78", tipAmt: "1", tipPercent: 1},
                payment3: {billAmt: "10", tipAmt: "100", tipPercent: 1000},
                payment4: {billAmt: "51", tipAmt: "6", tipPercent: 12},
                payment5: {billAmt: "710", tipAmt: "0", tipPercent: 0}
                };
            
        });
        it("should return the correct totals from allPayments", function(){
            expect(sumPaymentTotal('billAmt')).toEqual(909);
            expect(sumPaymentTotal('tipAmt')).toEqual(112);
            
        });
        it("should return NAN on invalid input", function(){
            expect(sumPaymentTotal('wrongWord')).toEqual(NaN);

        });
        it("should return 0 when allPayments is empty", function(){
        });
        afterEach(function(){
        });
    });
    describe("calculateTipPercent Tests",function(){
        beforeEach(function(){
        });
        it("should ", function(){
        });
        it("should ", function(){
        });
        it("should ", function(){
        });
        afterEach(function(){
        });
    });
    describe("appendTd Tests",function(){
        beforeEach(function(){
        });
        it("should ", function(){
        });
        it("should ", function(){
        });
        it("should ", function(){
        });
        afterEach(function(){
        });
    });

});