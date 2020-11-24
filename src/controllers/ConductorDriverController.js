const ConductorDriver = require('../models/ConductorDriver');
const User = require('../models/User');

module.exports = {
    async index(req, res) {
        const Conductors = await ConductorDriver.findAll({include:{model:User, as: 'user'}});
            if(!Conductors){
                return res.status("404").send("Condutor not found");
            }
        return res.json(Conductors);
    },
    async getConductor(req, res) {
        const { user_id } = req.params;
        const Conductors = await ConductorDriver.findByPk({where: {user_id},include:{model:User, as: 'user'}});
            if(!Conductors){
                return res.status("404").send("Condutor not found");
            }
        return res.json(Conductors);
    },
    async store(req, res) {
        const { first_name, 
                last_name, 
                cpf, 
                email, 
                password, 
                date_birth, 
                cnh_number, 
                expiration_cnh,
                obs_ear,
                vehicle_model,
                vehicle_brand,
                vehicle_year,
                vehicle_licensing
             } = req.body;

        const user = await User.create({ first_name, last_name, cpf, email, password, date_birth });

        if (user) {
            let user_id = user.id 
            const conductorDriver = await ConductorDriver.create({ 
                cnh_number, 
                expiration_cnh,
                obs_ear, 
                user_id,
                vehicle_model,
                vehicle_brand,
                vehicle_year,
                vehicle_licensing 
            });
            if(conductorDriver){
                return res.json(conductorDriver);
            }else{
                user.destroy()
                return res.status(400).send('Bad Request')
            }
        }else{

            return res.status(400).send('Bad Request')
        }        
    }
};