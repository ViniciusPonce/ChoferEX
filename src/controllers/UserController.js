const User = require('../models/User');
const bcrypt =  require('bcrypt');
const { use } = require('../routes');

module.exports = {
    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);
    },
    async getUser(req, res) {
        const { email, password } = req.params;
        const salt = bcrypt.genSaltSync();

        const user = await User.findOne({
            where: {email},
            include: { association }
        });
        if(!user){
            return res.status(404).send("user not found")
        }
        bcrypt.compare(password, user.password).then(( result) =>  {
            if(result){
                console.log('senha bd', result)
                return res.json(user);
            }else{
                console.log('senha bd', result)
                return res.status(400).send("password invalid") 
            }     
        })
    },
    async store(req, res) {
        const { first_name, last_name, cpf, email, password, date_birth } = req.body;

        const user = await User.create({first_name, last_name, cpf, email, password, date_birth});

        return res.json(user);
    },

    async deleteUser(req,res) {
        const { user_id } = req.params;
        const user = await User.findByPk(user_id)
        
        if(user){
            let deleted = user.destroy()
            if(deleted){
                return res.status(200).send("success")
            }else{
                return res.status(400).send("bad request")
            }
           
        }else{
            return res.status(404).json({error: `User not found`})
        }    }
};