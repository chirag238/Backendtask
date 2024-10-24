const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

let posts = [];

// Function to create slugs from post titles
function createSlug(title) {
  return title.trim().toLowerCase().replace(/[^\w\s-]/g, '').replace(/ /g, '-');
}

// Route to display all posts
app.get('/posts', (req, res) => {
  res.render('posts', { posts });
});

// Route to add a new post
app.post('/posts', (req, res) => {
  const post = {
    title: req.body.title,
    body: req.body.body,
    slug: createSlug(req.body.title),
  };
  console.log(post.slug); // For debugging slug creation
  posts.push(post);
  res.redirect('/posts');
});

// Route to display an individual post based on its slug
app.get('/posts/:slug', (req, res) => {
  const requestedSlug = req.params.slug.trim().toLowerCase();
  const post = posts.find((p) => p.slug === requestedSlug);
  if (post) {
    res.render('postDetail', { post });
  } else {
    res.send('Post not found');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
