const Alarma = require('../../models/ftth/alarm.model')
const { getAlarmMapper } = require('../../mappers/ftth/alarm.mapper')

const postAlarm = async (req, res) => {
  const { body } = req
  const data = getAlarmMapper(body)

  try {
    let message = '';
    const where = { alarmaId: data.alarmaId }
    const { count } = await Alarma.findAndCountAll( { where } );

    if(count > 0){
      await Alarma.update( data,  { where } );
      message = 'Recurso actualizado correctamente'
    } else {
      await Alarma.create(data);
      message = 'Recurso creado correctamente'
    }

    res.status(201).json({
        code: 201,
        failed: false,
        data: {
          message
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
