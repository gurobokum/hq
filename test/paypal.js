var paypal = new (require('../modules/payment/paypal.js').Paypal)();

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000

describe("Paypal payment", function () {
    it("valid credit card payment", function (done) {
        paypal.createPayment("card", {
            cardType: "visa",
            cardNumber: 4417119669820331,
            expMonth: 11,
            expYear: 2018,
            ccv: 874,
            holderFirstName: "Joe",
            holderLastName: "Shopper",
            price: 7,
            currency: "USD"
        }).then(function (error, payment) {
            expect(error).toBe(null);
            done();
        });
    });

    it("unvalid credit card payment", function (done) {
        paypal.createPayment("card", {amount: 33})
            .then(function (error) {
                expect(!!error).toBe(true);
                done();
            });
    });
})