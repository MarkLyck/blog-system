import $ from 'jquery'
import moment from 'moment'

const blogAPI = 'https://tiny-za-server.herokuapp.com/collections/mlyck-blog-posts/'

function renderSinglePost(postID) {
  let $singlePost = $(`
    <div class="single-post wrapper">
      <div class="post-info">
        <h1 id="post-title">TITLE</h1>
        <p id="post-author">AUTHOR</p>
        <p id="post-time">TIME</p>
      </div>
      <p id="post-body">BODY</p>
    </div>
    `)

  let $postTitle = $singlePost.find('#post-title')
  let $postAuthor = $singlePost.find('#post-author')
  let $postTime = $singlePost.find('#post-time')

  let $postBody = $singlePost.find('#post-body')

  $.ajax(blogAPI + postID).then(function(response){
    console.log(response);
    $postTitle.text(response.title)
    $postAuthor.text(response.author)
    $postTime.text(moment(response.postTime))
    $postBody.text(response.body)
  })

  return $singlePost
}

export default renderSinglePost
