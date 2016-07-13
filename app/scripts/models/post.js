import Backbone from 'backbone'
const blogAPI = 'https://tiny-za-server.herokuapp.com/collections/mlyck-blog-posts'

const Post = Backbone.Model.extend({
  defaults: {
    timeStamp: new Date()
  },
  urlRoot: blogAPI
})

export default Post
