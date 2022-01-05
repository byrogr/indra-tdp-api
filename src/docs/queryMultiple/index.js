const getQueryMultiple = require('./get')

module.exports = {
  paths: {
    '/api/v1/mc/queryMultiple?typeData&text': {
      ...getQueryMultiple
    }
  }
}