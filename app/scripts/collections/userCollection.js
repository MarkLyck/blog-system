import User from '../models/user'

const userAPI = 'https://tiny-za-server.herokuapp.com/collections/mlyck-blog-users'

var Users = Backbone.Collection.extend({
  url: userAPI,
  model: User
});

export default Users
