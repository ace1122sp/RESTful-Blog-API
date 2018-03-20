const express = require('express');
const posts = require('./posts');
const comments = require('./comments');
const router = express.Router();

//post routes
router.route('/posts')
  .get(posts.getPosts)
  .post(posts.addPost);

router.route('/posts/:postId/')
  .put(posts.updatePost)
  .delete(posts.removePost);

//comment routes
router.route('/posts/:postId/comments')
  .get(comments.getComments)
  .post(comments.addComment);

router.route('/posts/:postId/comments/:commentId')
  .put(comments.updateComment)
  .delete(comments.removeComment);


module.exports = router;
