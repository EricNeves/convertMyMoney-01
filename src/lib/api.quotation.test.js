const axios = require('axios')
const { 
  fetchQuotation 
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

