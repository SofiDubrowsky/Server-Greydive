const { User } = require('../DB_connection');

const postUser = async ({ email, name, password }) => {

    if (!email || !name || !password) {
        throw Error("Faltan datos");
    }

    const exists = await User.findOne({ where: { email } })
    
    if (exists) throw Error("Cuenta ya registrada")
    
    const newUser = await User.create({ email, name, password })

    return newUser;

};

const getUserId = async (id) => {
    const found = await User.findByPk(id)
    if(!found) throw Error('Usuario no encontrado');

    return found;
}

module.exports = {
    postUser,
    getUserId
}