const { Router } = require('express');
const router = Router();
const { getForm, saveForm } = require('./FormController');


router.get('/', getForm);
router.post('/saveForm', saveForm);



module.exports = router;
