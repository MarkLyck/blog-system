import $ from 'jquery'
import router from '../router'
import User from '../models/user'
import session from '../session'

const userAPI = 'https://tiny-za-server.herokuapp.com/collections/mlyck-blog-users'

function renderLogin() {
  let $session = $(`
    <div class="modal-container">
      <div class="login-modal modal">
        <h3>Login</h3>
        <input id="login-input" type="text" name="name" value="" placeholder="username">
        <button id="login-btn" type="button" name="button">Login</button>
        <button id="signup-btn-nav" type="button" name="button">or Signup</button>
      </div>
      <div class="signup-modal modal hidden">
        <h3>Signup</h3>
        <input id="signup-input" type="text" name="name" value="" placeholder="username">
        <input id="first-name-input" type="text" name="name" value="" placeholder="First Name">
        <input id="last-name-input" type="text" name="name" value="" placeholder="Last Name">
        <input id="address-input" type="text" name="name" value="" placeholder="Address">
        <input id="phone-input" type="text" name="name" value="" placeholder="Phone Number">
        <button id="signup-btn" type="button" name="button">Sign up!</button>
        <button id="login-btn-nav" type="button" name="button">or Login</button>
      </div>
    </div>
  `);

  // let $login = $('.login-modal')
  let $loginInput = $session.find('#login-input')
  let $loginBtn = $session.find('#login-btn')
  let $signUpNav = $session.find('#signup-btn-nav')


  let $signUp = $('.signup-modal')
  let $signUpBtn = $session.find('#signup-btn')
  let $signUpUsername = $session.find('#signup-input')
  let $signUpFirstname = $session.find('#first-name-input')
  let $signUpLastname = $session.find('#last-name-input')
  let $signUpAddress = $session.find('#address-input')
  let $signUpPhone = $session.find('#phone-input')
  let $loginNav = $session.find('#login-btn-nav')

  $signUpNav.on('click', function() {
    router.navigate('signup', {trigger: true})
  })

  $loginNav.on('click', function() {
    console.log('CLICK');
    router.navigate('login', {trigger: true})
  })

  $signUpBtn.on('click', function() {
    // If all fields are filled in!
    if ($signUpUsername.val() !== '' && $signUpFirstname.val() !== '' && $signUpLastname.val() !== '' && $signUpAddress.val() !== '' && $signUpPhone.val() !== '') {
      console.log('CREATE USER! WOOH');
      let session = new User({
        userName  : $signUpUsername.val(),
        firstName : $signUpFirstname.val(),
        lastName  : $signUpLastname.val(),
        address   : $signUpAddress.val(),
        phone     : $signUpPhone.val()
      })

      session.save(null, {
        success: function(response) {
          console.log('SUCCEFULLY POSTED NEW USER')
          session.set('_id', response._id)
          router.navigate('blogs', {trigger: true})
        }
      })
    }
  })

  $loginBtn.on('click', function() {
    // let session = new User();
    // How to do this in backbone?
    $.ajax(userAPI).then(function(response) {
      response.forEach(function(user) {
        // console.log(user.userName.toLowerCase());
        if (user.userName.toLowerCase() === $loginInput.val().toLowerCase()) {
          console.log('Found user');
          session.set(user);
        }
      })
      router.navigate('posts', {trigger: true})
    })
  })


  return $session
}

export default renderLogin
