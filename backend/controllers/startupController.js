const Startup = require("../models/Startup");


// CREATE STARTUP
const createStartup = async (req, res) => {

    try {

        const { title, description, industry } = req.body;

        const startup = await Startup.create({
            title,
            description,
            industry,
            founder: req.user.id
        });

        res.status(201).json({
            message: "Startup Created",
            startup
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

};


module.exports = {
    createStartup
};