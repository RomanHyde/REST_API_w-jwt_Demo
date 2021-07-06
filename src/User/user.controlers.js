const { User } = require('./user.model');
exports.getUser = async (req, res) => {
    try {
        res.status(200).send(req.user)
        
    } catch (error) {
        res.status(500).send({message: "User not found"});
    };
};

exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        const token = await user.generateAuthToken();
        const savedUser = await user.save();
        res.status(200).send(savedUser, token)
    } catch (error) {
        res.status(500).send({ message: "Could not create user" });
    };
};