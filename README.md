# Shubham-techie-Newsletter

### A Newsletter signup page made using *expressjs* and *Mailchimp* API.

> **Hosted on** : https://shubham-techie-newsletter.herokuapp.com/



### Want to run on your local computer -> **follow below steps** :
> + Download/clone the app and unzip (if downloaded). 
> + Run *npm init* in terminal to download the required packages. 
> + Make *config.js* file in main folder. 
> + Enter your [Mailchimp](https://mailchimp.com/) credentials i.e. API key, serverPrefix and listId in *config.js*. 

>
    #(Add your private details in below format in config.js file)
    
    module.exports = {
        APIkey: "xxxxxxxx0xxx0x0x0x-xx0",
        serverPrefix: "xx0",
        AudienceID: "000000000"
    };
    
> + Run *nodemon app.js* in terminal. \
(It will log *Server is running on port 3000*)

> + Goto *http://localhost:3000/* \
(Signup form will be seen)
