const {Model, DataTypes } = require('sequelize');

class Card extends Model {
    static init(sequelize) {
        super.init({
          due_date: DataTypes.DATE,
          final_number: DataTypes.STRING,
          cvv: DataTypes.INTEGER, 
        },{
            sequelize,
            modelName: 'Card'
        })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'cards', onDelete: 'CASCADE' })
    }
}


module.exports = Card;