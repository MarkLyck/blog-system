import Post from '../models/post'

const blogAPI = 'https://tiny-za-server.herokuapp.com/collections/mlyck-blog-posts'


var Posts = Backbone.Collection.extend({
  url: blogAPI,
  model: Post
});

export default Posts
