const express = require('express');
const { route } = require('./candidateRoutes');
const router = express.Router();

router.use(require('./candidateRoutes'));
router.use(require('./partyRoutes'));

module.exports = router;