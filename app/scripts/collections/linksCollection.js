import Link from '../models/link'

const bookmarkAPI = 'https://tiny-za-server.herokuapp.com/collections/mlyck-blog-bookmarks'

var Links = Backbone.Collection.extend({
  url: bookmarkAPI,
  model: Link
});

export default Links
