const Card = require('../models/Card');
const User = require('../models/User');

module.exports = {
    async index(req, res) {
        const { user_id } = req.params;

        const cards = await User.findByPk({where: {user_id},include:{model:User, as: 'user'}});
        if(!user){
            return res.status(404).send('user not found')
        }

        if(!cards){
            return res.status(404).send("user has no card")
        }

        return res.json(cards);
    },
    async store(req, res) {
        const { user_id } = req.params;
        const { due_date, final_number, cvv} = req.body;

        const user = await User.findByPk(user_id)
        if(user){
            const card = await Card.create({  due_date, final_number, cvv, user_id });
            return res.json(card);
        }else{
            return res.status(404).send('user not found')
        }
        
    }
};