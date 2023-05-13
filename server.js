const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(
    '<h2>99 bottles of beer on the wall!</h2> <a href="/98"><h3>Take one down, pass it around.</h3></a>'
  );
});
app.get("/:number_of_bottles", (req, res) => {
  const num = +req.params.number_of_bottles;
  if (num > 0) {
    res.send(
      `<h2>${num} bottles of beer on the wall!</h2>` +
        `<a href="/${num - 1}"><h3>Take one down, pass it around.</h3></a>`
    );
  } else {
    res.send(`<h2>Start over</h2>` + `<a href="/"><h3>Click Me.</h3></a>`);
  }
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
