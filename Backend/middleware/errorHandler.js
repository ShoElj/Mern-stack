const { logEvents} = require('./logger');

const errorHnandler = (err, req, res, next) =>{
    logEvents(`${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`, 'errLog.log')
    console.log(err.stack)

    const staus = res.StausCode ? res.statusCode : 500 //Server error

    res.status(staus)

    res.json({message: err.message})
}
module.exports = errorHnandler