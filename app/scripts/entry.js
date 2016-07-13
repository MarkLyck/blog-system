import $ from 'jquery'
import Backbone from 'backbone'
import router from './router'

const userAPI = 'https://tiny-za-server.herokuapp.com/collections/mlyck-blog-users'
const blogAPI = 'https://tiny-za-server.herokuapp.com/collections/mlyck-blog-posts'
const bookmarkAPI = 'https://tiny-za-server.herokuapp.com/collections/mlyck-blog-bookmarks'

Backbone.history.start()

if (location.hash === '') {
  location.hash = '#login'
}

let $allPosts = $('.all-posts')
let $newPost = $('.new-post')
let $bookmark = $('.bookmark')

$allPosts.on('click', function() {
  router.navigate('posts', {trigger: true})
})
$newPost.on('click', function() {
  router.navigate('posts/new', {trigger: true})
})
$bookmark.on('click', function() {
  router.navigate('bookmarks', {trigger: true})
})
