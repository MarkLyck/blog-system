import $ from 'jquery'
import renderSinglePost from './singlePost'
import router from '../router'

const blogAPI = 'https://tiny-za-server.herokuapp.com/collections/mlyck-blog-posts'

function renderPosts() {
  let $allPosts = $(`
    <div class="left">
      <ul class="all-posts"></ul>
    </div>
    <div class="right">
      <div id="single-post-container"></div>
    </div>
    `)

  $.ajax(blogAPI).then(function(response) {
    response.forEach(function(post) {
      let $li = $(`
        <li class="blog-post">
          <div class="wrapper">
            <div class="wrapper">
                <h3 class="posts-title">${post.title}</h3>
                <p class="posts-date">${post.timeStamp}</p>
            </div>
            <div class="wrapper">
              <p class="posts-author">${post.author}</p>
            </div>
          </div>
          <p class="post-snippet">${post.body}</p>
        </li>
        `)
      $allPosts.find('.all-posts').append($li)
      $li.on('click', function() {
        router.navigate(`posts/${post._id}`, {trigger: true})
        // let $singlePost = renderSinglePost()
        // $allPosts.find('$single-post-container').empty().append($singlePost)
      })
    })
  })
  return $allPosts
}

export default renderPosts
