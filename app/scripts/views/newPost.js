import $ from 'jquery'
import Post from '../models/Post'
import session from '../session'
import router from '../router'

function renderNewPost() {
  let $newPost = $(`
    <div class="new-post wrapper">
      <input id="new-post-title" type="text" name="name" placeholder="Title">
      <input id="new-post-body" type="textarea" name="name" placeholder="Your blog post...">
      <button id="new-post-btn" type="button" name="button">Submit</button>
    </div>
    `)
  let $newPostTitleInput = $newPost.find('#new-post-title')
  let $newPostBodyInput = $newPost.find('#new-post-body')
  let $newPostBtn = $newPost.find('#new-post-btn')

  $newPostBtn.on('click', function() {
    if ($newPostTitleInput.val() !== '' && $newPostBodyInput.val() !== '') {
      let post = new Post({
        title: $newPostTitleInput.val(),
        body: $newPostBodyInput.val(),
        author: session.get('userName')
      })
      post.save(null, {
        success: function(response) {
          console.log(response);
          console.log('SUCCEFULLY POSTED A NEW POST')
          post.set('_id', response.get('_id'))
          router.navigate('posts/'+response.get('_id'), {trigger: true})
        }
      })
      console.log(post);
    }
  })
  return $newPost
}


export default renderNewPost
