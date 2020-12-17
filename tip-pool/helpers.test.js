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
            allPayments = {};
            expect(sumPaymentTotal('tipAmt')).toEqual(0);
            expect(sumPaymentTotal('billAmt')).toEqual(0); 
        });
        afterAll(function(){
            allPayments = {};
        });
    });

    describe("calculateTipPercent Tests",function(){
        it("should return correct tip percent", function(){
            expect(calculateTipPercent(6,3)).toEqual(50);
            expect(calculateTipPercent(10,0)).toEqual(0);
            expect(calculateTipPercent(10,100)).toEqual(1000);
            expect(calculateTipPercent(102.44,25.61)).toEqual(25);
        });
    });
    
    describe("appendTd Tests",function(){   
        it("should append any string as the innerText of a td to a tr element", function(){
            const tr = document.createElement("tr");
            expect(tr.childElementCount).toEqual(0);

            appendTd(tr, "Good Morning!");
            
            expect(tr.childElementCount).toEqual(1);
            expect(tr.children[0].innerText).toEqual("Good Morning!");

            appendTd(tr, "It Certainly is, Mate!");
            expect(tr.children[1].innerText).toEqual("It Certainly is, Mate!");

        });
        it("should append any number as the innertext of a td to a tr element", function(){
            const tr = document.createElement("tr");
            appendTd(tr, 6);
            expect(tr.children[0].innerText).toEqual("6");
        });
    });

});