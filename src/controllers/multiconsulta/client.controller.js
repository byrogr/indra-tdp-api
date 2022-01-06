const https = require('https')

const { default: axios } = require("axios");
const Errors = require("../../errors/errors");

const getClient = async (req,res,next) => {
    const { query } = req

    try{

        const url = process.env.URL_MULTI + '/api/pruebasQueryMulticonsulta/?typeData='+ query.typeData +'&text='+ query.text

        const agent = new https.Agent({
          rejectUnauthorized: false
        });
        const respuesta = await axios.get(url, { httpsAgent: agent });

        let response = respuesta.data.response

        let result = {} , ips = {} , mensaje = '' , code = '', body =''

        if(response.cantidad == 1){
            let dato = response.resultado.resultadoMulti
            mensaje = 'Se encontro resultados de busqueda asociados a los filtros seleccionados'

            result = { serviceId: dato[0].idservicio, cmProductId: dato[0].idproducto, SaleId: dato[0].idventa, mtaProductId: dato[0].idproductomta,
                        clientCod: dato[0].IDCLIENTECRM, clientName: dato[0].Nombre, phone1: dato[0].telf1, phone2: dato[0].telf2,
                        trobaNode: dato[0].Nodo_Troba, interface: dato[0].interface, cmts: dato[0].cmts, contactPhone: dato[0].movil1,
                        activePack: dato[0].velocidad_final, ipAddress: dato[0].IPAddress, macAddress: dato[0].MACADDRESS, Bonding: dato[0].bondingCli,
                        snrDown: dato[0].nivelesRuido.downSnr, powerDown: dato[0].nivelesRuido.downPx, snrUp: dato[0].nivelesRuido.upSnr,
                        powerUp: dato[0].nivelesRuido.upPx, macState: dato[0].MACState, manufacturer: dato[0].Fabricante, model: dato[0].Modelo,
                        firmware: dato[0].Version_firmware, docsis: dato[0].docsis, voIp: dato[0].voip, ispCpe: dato[0].scopesgroup}

            ips = { macCpe : dato[0].macx, ipCpe : dato[0].publica, macMta : dato[0].macmta, ipMta : dato[0].ipmta}

            res.status(201).json({
                code: code,
                error: false,
                message: mensaje,
                QueryResult : result,
                IpsCableModemAssignment : ips
            })

        } else {
            let resultado = response.resultado
            if(resultado.length > 0){
                mensaje = resultado[0].mensaje
                next(new Errors({
                    codigo : 'SVC1001',
                    mensaje : mensaje
                }))
            }else{
                mensaje = ' Resource typeData: ' + query.typeData + ' and text: ' +  query.text + ' does not exist'
                next(new Errors({
                    codigo : 'SVC1006',
                    mensaje : mensaje
                }))
            }
        }

    } catch (err) {
        next(new Errors({
            codigo : 'SVR1000',
            mensaje : ''
        }))
    }
}

module.exports = {
    getClient
}
