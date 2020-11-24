const {Sequelize, Model, DataTypes } = require('sequelize');
const bcrypt =  require('bcrypt');

class User extends Model {
    static init(sequelize) {
        super.init({
          first_name: DataTypes.STRING,
          last_name: DataTypes.STRING,
          cpf: DataTypes.STRING,
          date_birth: DataTypes.DATE,
          email: DataTypes.STRING,
          password: DataTypes.STRING, 
        },{
            hooks: {
                beforeCreate: ( async(user, options) => {
                    const salt = bcrypt.genSaltSync();
                    user.password = bcrypt.hashSync(user.password, salt);
                })
              },
            sequelize,
            modelName: 'User'
        })
    }

    static associate(models) {
        this.hasMany(models.Card, { foreignKey: 'user_id', as: 'cards', onDelete: 'CASCADE' })
        this.hasOne(models.FinalDriver, { foreignKey: 'user_id', as: 'FinalDriver', onDelete: 'CASCADE' })
    }
}


module.exports = User;