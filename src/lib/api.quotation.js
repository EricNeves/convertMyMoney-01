const axios = require('axios')

async function fetchQuotation() {
  try {
    const url = 'https://economia.awesomeapi.com.br/json/last/USD-BRL'
    const response = await axios.get(url)
    return response
  } catch (err) {
    return ''
  }
}

async function extractQuotation() {
  const result = await fetchQuotation()
  return result.data.USDBRL.high
}

module.exports = {
  fetchQuotation,
  extractQuotation
}