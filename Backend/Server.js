const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Import routes
const creatorRoutes = require('./routes/creators');
const postRoutes = require('./routes/posts');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/patreon-clone', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});

// Parse JSON request bodies
app.use(express.json());

// Set up routes
app.use('/creators', creatorRoutes);
app.use('/posts', postRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
