const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
// eslint-disable-next-line max-len
const stripe = require('stripe')(
'sk_test_51LUhmjFZijWW5rlSljs0NsSL84qmVJWIFBNOKXk5OYUlgen3muaRMX2PAUzj4Nemh68q9EcCa4m0k39mvrfsq1sK00VdzvGpvH'
);

// App config
const app = express();
// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.get('/', (req, res) => {
  res.status(200).send('hi');
});

app.post('/payments/create', async (req, res) => {
  const total = req.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// Listen
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/e-commerce-174fa/us-central1/api
