import $ from 'jquery'

function renderPosts() {
  let $allPosts = $(`
    <ul class="all-posts">
      <li>
        <div class="wrapper">
            <h3 class="post-title">TITLE</h3>
            <p class="post-date">DATE</p>
        </div>
        <p class="post-snippet">Snippet from post</p>
      </li>
    </ul>
    `)
  return $allPosts
}

export default renderPosts
