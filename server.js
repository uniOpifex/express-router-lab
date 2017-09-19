const express = require('express');
const app = express();
const hbs = require('hbs');

app.set("view engine", "hbs");

app.get('/greeting', (req, res) => {
  console.log(req.query);

  res.render("greeting", {
    saying: req.query.saying,
    name: "Jamie"
  })
})

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Express is listening on port ", PORT);
});