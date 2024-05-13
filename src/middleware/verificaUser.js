module.exports = (req, res, next) => {

    const {user_id} = req.headers;

    if(!user_id) {
        return res.status(401).json({
            "error": "Usuario não logado"
        })
    }

    return next();

}