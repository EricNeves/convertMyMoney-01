function convert(quotation, quantity) {
  return toRealMoney(quotation * quantity)
}

function toDollarMoney(amount) {
  return new Intl.NumberFormat('en-US',
    { style: 'currency', currency: 'USD' }
  )
  .format(amount)
}

function toRealMoney(amount) {
  return new Intl.NumberFormat('pt-BR',
    { style: 'currency', currency: 'BRL' }
  )
  .format(amount)
}

module.exports = {
  convert, toDollarMoney, toRealMoney
}