const axios = require('axios')
const {
  fetchQuotation, pure
} = require("./api.quotation")

jest.mock('axios')

test('fetch quotation', () => {
  const expectedValue = {
    data: {
      USDBRL: {
        high: '5.1279',
      }
    }
  }

  axios.get.mockResolvedValue(expectedValue)

  fetchQuotation()
    .then(response => {
      expect(response).toEqual(expectedValue)
    })
})

test('extract quotation', () => {
  const expectedValue = {
    data: {
      USDBRL: { 
        high: '5.1279'
      }
    }
  }

  const fetchQuotation = jest.fn()
  fetchQuotation.mockImplementation(() => expectedValue)

  const extractQuotation = pure.extractQuotation({ fetchQuotation })
  
  extractQuotation()
    .then(response => {
      expect(response).toBe(expectedValue.data.USDBRL.high)
    })
})

