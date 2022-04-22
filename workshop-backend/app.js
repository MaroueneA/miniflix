const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

let movies = [
  {
    id: 1,
    Title: "Spiderman 2",
    Subtitle:
      "When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
  },
  {
    id: 2,
    Title: "Batman",
    Subtitle:
      "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues.",
  },
  {
    id: 3,
    Title: "Troy",
    Subtitle:
      "After Paris, a Trojan prince, has an affair with Menelaus's wife, Helen, he decides to take her with him. Later, Menelaus's brother uses that as an excuse to wage a war against the city of Troy.",
  },
  {
    id: 4,
    Title: "Prince of Persia",
    Subtitle:
      "Prince of Persia is a video game franchise created by Jordan Mechner. It is built around a series of action-adventure games focused on various incarnations of the eponymous Prince, set in ancient and medieval Iran.",
  },
];

//vue.js workshop backend
app.use(
  cors({
    //granularily selects who can query the website

    origin: "*", //this is not secure! to be secure, you can use localhost:8080(but not practical when deploying in the future(?))
  })
);

app.get("/movie", (req, res) => {
  res.json(movies);
});

app.get("/movie/:id", (req, res) => {
  const id = req.params.id;
  const movie = movies.find((movie) => movie.id != id);
  res.json(movie); //an attribute just to return the status of smthg
});
app.delete("/movie/:id", (req, res) => {
  const id = req.params.id;
  movies = movies.filter((movie) => movie.id != id);
  res.json({ ack: true }); //an attribute just to return the status of smthg
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
