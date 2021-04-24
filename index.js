const express = require("express");

const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

app.use("views", express.static(path.join(__dirname, "views")));


// Static Middleware
app.use(express.static(path.join(__dirname, 'public')))


/* Pages */

//Home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views/main.html"));
  });

//blog page
app.get("/blog", (req, res) => {
    res.sendFile(path.join(__dirname, "views/blog.html"));
  });

//Profile page
app.get("/profile", (req, res) => {
    res.sendFile(path.join(__dirname, "views/profile.html"));
  });

//Upload page
app.get("/upload", (req, res) => {
    res.sendFile(path.join(__dirname, "views/upload.html"));
  });

//Post page
app.get("/post", (req, res) => {
    res.sendFile(path.join(__dirname, "views/post.html"));
  });

//Contact page
app.get("/contact", (req, res) => {
<<<<<<< HEAD
  res.sendFile(path.join(__dirname, "views/contact.html"));
});

=======
    res.sendFile(path.join(__dirname, "views/contact.html"));
  });

//file uploaded
app.get("/newpost", (req, res) => {
    res.sendFile(path.join(__dirname, "views/post.html"));
});


>>>>>>> 75ec00bea089f7297ee0e458757498f28bb75d11
app.listen(PORT, () => {
    console.log(`Your server is running on port: ${PORT}`);
  });
  