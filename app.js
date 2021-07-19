const express = require("express");
const bodyParser = require("body-parser");
const mailchimp = require("@mailchimp/mailchimp_marketing");
const credentials = require(__dirname + "/config.js");

const app = express();

//to accept the post request
app.use(bodyParser.urlencoded({ extended: true }));

//setting up the static files
app.use(express.static("public"));

//setting the port
port = process.env.PORT || 3000;

//loading the home page
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/signup.html");
});


//my mailchimp details 
const APIkey = credentials.APIkey;
const serverPrefix = credentials.serverPrefix;
const AudienceID = credentials.AudienceID;  //listid

//Setting the mailchimp configuration
mailchimp.setConfig({
    apiKey: APIkey,
    server: serverPrefix
});


//loading the page after form submission
app.post("/", (req, res) => {

    //making jsonobject of subscriber
    const jsonData = {
        email_address: req.body.email,
        status: "subscribed",
        merge_fields: {
            FNAME: req.body.fname,
            LNAME: req.body.lname
        }
    };

    //function to add subscriber at mailchimp
    async function run() {
        try {
            const response = await mailchimp.lists.addListMember(AudienceID, jsonData);
            // console.log(response);
            res.sendFile(__dirname + "/success.html");

        } catch (error) {
            console.log(error);
            res.sendFile(__dirname + "/failure.html");
        }
    };
    run();
});


app.post("/failure", (req, res) => {
    res.redirect("/");
});

app.listen(port, () => {
    console.log("Server is running on port 3000");
})