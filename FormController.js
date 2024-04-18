const FormModel = require('./FormModel');


module.exports.getForm = async(req, res) => {
    const userForm = await FormModel.find();
    res.send(userForm);
}


module.exports.saveForm = async(req, res) => {
    const { name, email, phone, message } = req.body;
    FormModel.create({ name, email, phone, message })
    .then((data) => {console.log('Form is added!')
    res.send(data)
})
}