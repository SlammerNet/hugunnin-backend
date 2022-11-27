export function logger(req, res, next){
    console.log(`${req.path} \t \t ${req.method}`)
    next()
}