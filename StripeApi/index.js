const express = require('express');
const Stripe = require('stripe');
const stripe = new Stripe('sk_test_51J3SJQCn1gZRGcxzFpuHlRS82XyiaA6P2ErHvikgHTOcSPShIkZ7kvk34r1coQ6mHTqs8tQuRmrOyGW9kDnAVqkJ00Tkeo0etk', {
});
const app = express();
app.use(express.json());
// (req.body.Price) * 200
app.post('/create-payment-intent', (req, res) => {
  console.log("body", req.body.Price);
  const paymentIntent = stripe.paymentIntents.create({
    amount: 1000,
    currency: 'egp',
  }).then((payIntent) => {
    res.send({
      clientSecret: payIntent.client_secret,
    });
  })
    .catch((e) => { console.log(e) });
});

app.listen(3000, () => console.log('Server up'));
