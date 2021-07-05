const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");

const app = express();
app.use(cors());
admin.initializeApp();
const db = admin.firestore();

exports.app = functions.https.onRequest(app);
const docref = db.collection("users");

app.post("/newuser", async (req, res) => {
    const {userid, useremail, userphonenumber} = req.body
    const results = await docref.add({
        userid,
        useremail,
        userphonenumber
      });
      
  res.send(results);
});

app.get("/health", (req, res) => {
    res.send("Endpoint is Healthy!");
  });

app.post("/userpref", (req, res) => {
    res.send("Message Received!");
  });
