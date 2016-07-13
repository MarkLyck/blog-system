import Backbone from 'backbone'
const bookmarkAPI = 'https://tiny-za-server.herokuapp.com/collections/mlyck-blog-bookmarks'

const Link = Backbone.Model.extend({
  defaults: {
    timeStamp: new Date()
  },
  urlRoot: bookmarkAPI,
  idAttribute: '_id'
})

export default Link
