const info = require('./info')
const servers = require('./servers')
const tags = require('./tags')
const components = require('./components')
const alarms = require('./alarms/index')

module.exports = {
  ...info,
  ...servers,
  ...components,
  ...tags,
  ...alarms
}
