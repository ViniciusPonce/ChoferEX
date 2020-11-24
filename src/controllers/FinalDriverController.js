
const FinalDriver = require('../models/FinalDriver');
const User = require('../models/User');

module.exports = {
    async index(req, res) {
        const users = await FinalDriver.findAll({include:{model:User, as: 'user'}});

        if(!users){
            res.status(404).json({})
        }

        return res.json(users);
    },
    async getFinalDriver(req, res) {
        const { user_id } = req.params;
        const finalDriver = await FinalDriver.findByPk(user_id,{include:{model:User, as: 'user'}});
            if(!finalDriver){
                return res.status("404").send("Final not found");
            }
        return res.json(finalDriver);
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
                obs_ear
             } = req.body;

        const user = await User.create({ first_name, last_name, cpf, email, password, date_birth });

        if (user) {
            let user_id = user.id 
            const finalDriver = await FinalDriver.create({ cnh_number, expiration_cnh,obs_ear, user_id });
            if(finalDriver){
                return res.json(finalDriver);
            }else{
                user.destroy()
                return res.status(400).send('Bad Request')
            }
        }else{

            return res.status(400).send('Bad Request')
        }        
    }
};