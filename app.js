const express = require("express");
const app = express();
const port = 3000;

// Array dei post
const posts = [
  {
    title: "Ciambellone",
    content: "Ciambellone ripieno.",
    image: "/images/ciambellone.jpeg",
    tags: ["soffice", "ripieno"],
  },
  {
    title: "Cracker Barbabietola",
    content: "Cracker alla barbabietola.",
    image: "/images/cracker_barbabietola.jpeg",
    tags: ["viola", "croccante"],
  },
  {
    title: "Pane Fritto",
    content: "Pane fritto e dolce.",
    image: "/images/pane_fritto_dolce.jpeg",
    tags: ["fritto", "dolce"],
  },
  {
    title: "Pasta Barbabietola",
    content: "Pasta alla barbabietola.",
    image: "/images/pasta_barbabietola.jpeg",
    tags: ["pasta", "barbabietola"],
  },
  {
    title: "Torta Paesana",
    content: "Torta di latte.",
    image: "/images/torta_paesana.jpeg",
    tags: ["latte", "torta"],
  },
];

// Rotta base
app.get("/", (req, res) => {
  res.send("Server del mio blog");
});

// Rotta bacheca
app.get("/bacheca", (req, res) => {
  res.json({
    posts: posts,
    count: posts.length,
  });
});

// Asset statico
app.use("/images", express.static("public/images"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
