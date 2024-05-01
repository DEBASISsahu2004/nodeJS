// we are not required to pass the parameter in the logger, express does it for us
// when we work with mioddleware we must pass it to the next middleware unless we terminate the cycle by sending back a response
// middleware function
const logger = (req, res, next)=>{
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time);
    // res.send('Testing'); // terminating
    next(); // passing to the next middleware
}

module.exports = logger;