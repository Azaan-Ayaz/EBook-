const contactModel = require("../Model/model");

const createContact = async (req, res) => {
    try {
        const { firstName, lastName, email, message } = req.body;

        /* Validation */
        if (!firstName) {
            return res.status(400).json("First Name is required");
        }

        if (!lastName) {
            return res.status(400).json("Last Name is required");
        }

        if (!email) {
            return res.status(400).json("Email is required");
        }

        if (!message) {
            return res.status(400).json("Message is required");
        }

        /* Save User */
        try {
            const user = new contactModel({
                firstName,
                lastName,
                email,
                message
            });
        
            // Save the new contact document
            const newUser = await user.save();
        
            res.status(200).send({
                success: true,
                message: "Contact list updated",
                newUser
            });
        
        } catch (error) {
            console.log(error);
            res.status(500).send({
                success: false,
                message: "Internal Server Error"
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Internal Server Error"
        });
    }
};

module.exports = { createContact };
