const Errors = require("../errors/errors")

const validarHeader = (req, res, next) => {
    let service = req.header('unica-serviceid')
    let pid = req.header('unica-pid')
    let app = req.header('unica-application')
    let user = req.header('unica-user')

    let mensaje = '', errorObject

    if(!service || service == ''){
        mensaje = 'El campo UNICA-ServiceId no debe estar vacio'
    } else if (!pid || pid == ''){
        mensaje = 'El campo UNICA-PID no debe estar vacio'
    } else if (!app || app == ''){
        mensaje = 'El campo UNICA-Application no debe estar vacio'
    } else if (!user || user == ''){
        mensaje = 'El campo UNICA-User no debe estar vacio'
    }

    if(mensaje != ''){
        next(new Errors({
            codigo : 'SVC0001',
            mensaje :  mensaje
        }))
    }

    res.set({
        'UNICA-ServiceId' : service,
        'UNICA-PID' : pid
    })

    res.removeHeader('X-Powered-By')
    res.removeHeader('Access-Control-Allow-Origin')
    res.removeHeader('Date');
    res.removeHeader('Connection');
    res.removeHeader('Keep-Alive');
    res.removeHeader('Content-Type');

    next();
}

module.exports = validarHeader