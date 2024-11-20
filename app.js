const express = require("express");
const app = express();
const port = 3000;

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

const postsRouter = require("./routers/posts");

app.use("/", postsRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
