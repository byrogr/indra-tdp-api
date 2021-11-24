const Mapper = require('object-mapper')

const getAlarmMapper = (src) => {
  const map = {
    'deviceDescription': 'device',
    'notificationId': 'notificationId',
    'alarm.alarmaId': 'alarmaId',
    'alarm.name': 'nombre',
    'alarm.location': 'locacion',
    'alarm.source': 'source',
    'alarm.specificProblem': 'problema',
    'alarm.reason': 'razon',
    'alarm.severity': 'severidad',
    'alarm.originalSeverity': 'severidad_original',
    'alarm.state': 'estado',
    'alarm.eventTime': 'fe_inicio',
    'alarm.clearTime': 'fe_cese',
    'additionalInfo[]': {
        "key": 'info',
        "transform": (val) => {
            return JSON.stringify(val)
        }
    },
    'lastUpdateTime': 'fe_ultima'
  }

  return Mapper(src, map)
}

module.exports = { getAlarmMapper }
