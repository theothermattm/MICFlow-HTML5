/* global Kinvey, $ */

'use strict';

var appKey = window.APP_KEY;
var appSecret = window.APP_SECRET;
var redirectUri = window.REDIRECT_URI;

var app = window.app = {
  init: function(options) {
    return Kinvey.init(options).then(function(user) {
      $('#initialize').fadeOut(250);

      if (user) {
        $('#logout').fadeIn(250);
      }
      else {
        $('#login').fadeIn(250);
      }

      return user;
    });
  },

  login: function() {
    return Kinvey.User.MIC.loginWithAuthorizationCodeLoginPage(redirectUri).then(function(user) {
      $('#login').fadeOut(250, function() {
        $('#logout').fadeIn(250);
      });

      return user;
    });
  },

  logout: function() {
    return Kinvey.User.logout().then(function() {
      $('#logout').fadeOut(250, function() {
        $('#login').fadeIn(250);
      });
    });
  }
};

// Initialize the app
app.init({
  appKey: appKey,
  appSecret: appSecret
}).catch(function(err) {
  $('#initialize').html('<b>An error has occurred:</b> ' + err).addClass('text-closed');
  $('#initialize').append('<p>Please make sure you followed all the instructions in the README to setup the project. The README can be found at the root of the project.');
});
