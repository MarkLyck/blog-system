import $ from 'jquery'
import _ from 'underscore'
import Backbone from 'backbone'

import renderLogin from './views/login'
import renderPosts from './views/allPosts'
import renderNewPost from './views/newPost'
import renderSinglePost from './views/singlePost'
import bookmarks from './views/bookmarks'

let $container = $('.container')

const Router = Backbone.Router.extend({
  routes: {
    login         : 'loginView',
    signup        : 'signUpView',
    'posts'       : 'blogsView',
    'posts/new'   : 'newPostView',
    'posts/:id'   : 'singlePostView',
    'bookmarks'   : 'bookmarksView'
  },
  loginView: function() {
    console.log('RENDER LOGIN')
    let $login = renderLogin()
    $login.children('.signup-modal').addClass('hidden')
    $login.children('.login-modal').removeClass('hidden')
    $container.empty().append($login)
  },
  signUpView: function() {
    console.log('RENDER SIGNUP');
    let $login = renderLogin()
    $container.empty().append($login)
    $login.children('.login-modal').addClass('hidden')
    $login.children('.signup-modal').removeClass('hidden')
  },
  newPostView: function() {
    let $newPost = renderNewPost()
    $container.empty().append($newPost)
  },
  blogsView: function() {
    console.log('RENDER ALL POSTS')
    let $allPosts = renderPosts()
    $container.empty().append($allPosts)
  },
  singlePostView: function(id) {
    console.log('SINGLE POST');
    let $singlePost = renderSinglePost(id)
    $('#single-post-container').empty().append($singlePost)
    // $container.empty().append($singlePost)
  },
  bookmarksView: function() {
    console.log('RENDERING BOOKMARKS');
    let $bookmarks = bookmarks()
    $container.empty().append($bookmarks)
  }
})

const router = new Router()

export default router
