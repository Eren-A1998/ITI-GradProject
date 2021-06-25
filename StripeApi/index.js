const express = require('express');
const Stripe = require('stripe');

const stripe = new Stripe('sk_test_51J3SJQCn1gZRGcxzFpuHlRS82XyiaA6P2ErHvikgHTOcSPShIkZ7kvk34r1coQ6mHTqs8tQuRmrOyGW9kDnAVqkJ00Tkeo0etk', {
});
const app = express();
app.use(express.json());

app.post('/create-payment-intent', (req, res) => {
  const paymentIntent = stripe.paymentIntents.create({
    amount: 500,
    currency: 'usd',
  }).then((payIntent)=>{
    console.log("hi", payIntent.client_secret);
     res.send({
    clientSecret: payIntent.client_secret,
  });
    console.log("then")})
  .catch((e)=>{console.log(e)});
});

app.listen(3000, () => console.log('Server up'));
