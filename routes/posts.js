module.exports = {
  getPosts(req, res) {
    console.log(req.store);
    res.status(200);
    res.send(req.store.posts);
  },
  addPost(req, res) {
    const id = req.store.posts.length;
    if(!req.body.name.trim() || !req.body.url.trim() || !req.body.text.trim()) {
      return res.sendStatus(400);
    }
    const newPost = Object.assign(
      {
        name: req.body.name || null,
        url: req.body.url || null,
        text: req.body.text || null,
        comments: []
      }
    );
    req.store.posts.push(newPost);
    res.status(201);
    res.send({id});
  },
  updatePost(req, res) {
    const id = req.params.postId;
    if(!req.body.name.trim() || !req.body.url.trim() || !req.body.text.trim()) {
      return res.sendStatus(400);
    }
    const updatedPost = Object.assign(
      {},
      req.store.posts[id],
      {
        name: req.body.name || null,
        url: req.body.url || null,
        text: req.body.text || null
      });
    req.store.posts[id] = updatedPost;
    res.status(200);
    res.send(req.store.posts[id]);
  },
  removePost(req, res) {
    const id = req.params.postId;
    req.store.posts.splice(id, 1);
    res.status(204).send();
  }
}
