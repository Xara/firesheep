// Authors:
//   Ian Gallagher <crash@neg9.org>
register({
  name: 'Smashwords',
  url: 'http://www.smashwords.com',
  domains: [ 'smashwords.com' ],
  sessionCookieNames: [ 'sw', 'smashinflogin' ],

  identifyUser: function () { 
    var resp = this.httpGet(this.siteUrl + '/profile');
    this.userName = resp.body.querySelector('div#pageContent h1').textContent.trim();
    this.userAvatar = resp.body.querySelector('div.leftSideBox div img').src;
  }
});
