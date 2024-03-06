//* require block
require("dotenv").config();
require("./config/database");

const express = require("express");
const path = require("path");
const logger = require("morgan");

//* router requires
const usersRouter = require("./routes/usersRouter")
const ordersRouter = require("./routes/ordersRouter")
const addressesRouter = require("./routes/addressesRouter")


//* openai import
const OpenAI = require('openai');

//* prayer data prompts import
const getPrayerData = require('./src/pages/0LandingPage/prayerData.js');
const prayerData = getPrayerData(); // Call the function to get the prompt data

//* middleware block
const app = express();
app.use(logger("dev"));
app.use(express.json());
//* Middleware to verify token and assign user object of payload to req.user.
app.use(require('./config/checkToken'));

app.use(express.static(path.join(__dirname, "dist")));
app.use("/api/users", usersRouter);
app.use("/api/orders", ordersRouter);
app.use("/api/addresses", addressesRouter);

//* gpt middleware
// const openai = new OpenAI();

const openai = new OpenAI({
  // apiKey: process.env.OPENAI_API_KEY
  // apiKey: ''
  
});
console.log('prayerData userPersona', prayerData.userPersona); 
console.log('prayerData task', prayerData.task); 
console.log('prayerData todaysVerses', prayerData.todaysVerses); 

app.get('/getResponse', async (req, res) => {
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{
      'role': 'user',
      //! prompts
      'content': `Please write me a prayer, where I am a Christian ${prayerData.userPersona}, to ${prayerData.task}, and if possible, using the Bible verses ${prayerData.todaysVerses}, topics we learned today ${prayerData.todaysLearnings}, and materials we used from today ${prayerData.todaysMaterials}. Kindly ignore 'nil' inputs.`

    }],
    max_tokens: 300
  });
  // console.log(response);
  console.log(response);
  console.log(response.choices[0].message);

});

//* routes block
app.get("/api/", (req, res) => {
  res.json({ message: "welcome to the backend" });
});
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});


//* listen block
const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
