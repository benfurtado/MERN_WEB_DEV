const { logEvents } = require('./logger')

const errorHandler = (err, req, res, next) => {
    
    res.json({ message: err.message });
    logEvents(`${err.name}\t${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`, 'errLog.log')
    
    console.log(err.stack)


    const statuscode = res.statusCode ? res.statusCode : 500; //server error
    res.status(statuscode);

    res.json({message: err.message})
}

module.exports = errorHandler