import $ from 'jquery'
import _ from 'underscore'
import Backbone from 'backbone'

const Router = Backbone.Router.extend({
  routes: {
    login         : 'loginView',
    person         : 'personView',
    'posts/new'   : 'newPostView',
    'blogs'   : 'blogsView'
  },
  loginView   : function() {console.log('RENDER LOGIN')},
  personView   : function() {console.log('RENDER ALL POSTS')},
  newPostView    : function() {console.log('RENDER SINGLE POST')},
  blogsView : function() {console.log('RENDER NEW POST')}
})

const router = new Router()

export default router
