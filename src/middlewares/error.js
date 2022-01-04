const errorMiddleware = (err, req, res, next) => {

    let errorObject = err.responseJson()
    let codigo = errorObject.codigo 
    let mensaje = errorObject.mensaje
    let code = '', exceptionText = '', moreInfo = '', userMessage = ''
    
    if(codigo == 'SVR1000'){
        code = 500
        exceptionText = 'Generic Server Error'
        moreInfo = 'There was a problem in the Service Providers network that prevented to carry out the request'
        userMessage = 'Generic Server Fault'
    }

    if(codigo == 'SVC1001'){
        code = 400
        exceptionText = 'Invalid parameter: ' + mensaje
        moreInfo = 'API Request with an element not conforming to Swagger definitions or to a list of allowed Query Parameters.'
        userMessage = 'Invalid parameter'
    }

    if(codigo == 'SVC1003'){
        code = 400
        exceptionText = 'Requested HTTP Method Operation does not exist'
        moreInfo = 'Requested Operation does not exist'
        userMessage = 'Invalid requested Operation'
    }

    if(codigo == 'SVC0001'){
        code = 400
        exceptionText = 'Generic Client Error :' + mensaje
        moreInfo = 'API Generic wildcard fault'
        userMessage = 'Generic Client Error'
    }

    if(codigo == 'SVC1006'){
        code = 404
        exceptionText = mensaje
        moreInfo = 'Reference to a resource identifier which does not exist in the collection/repository referred (e.g.: invalid Id)'
        userMessage = 'Not existing Resource Id'
    }

    if(codigo == 'SVC1000'){
        code = 400
        exceptionText = 'Missing mandatory parameter: ' + mensaje
        moreInfo = 'API Request without mandatory field'
        userMessage = 'Missing mandatory parameter'
    }

    res.status(code).json({
        error : true,
        code : code,
        response : {
            exceptionId : codigo,
            exceptionText : exceptionText,
            moreInfo : moreInfo,
            userMessage: userMessage,
        }  
    })
}

module.exports = errorMiddleware