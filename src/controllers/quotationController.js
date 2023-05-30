const { convert, toDollarMoney } = require('../lib/convert')

String.prototype.isValidValue = function() {
  return parseFloat(this.toString().replace(',', '.')) 
}

const index = function(req, res) {
  const { quotation, quantity } = req.query
  
  if (!quotation.isValidValue() || !quantity.isValidValue()) {
    return res.redirect('/')
  }
  
  const conversion = convert(quotation, quantity)

  res.render('quotation', { 
    quotation: toDollarMoney(quotation), 
    quantity: toDollarMoney(quantity),
    conversion
  })
}

module.exports = { index }