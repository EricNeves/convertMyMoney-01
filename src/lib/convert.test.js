const { 
  convert, toDollarMoney, toRealMoney
} = require('./convert')

test('convert to final value', () => {
  expect(convert(5.6, 10)).toBe("R$ 56,00")
})

test('convert to dollar money', () => {
  expect(toDollarMoney(1)).toBe('$1.00')
})

test('convert to real money', () => {
  expect(toRealMoney(1)).toBe('R$ 1,00')
})

