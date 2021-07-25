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
    const {userid, useremail, userphonenumber, usersubscriptionstatus} = req.body
    const results = await docref.add({
        userid,
        useremail,
        userphonenumber,
        usersubscriptionstatus
      });
      
  res.send(results);
});

// first attempt at specifically calling backend for updating subscription status
// (not sure if this is correct)

/*app.post("/updatesubscriptionstatus", async (req, res) => {
  const {currentuseremail, subscriptionstatus} = req.body
  const status = await docref.where("useremail", "==", currentuseremail).update({
    usersubscriptionstatus: subscriptionstatus
  });
    
res.send(status);
});*/

app.get("/health", (req, res) => {
    res.send("Endpoint is Healthy!");
  });

app.post("/userpref", (req, res) => {
    res.send("Message Received!");
  });
