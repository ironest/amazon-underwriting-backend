const { isCelebrate } = require("celebrate");

module.exports = function(err, req, res, next) {

    if (err && err.name === "HTTPError") {
        return res.status(err.statusCode).send(err.message);
    }

    if(err && err.name === "Passport"){
        return res.status(401).json( { error: err.message } );
    }

    if(err && isCelebrate(err)){
        return res.status(400).json( { error: err.message } );
    }

    return next(err);
}