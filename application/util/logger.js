const logger = (req, res, next) => {
    console.log(`Received ${req.method} request to ${req.path} from origin: ${req.get('origin')}`);
    next();
};
module.exports = logger;