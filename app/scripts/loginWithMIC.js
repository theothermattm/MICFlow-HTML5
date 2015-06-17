var redirectUri = 'http://localhost:3000';
Kinvey.User.MIC.loginWithAuthorizationCodeLoginPage(redirectUri).then(function(user) {
  // The user is logged in.
}).catch(function(err) {
  // An error occurred while trying to login with MIC.
});
