const postAlarm = require('./post')

module.exports = {
  paths: {
    '/api/v1/ftth/alarms': {
      ...postAlarm
    }
  }
}
