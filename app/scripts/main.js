/* global Kinvey, $ */

'use strict';

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
    return Kinvey.User.MIC.loginWithAuthorizationCodeLoginPage('http://localhost:9000').then(function(user) {
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
  appKey: 'kid_-Jk_I5qJC',
  appSecret: 'a05d17fd04634d8e8157f397d4c0fd2a'
});
