const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// This is your test secret API key.
const stripe = require("stripe")("sk_test_51Mknf4SGM22w4L1bj227YHkcUAMO1aJ8HkP6qzswyP3cAkItXsXHXyQCphuDBWGvVbrNbRU9WnMgamMy3Z9qVybe00QZbdANwU");

// API
// App config
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "INR",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://127.0.0.1:5001/clone-93a03/us-central1/api
