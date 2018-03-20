let store = require('../store');

module.exports = {
  getComments(req, res) {
    const id = req.params.postId;
    if(!store.posts[id]) {
      return res.sendStatus(400);
    }
    const comments = store.posts[id].comments || null;
    console.log(comments);
    res.status(200);
    res.send(comments);
  },
  addComment(req, res) {
    const id = req.params.postId;
    if(!req.body.text.trim() || !store.posts[id]) {
      return res.sendStatus(400);
    }
    const comment = req.body.text;
    store.posts[id].comments.push(comment);
    res.status(201);
    res.send({id});
  },
  updateComment(req, res) {
    const postId = req.params.postId;
    if(!req.body.text.trim() || !store.posts[postId]) {
      return res.sendStatus(400);
    }
    const commentId = req.params.commentId;
    const updatedComment = req.body.text;
    store.posts[postId].comments[commentId] = updatedComment;
    res.status(200);
    res.send(updatedComment);
  },
  removeComment(req, res) {
    const postId = req.params.postId;
    if(!store.posts[postId]) {
      return res.sendStatus(400);
    }
    const commentId = req.params.commentId;
    store.posts[postId].comments.splice(commentId, 1);
    res.status(204).send();
  }
}
