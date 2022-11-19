const { comparePassword } = require('../helpers/bcrypt');
const { signToken } = require('../helpers/jwt');
const { User, Epresence } = require('../models')

class UserController {

    static async login(req, res, next) {
        try {
            // dapatkan data dari body
            let bodyLogin = {
                email: req.body.email,
                password: req.body.password
            }

            if (!bodyLogin.email || !bodyLogin.password) {
                throw {
                    name: `invalid email/password`
                }
            }

            // cari by email
            let findUser = await User.findOne({ where: { email: bodyLogin.email } })
            // console.log(findUser, `<<<< masuk`)
            // kalo gaada
            if (!findUser) {
                throw {
                    name: `invalid email/password`
                }
            }
            // compare password
            // console.log(findUser.password, `<<< ini pas`)
            const passwordValidation = comparePassword(bodyLogin.password, findUser.password)
            // console.log(passwordValidation, `<<<< ini hasil bandingin password`)
            if (!passwordValidation) {
                throw {
                    name: `invalid email/password`
                }
            }
            // bikin token nya
            let usernameFind = findUser.username
            const payload = {
                id: findUser.id,
            }
            const access_token = signToken(payload)
            res.status(200).json({ access_token, usernameFind })

        } catch (error) {
            next(error);
        }
    }

    static async getData(req, res, next) {
        try {
            const id_logged = req.userLogged.id
            console.log(id_logged)
            const findUser = User.findByPk(1)
            const findAbsenUser = await Epresence.findAll(
                {
                    where: { id_users: id_logged }
                })
            // const findUser = User.findByPk(1)

            res.status(200).json(findAbsenUser)
            // res.status(200).json(findUser)

        } catch (error) {
            console.log(error, `<< ni eror`)
            next(error)
        }
    }
}

module.exports = UserController;