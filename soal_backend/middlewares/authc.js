const { User } = require('../models/')
const { verifyToken } = require('../helpers/jwt')

async function authc(req, res, next) {
    try {
        let access_token = req.headers.access_token
        if (!access_token) {
            throw { name: `Unauthorized Activity` }
            // res.status(401).json({ message: `Unauthorized Activity` })
        } else {
            let payload = verifyToken(access_token)
            let userLogged = await User.findByPk(payload.id)

            if (!userLogged) {
                throw { name: `Unauthorized Activity` }
                // res.status(401).json({ message: `Unauthorized Activity` })
            } else {
                req.userLogged = {
                    id: userLogged.id,
                }
                // console.log(req.userLogged)
                // console.log(`<<<<<sukses semua ya sampe sini lanjut next`)
                next()
            }
        }

    } catch (error) {

        next(error)
    }
}

module.exports = authc