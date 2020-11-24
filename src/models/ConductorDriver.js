const {Model, DataTypes } = require('sequelize');

class FinalDriver extends Model {
    static init(sequelize) {
        super.init({
          expiration_cnh: DataTypes.DATE,
          cnh_number: DataTypes.STRING,
          obs_ear: DataTypes.BOOLEAN, 
          vehicle_model: DataTypes.STRING,
          vehicle_brand:  DataTypes.STRING,
          vehicle_year:  DataTypes.STRING,
          vehicle_licensing:  DataTypes.BOOLEAN,        
        },{
            sequelize,
            modelName: 'ConductorDriver'
        })
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user', onDelete: 'CASCADE' })
    }
}


module.exports = FinalDriver;