var codes = require('./codes')
  , quotemeta = require('quotemeta')

var characterExp = new RegExp(Object.keys(codes).map(quotemeta).join('|'), 'gi')

function unhtml(string) {
  string = String(string || '')
    // remove HTML tags
    .replace(/<\/?[^<>]*>/gi, '')
    // Convert &#number; codes
    .replace(/\&\#(\d+);/g, function(whole, code) {
      return String.fromCharCode(code)
    })
    // Convert &amp; and co.
    .replace(characterExp, function(html) {
      return codes[html]
    })

  return string
}

module.exports = unhtml
module.exports.codes = codes
