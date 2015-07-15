# HTML5 MIC Flow

This application showcases using the Mobile Identity Connect (MIC) authorization-grant login flow from Kinvey's client libraries.

Mobile Identity Connect is a service that bridges mobile applications with existing enterprise identity and single sign-on solutions. MIC enables mobile applications to integrate with a variety of identity solutions using a single OAuth2-based interface. This allows enterprise application developers to avoid the complexity of integrating these protocols into mobile, while providing enterprise IT the means to ensure that access to resources is secured only to authenticated users, as well as maintaining full control over a mobile user's identity.

## Configure Console

1.  Visit the __User__ Section of the [console](https://console.kinvey.com).
2.  Click the __Auth Source__ tab at the top of the page
3.  Set the `Type of Provider` to be `Custom`
4.  In the `Provider URL`, enter: `https://authlinkdemo.herokuapp.com/authenticate`
5.  In the `Redirect URI's: ` enter: `http://localhost:9000`

The above Auth Provider sample can be used with the username: `test` and the password: `test`.

## Setup

**Note:** Make sure you have installed NodeJS. Please visit https://nodejs.org/ for instructions on how to install.

1. Clone the Repo, or download the zip file and extract it.
2. Run `npm install` to install dependencies.
3. Run `node setup.js` to setup the project.

## Run
1. Run `npm start` to view the example.
2. Enjoy!

Take a look at our [MIC Guide](http://devcenter.kinvey.com/html5/guides/mobile-identity-connect#authenticating) for more information.
