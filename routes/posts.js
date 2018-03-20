let store = require('../store');

module.exports = {
  getPosts(req, res) {
    console.log(store);
    res.status(200);
    res.send(store.posts);
  },
  addPost(req, res) {
    const id = store.posts.length;
    const newPost = Object.assign(
      {
        name: req.body.name || null,
        url: req.body.url || null,
        text: req.body.text || null,
        comments: []
      }
    );
    store.posts.push(newPost);
    res.status(201);
    res.send({id})
  },
  updatePost(req, res) {
    const id = req.params.postId;
    const updatedPost = Object.assign(
      {},
      store.posts[id],
      {
        name: req.body.name || null,
        url: req.body.url || null,
        text: req.body.text || null
      });
    store.posts[id] = updatedPost;
    res.status(200);
    res.send(store.posts[id]);
  },
  removePost(req, res) {
    const id = req.params.postId;
    store.posts.splice(id, 1);
    res.status(204).send();
  }
}
