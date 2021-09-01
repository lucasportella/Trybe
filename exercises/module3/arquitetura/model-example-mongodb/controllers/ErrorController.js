module.exports = (err, req, res, next) => {
    if (err) {
        return res.status(400).json({error: { message: 'deu erro'}})
    }
}