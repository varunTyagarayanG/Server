const express = require('express');
const router = express.Router();
const assetController = require('../controllers/assetController');

router.post('/add', assetController.addAsset);

module.exports = router;
