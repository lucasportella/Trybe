const authMiddleware = (req, res, next) => {
    if (!req.headers.authorization || req.headers.authorization.length !== 16) {
        return res.status(401).json({message: 'Token inválido!'})
    }
    next();
}

const fieldMiddleware = (req, res, next) => {
    const  { email, password, firstName, phone} = req.body
    const verifyFields = [email,password,firstName, phone].every((field) => field );
    if (!verifyFields) {
        return res.status(401).json({ message: 'missing fields'})
    } else {
        const token = crypto.randomBytes(8).toString('hex');
        res.status(200).json({token})
    }

}

module.exports = {authMiddleware, fieldMiddleware};
