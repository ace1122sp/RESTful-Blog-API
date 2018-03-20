# posts post data
curl -H "Content-Type: application/json" -X POST -d '{"name": "Top 10 ES6 Features", "url": "http://webapplog.com/es6", "text": "some text"}' "http://localhost:3000/posts"

# updates post data at specific id
curl -H "Content-Type: application/json" -X PUT -d '{"name": "Top 10 ES6 Features Every Developer Must Know", "url": "http://webapplog.com/es6", "text": ""}' "http://localhost:3000/posts/0"

# gets post data
curl "http://localhost:3000/posts"

# deletes post data at specific id
curl -X DELETE "http://localhost:3000/posts/0"




# posts comments data
curl -H "Content-Type: application/json" -X POST -d '{"name": "Top 10 ES6 Features", "url": "http://webapplog.com/es6", "text": "some text"}' "http://localhost:3000/posts"
curl -H "Content-Type: application/json" -X POST -d '{"text": "some comment"}' "http://localhost:3000/posts/0/comments"
curl "http://localhost:3000/posts/0/comments"

# updates comment data at specific id
curl -H "Content-Type: application/json" -X PUT -d '{"text": "updated comment"}' "http://localhost:3000/posts/0/comments/0"

# gets comment data
curl "http://localhost:3000/posts/0/comments"

# deletes comment data at specific id
curl -X DELETE "http://localhost:3000/posts/0/comments/0"
curl "http://localhost:3000/posts/0/comments"
curl -X DELETE "http://localhost:3000/posts/0/"


# posts comments data
curl -H "Content-Type: application/json" -X POST -d '{"name": "Top 10 ES6 Features", "url": "http://webapplog.com/es6", "text": ""}' "http://localhost:3000/posts"
curl -H "Content-Type: application/json" -X POST -d '{"text": "some comment"}' "http://localhost:3000/posts/0/comments"
curl "http://localhost:3000/posts/0/comments"

# updates comment data at specific id
curl -H "Content-Type: application/json" -X PUT -d '{"text": ""}' "http://localhost:3000/posts/0/comments/0"

# gets comment data
curl "http://localhost:3000/posts/0/comments"

# deletes comment data at specific id
curl -X DELETE "http://localhost:3000/posts/0/comments/0"
curl "http://localhost:3000/posts/0/comments"
curl -X DELETE "http://localhost:3000/posts/0/"
