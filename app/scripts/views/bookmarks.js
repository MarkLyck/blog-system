import $ from 'jquery'
import Link from '../models/link'
import router from '../router'

const bookmarkAPI = 'https://tiny-za-server.herokuapp.com/collections/mlyck-blog-bookmarks'

function renderBookmarks() {
  let $bookmarks = $(`
      <div class="bookmarks-container">
        <button id="sort-by-url" type="button" name="button">URLS</button>
        <button id="sort-by-tag" type="button" name="button">TAGS</button>

        <ul id="bookmarksList"></ul>
        <button id="new-bookmark" type="button" name="button">New Bookmark</button>
      </div>
      <div class="modal-container hidden">
        <div class="bookmark-modal modal">
          <input id="bm-title-input" type="text" name="name" placeholder="Title">
          <input id="bm-url-input" type="text" name="name" placeholder="URL">
          <input id="bm-tags-input" type="text" name="name" placeholder="Tags">
          <button id="create-bookmark" type="button" name="button">Create Bookmark</button>
        </div>
      </div>
    `)

  let $modalContainer = $bookmarks.filter('.modal-container')

  let $sortByURL = $bookmarks.find('#sort-by-url')
  let $sortByTag = $bookmarks.find('#sort-by-tag')
  let $newBookmark = $bookmarks.find('#new-bookmark')

  let $titleInput = $bookmarks.find('#bm-title-input')
  let $urlInput = $bookmarks.find('#bm-url-input')
  let $tagInput = $bookmarks.find('#bm-tags-input')
  let $createBM = $bookmarks.find('#create-bookmark')

  let $bookmarksList = $bookmarks.find('#bookmarksList')

  $.ajax(bookmarkAPI).then(function(response){
    response.forEach(bookmark => {
      let $li = $(`
        <li>
        <div class="wrapper">
          <h3 class="bm-title">${bookmark.title}</h3>
          <h3 class="bm-url">${bookmark.url}</h3>
        </div>
        <button class="bm-tag">${bookmark.tags}</button>
        </li>
        `)
      $bookmarksList.append($li)
    })
  })

  $newBookmark.on('click', function() {
    console.log('CLICK')
    console.log($modalContainer);
    $modalContainer.removeClass('hidden')
  })

  $createBM.on('click', function() {
    if ($titleInput.val() !== '' && $urlInput.val() !== '' && $tagInput.val() !== '') {
      let link = new Link({
        title: $titleInput.val(),
        url: $urlInput.val(),
        tags: $tagInput.val()
      })
      link.save(null, {
        success: function(response) {
          console.log('Created bookmark');
          router.navigate('bookmarks', {trigger: true})
        }
      })
    }
  })
  return $bookmarks
}

export default renderBookmarks
