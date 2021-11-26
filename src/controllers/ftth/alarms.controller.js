const Alarma = require('../../models/ftth/alarm.model')
const { getAlarmMapper } = require('../../mappers/ftth/alarm.mapper')

const postAlarm = async (req, res) => {
  const { body } = req
  const data = getAlarmMapper(body)

  try {

    let message = '';
    const {count, rows} = await Alarma.findAndCountAll({ where: { alarmaId: data.alarmaId } });
    
    if(count > 0){
      await Alarma.update(
        {
          device : data.device,
          notificationId : data.notificationId,
          nombre : data.nombre,
          locacion : data.locacion,
          source : data.source,
          problema : data.problema,
          razon :  data.razon,
          severidad : data.severidad,
          severidad_original : data.severidad_original,
          estado : data.estado,
          fe_inicio : data.fe_inicio,
          fe_cese : data.fe_cese,
          info : data.info,
          fe_ultima : data.fe_ultima
        },{
          where:{ 
            alarmaId: data.alarmaId
          }
        });
        message = 'Recurso actualizado correctamente'
    } else {
      await Alarma.create(data);
      message = 'Recurso creado correctamente'
    }

    res.status(201).json({
        code: 201,
        failed: false,
        data: {
            message: message
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
