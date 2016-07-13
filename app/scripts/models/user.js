import Backbone from 'backbone'
const userAPI = 'https://tiny-za-server.herokuapp.com/collections/mlyck-blog-users'

const User = Backbone.Model.extend({
  defaults: {
    signUpDate: new Date()
  },
  urlRoot: userAPI,
  idAttribute: '_id'
})

export default User
