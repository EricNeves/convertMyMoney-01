const axios = require('axios')

async function extractQuotation() {
  const url = 'https://economia.awesomeapi.com.br/json/last/USD-BRL'
  const response = await axios.get(url)
  return response.data.USDBRL.ask
}

module.exports = {
  extractQuotation
}