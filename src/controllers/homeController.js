const { extractQuotation } = require('../lib/api.quotation')

const index = async function(req, res) {
  const quotation = await extractQuotation()
  res.render('home', { 
    quotation: quotation
  })
}

module.exports = { index }