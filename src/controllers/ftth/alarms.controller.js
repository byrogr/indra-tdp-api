const Alarma = require('../../models/ftth/alarm.model')
const { getAlarmMapper } = require('../../mappers/ftth/alarm.mapper')

const postAlarm = async (req, res) => {
  const { body } = req
  const data = getAlarmMapper(body)

  try {
    const alarma = new Alarma(data)
    await alarma.save()

    // todo: Validaciones

    res.json({
        code: 201,
        failed: false,
        data: {
            message: 'Recurso creado correctamente'
        }
    })
  } catch (err) {
    console.log(err)
    res.status(500).json({
        code: 500,
        failed: true,
        error: {
            message: 'Error al conectarse con el servicio'
        }
    })
  }
}

module.exports = {
    postAlarm
}
