var urllib = require('urllib');
var urlkit = require('url');
var querystring = require('querystring');
var _ = require('underscore');

var mockURL = function (url) {
  var result = urlkit.parse(url, true);
  result.search = querystring.stringify(_.extend(result.query, {_malformed: "malformed"})).replace('=malformed', '=%malformed');
  return urlkit.format(result);
};

var mockCookie = function (header) {
  return header;
};

var mockBody = function (body) {
  body = body || {};
  body._malformed = "%malformed";
  return body;
};

exports.get = function (url, data, callback) {

  if (typeof data === 'function') {
    callback = data;
    data = {};
  }

  console.log(url);
};

exports.post = function (url, data, callback) {

};
