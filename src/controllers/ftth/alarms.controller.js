const Alarma = require('../../models/ftth/alarm.model')
const { getAlarmMapper } = require('../../mappers/ftth/alarm.mapper')

const postAlarm = async (req, res) => {
  const { body } = req
  const data = getAlarmMapper(body)

  try {
    let message = ''
    const where = { alarmaId: data.alarmaId }
    const { count } = await Alarma.findAndCountAll( { where } );
    let frame = '', slot = '', port='', onuid=''

    const info = JSON.parse(data.info)

    if( info != null){
      frame = (info.map(x => x.key).indexOf('Frame') == -1) ? null : info[info.map(x => x.key).indexOf('Frame')].value
      slot = (info.map(x => x.key).indexOf('Slot') == -1) ? null : info[info.map(x => x.key).indexOf('Slot')].value
      port = (info.map(x => x.key).indexOf('Port') == -1) ? null : info[info.map(x => x.key).indexOf('Port')].value
      onuid = (info.map(x => x.key).indexOf('ONUID') == -1) ? null : info[info.map(x => x.key).indexOf('ONUID')].value

      data.port_id = frame + '-' + slot + '-' + port + '-' + onuid
      data.serial_number = (info.map(x => x.key).indexOf('Mac') == -1 ) ? null : info[info.map(x => x.key).indexOf('Mac')].value
    }
    
    if(count > 0){
      await Alarma.update( data,  { where } );
      message = 'Recurso actualizado correctamente'
    } else {
      await Alarma.create( data );
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
