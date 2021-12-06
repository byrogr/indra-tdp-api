const  basicAuth  = require("basic-auth")

const authentication = ( req, res, next ) =>{
  const user = basicAuth(req);

  if (!user || !user.name || !user.pass) {
    return res.status(401).json({
      code: 401,
      failed: true,
      error: {
        message: 'Ingresar Datos de Autenticacion'
      }
    });
  }

  if (user.name !== 'telefonica' || user.pass !== 'telefonica') {
    return res.status(401).json({
      code: 401,
      failed: true,
      error: {
        message: 'Datos de Auntenticacion Incorrectos'
      }
    });
  }

  next();
}

module.exports = authentication
