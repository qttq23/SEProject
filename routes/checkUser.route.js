const express = require('express');
const userModel = require('../models/user.model');

const router = express.Router();

router.post('/checkuser', async function(req, res) {
    const user = await userModel.checkUserValidate(req.body.user, req.body.password);

    if (!user)
        return res.json(true);

    res.json(false);
})

module.exports = router;